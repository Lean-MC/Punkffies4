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
             {/* 
             <button className='option'>Punkffies</button>
         <button className='option'>Punkcakes</button>
         <button className='option'>Punktres</button>
             */}
             
             {/*
              <NavLink to='/list' className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>List</NavLink>
             <NavLink to='/detail' className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>Detail</NavLink>
             */}
             
         </div>
         {/*podemos usar NavLink la diferencia es que viene con un className isActive seria como una funcion.. isActive seria true
         
         <NavLink to='/list' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>List</NavLink> (hay que poner 2 estilos uno para ActiveOption
         
         y otro para Option .. de distintos colores para diferenciar cuando esta activo y cuando)*/ }

           { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
           
          >{cat.description}</NavLink>)}

         <div>
             
             <CartWidget />
             
        </div>
        
        

     </nav>
)
}

export default NavBar