import Item from "./Item"

const ItemList = ({products}) => {
    console.log ('Products en Item List', products)
    return (
        <div>
            {products.map (product =>  { 
             return (   <Item 
                key = {product.id}
                title = {product.title}
                description = {product.description}
                categoria = { product.categoria} 
                price = {product.price}
                stock = {product.stock}
                />)

            })}
        </div>


    )
}

export default ItemList