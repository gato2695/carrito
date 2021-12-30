import Item from './Item';
import Stack from '@mui/material/Stack';

const ItemList = ({products}) => {
    return (
        <>
        <Stack direction="column" spacing={3} sx={{marginTop: 2}}>
            {products.map(product => {
                return(
                    <Item 
                    key={product.id}
                    id={product.id}
                    name={product.name}  
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    price={product.price}
                    />
                    )
                })}
        </Stack>
        </>
    )
}

export default ItemList