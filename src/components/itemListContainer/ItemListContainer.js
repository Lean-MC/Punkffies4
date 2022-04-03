import React,{useState} from "react";
import ItemCount from "../itemCount/ItemCount"

const ItemListContainer = (props) => {
   const [count,setCount] = useState(1);

   const onAdd = (condition) => {
       if (condition === '-'){
           setCount(count - 1);
       } 
       if (condition === '+'){
        setCount(count + 1);
       }
    };
   const stock = 6;
   const initial = 3;
    
    
    return(
        
        <div>
            <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count}/>
        </div>
    );

};

export default ItemListContainer