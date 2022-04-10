import { useState } from 'react'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'


const App = () => {
const [show, setShow] = useState({ path: 'list', param: '1'})

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
      <div className="App">
        <Navbar />
        <ItemListContainer greeting={'Hola coders'} />
        <ItemDetailContainer/>
      

        {/* <button onClick={() => setShow(!show)}>{show ? 'Desmontar contador' : 'Montar contador'}</button>
        { show ? <Counter initial={0} stock={10} onAdd={handleOnAdd}/> : null } */}
      </div>
  );
}

export default App;
