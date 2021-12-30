import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/catalogo/ItemListContainer';
import ItemDetailContainer from './components/catalogo/ItemDetailContainer';
import Cart from './components/Cart'
import NoPage from './components/NoPage';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
      <>
        <CartProvider>
            <NavBar pageName="Tienda musical La Nota"/>
            <Routes>
              <Route path="/" element={<Home greeting="Bienvenidos a nuestra tienda Musical"/>}/>
              <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/Cart" element={<Cart/>}/>
              <Route path="*" element={<NoPage/>}/>
            </Routes>
        </CartProvider> 

      
      </>
    
  );
}

export default App;
