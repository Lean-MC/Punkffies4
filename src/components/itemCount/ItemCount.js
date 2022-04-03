import React,{useState} from 'react';
import './itemCount.css'


const ItemCount = ({onAdd,stock,initial,count}) => {
return <div className='ItemCount'>

    <button onClick={() => {if(count > initial) {onAdd('-')}}}>-</button>
           {count}
    <button onClick={() => {if(count < stock) {onAdd('+')}}}>+</button>
    <div>
    <button>Agregar al carrito</button>
    </div>
    
    
</div>
}

export default ItemCount;