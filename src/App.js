import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import TitleComponent from './components/catalogo/title/title';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <TitleComponent name= "Gato"/>
    </div>
  );
}

export default App;
