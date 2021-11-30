import { useState } from "react";

const ItemCount = ({stock , initial}) => { 
   // hook para el contador
   const [count, setCount] = useState (initial)
   const addItem =() => {
         const newValue = count + 1
         if (newValue <= stock){
             setCount (newValue)
         }
   }

   const quitItem =() => {
       const newValue = count - 1
       if (newValue >= initial ) {
           setCount(newValue)
       }
   }

   const onAdd =() => {
}


    return(
        <>
        <h2>Producto Numero 1</h2>
        <div>

        <button onClick= {addItem}> + </button>
        <h3>Cantidad {count} </h3>
        <button onClick = {quitItem}> - </button>
        <button> Agregar al Carrito </button>
        </div>
    </>
    )
}

export default ItemCount;