
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './notification/Notification';




const App = () => {
  
  return (
      <div className="App">
        
        <NotificationProvider> 
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            
            <Routes>
              <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter> 
        
        </CartContextProvider> 
        </NotificationProvider>
        <div className='footer'>
        Knowledge is power - with love by <a href="https://github.com/Lean-MC">Lean-MC</a>
        </div>
        
      </div>
       
  );
  
}

export default App;
