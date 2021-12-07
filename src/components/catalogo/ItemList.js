
import ItemDetail from "./ItemDetail"

const ItemList = ({products}) => {
    console.log ('Products en Item List', products)
    return (
        <div>
            {products.map (product =>  { 
             return (   <ItemDetail 
                key = {product.id}
                img = {product.img}
                title = {product.title}
                categoria = { product.categoria} 
                price = {product.price}
                stock = {product.stock}
                />)

            })}
        </div>


    )
}

export default ItemList