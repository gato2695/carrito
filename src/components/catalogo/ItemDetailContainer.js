import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import products from "./products";

export const getProducts1 = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve ( products [1])
        }, 2000)
    })
};

function ItemDetailContainer() {
    const [products, setProducts] = useState ([])

    const getProductsFetch = () => {
        fetch("../JSON/DataListDesafio.json").then((response) => response.json())
        .then (data => setProducts (data));
      };
      useEffect(() => {
        setTimeout(() => getProductsFetch(), 2000);
        
    }, []);
return (
    <div>
        <h2>Item Detail Container</h2>
        {products.map((product) => <h3 key = {product}> / {product.id} /{product.title} Link Imagen {product.img} / {product.categoria} / {product.price} US</h3>)} 
    </div>
    )
}

/* const ItemDetailContainer = ({ gretting2 }) => {
    const [product, setProduct] = useState([])
    console.log('aaa', product)

    
    useEffect(()=> {
    getProduct 
    .then (res => {
        setProduct (res)
    })
    .catch (err => alert ("Prroblemas",err))
}, [])};

 */

export default ItemDetailContainer