
import { useState, useEffect } from 'react'
//import { getProducts } from '../../asyncmock'
import { getDocs, collection ,query ,where} from "firebase/firestore"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const collectionRef = categoryId
        ? query(collection(firestoreDb,"products"), where("category","==",categoryId))
        : collection(firestoreDb,"products")

            getDocs(collectionRef).then( response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return{ id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })

    }, [categoryId])

    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }

    return(
        <div className='ItemListContainer'> 
            <ItemList products={products}/>
        </div>
    )
}



export default ItemListContainer