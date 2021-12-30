import { useState, useContext } from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { CartContext } from '../../contexts/CartContext'

const ItemCount = ({ product, initial }) => {
    const [count, setCount] = useState(initial); 

    const { onAdd } = useContext(CartContext); 

    const addItem = () => { 
        if (count < product.stock){
            setCount(count + 1)
        } //Suma uno al contador
    }
    const removeItem = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    } //Resta uno al contador

    return (
        <Stack direction="row" spacing={1} justifyContent="center" sx={{marginTop: ".5rem"}}>
            <div className="itemCount"> 
                <IconButton aria-label="Remove" onClick={removeItem}>
                    <RemoveIcon />
                </IconButton>
                <Chip 
                    label={count} 
                    color="primary" 
                    variant="outlined"
                />
                <IconButton aria-label="Add" onClick={addItem}>
                    <AddIcon />
                </IconButton>
                <Button 
                    variant="contained" 
                    endIcon={<AddShoppingCartIcon/>}
                    onClick={() => onAdd(product, count)}
                >
                    Agregar al carrito
                </Button>               
            </div> 
        </Stack>
    )
}

export default ItemCount