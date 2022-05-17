import React from 'react';
import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'
import {  NavLink ,Link} from 'react-router-dom'
import { useState,useEffect } from 'react';
import { firestoreDb } from '../../services/firebase';
import { getDocs,collection } from 'firebase/firestore';


const NavBar = () => {

    const [categories,setCategories] = useState([])

    useEffect(() =>{
        getDocs(collection(firestoreDb,"categories")) .then(response => {
            const categories = response.docs.map(doc => {
                return { id:doc.id, ...doc.data()}

            })
            setCategories(categories)

        })

    })

    return(
     <nav className="NavBar">
         <div className='title'>
             <Link to='/'>Punkffies</Link>
        </div>

         <div className='categories'>
         
        </div>
       

           { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
           
          >{cat.description}</NavLink>)}

         <div>
             
             <CartWidget />
             
        </div>
        
        

     </nav>
)
}

export default NavBar