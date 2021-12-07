
import { useEffect, useState } from "react";
/* import getProducts from "../services/HanMadePromise"; */

import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";



const ItemListContainer = ({ gretting }) => { 
      const [ products, setProducts] = useState ([])



      const getProductsFetch = () => {
        fetch("../JSON/DataList.json").then((response) => response.json())
        .then (data => setProducts (data));
      };
      
/*       useEffect(() => {
        getProducts
          .then((res) => setProducts (res))
          .catch ((err) => alert ("Ha ocurrido un error" , err))
      }) */
      useEffect(() => {
        setTimeout(() => getProductsFetch(), 2000);
        
    }, []);
    
    
/*       useEffect(() => {
          getProducts
          .then(res => {
              setProducts(res)
          })
          .catch (err => alert ('estamos  ante un problema ', err))

      }, [])
    */

     

    return(
      <>  
        <h2> Item List Container </h2>
        <h3>{gretting}</h3>
        <h2><ItemDetailContainer/></h2>
        <ItemCount stock={5} initial={1} />
       

       
        
        <ItemList products = {products} />
        <ItemList products = {products} /> 
      
        
      </>  
    );
};





export default ItemListContainer;