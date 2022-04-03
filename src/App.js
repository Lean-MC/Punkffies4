import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';





const App = () => {

  const props ={
    title: 'Hola Coder',
    props:'2'
  }
  
  return (
       <div className="App">
      
      <Navbar />
      
      <ItemListContainer {...props}/>
      </div>
  );
}

export default App;