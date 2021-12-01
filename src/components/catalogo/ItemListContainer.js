import { useEffect, useState } from "react";
import getProducts from "../services/HanMadePromise";

import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ gretting }) => { 
     

      const [ products, setProducts] = useState ([])
      

      useEffect(() => {
          getProducts
          .then(res => {
              setProducts(res)
          })
          .catch (err => alert ('estamos  ante un problema ', err))

      }, [])
   

    return(
      <>  
        <h2> Item List Container </h2>
        <h3>{gretting}</h3>
        <ItemCount stock={5} initial={1} />
        <ItemList products = {products} />
      </>  
    );
};





export default ItemListContainer;