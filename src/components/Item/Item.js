import './Item.css'

const Item = ({id,name, img,price}) => {
    return(

        <section className='Item'> 
            <div className='card'>
            <picture>
            <img src={img} alt={name}/>
            </picture>
            <div className='Contenido'>
            <h3>{name}</h3>
            <button>Ver Detalle</button>
            </div>
            </div>
            
        </section>


       
       
    )
}

export default Item 