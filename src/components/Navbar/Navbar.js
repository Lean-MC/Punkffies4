import React from 'react';
import './Navbar.css'
import CartWidget from '../cartWidget/CartWidget'


const Navbar = () => {
    return(
     <nav className="Navbar">
         <div>
             <h3>Punkffies</h3>
        </div>

         <div>
         <button>Punkffies</button>
         <button>Punkcakes</button>
         <button>Punktres</button>
         </div>

         <div>
             <CartWidget />
             
        </div>
        
        

     </nav>
)
}

export default Navbar