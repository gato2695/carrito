import ItemListContainer from "./catalogo/ItemListContainer";
import './Home.css'

const Home = ({ greeting }) => {
  return (
    <>
      <div className="heroImage">
        <h1 className="greeting">{greeting}</h1>
      </div>
      <ItemListContainer/>
    </>
  );
};

export default Home;
