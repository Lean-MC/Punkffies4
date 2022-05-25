import './Cart.css'
import { useContext, useState } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'



const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: '',
                phone: '',
                email: ''
            },
            total: getTotal(),
            date: new Date()
        }
       

       



        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <h1>Estamos armando tu pedido</h1>
    }

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            
            <div>
                <h3>Completa el formulario</h3>
                <form>

                    <label>Nombre</label>
                    <input>
                    type="text"
                    name="name"
                    placeholder='Tu Nombre'
                    autoComplete="off"
                    value="name"
                    
                    </input>
                    <br/>

                    <label>Email</label>
                    <input> type="text"
                    name="email"
                    placeholder='const@email.com'
                    autoComplete="off"
                    value="email" 
                    
                    </input>
                    <br/>

                    <label>Celular</label>
                    <input>
                    type="number"
                    name="phone"
                    autoComplete="off"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    value="phone"
                    
                    </input>
                    <br/>
                   </form>
                   <h3>Nos pondremos en contacto con usted para gestionar el envio</h3>
                   <h3>Total a pagar: ${getTotal()}</h3>
            </div>
            <button onClick={() => clearCart()} className="Button">Borrar Compra</button>
            <button onClick={() => createOrder()} className="Button">Confirmar Compra</button>

        </div>
    )
}

export default Cart