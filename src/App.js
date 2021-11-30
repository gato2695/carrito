import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import TitleComponent from './components/catalogo/title/title';
import ItemListContainer from './components/catalogo/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <TitleComponent name= "Gato"/>
      <ItemListContainer />
    </div>
  );
}

export default App;
