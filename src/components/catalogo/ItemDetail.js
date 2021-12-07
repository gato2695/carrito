const ItemDetail = ({img,categoria, price, stock, title}) =>{
    return(
       <div>
            <h2> {img} </h2>
            <h3> {title}</h3>
            <h3> {price} </h3>
            <p>  {categoria} </p> 
            <p>  Stock {stock}</p> 

       </div>
    )
}

export default ItemDetail