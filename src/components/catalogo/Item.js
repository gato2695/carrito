const Item = ({description, price, stock, title}) =>{
    return(
       <div>
            <h3> {title}</h3>
            <h2> {price} </h2>
            <p>  {description} </p> 
            <p>  Stock {stock}</p> 

       </div>
    )
}

export default Item