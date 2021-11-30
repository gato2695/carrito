import ItemCount from "./ItemCount";

const ItemListContainer = ({ gretting }) => { 
    return(
      <>  
        <h2> Item List Container </h2>
        <h3>{gretting}</h3>
        <ItemCount stock={5} initial={1} />
      </>  
    );
};

export default ItemListContainer;