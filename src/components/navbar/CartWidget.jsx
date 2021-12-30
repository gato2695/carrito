import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { CartContext } from '../../contexts/CartContext'

const CartWidget = () => {
    const {cartLength} = useContext(CartContext)
    return (
        <IconButton color="inherit" aria-label="Shopping Cart">
            <Badge badgeContent={cartLength} color="error">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
}

export default CartWidget