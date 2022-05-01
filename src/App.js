import { useState, createContext } from 'react'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Form from './components/Form/Form';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './notification/Notification';

// export const Context = createContext()

const App = () => {
  // const [cart, setCart] = useState([])
  // console.log(cart)
  return (
      <div className="App">
        {/* <Context.Provider value={{ cart, setCart}}> */}
        <NotificationProvider> 
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            {/* <Link to='/form' className='Option' > Form </Link> */}
            <Routes>
              <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/form' element={<Form />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter> 
        {/* </Context.Provider> */}
        </CartContextProvider> 
        </NotificationProvider>
      </div>
  );
}

export default App;
