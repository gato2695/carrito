import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import ItemCount from './ItemCount';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../contexts/CartContext';
import './ItemDetail.css';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const ItemDetail = ({ product }) => {
    const { cart, cartLength, deleteProductInCart, itemInCart, setItemInCart } = useContext(CartContext)

    const foundItemInCart = cart.find(i => product.id === i.id)
    
    useEffect(() => {
        if (!foundItemInCart) {
            setItemInCart(false)
        }
        else {
            setItemInCart(true)
        }
    }, [foundItemInCart, setItemInCart])
    
    return (
    <>
        <div>
            <Link to="/">
                <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />} sx={{
                    marginTop: "1rem",
                    marginLeft: "1rem" 
                }}>
                    Volver a Productos
                </Button>
            </Link>
        </div>
        <Paper elevation={3} sx={{margin:"1rem"}}>
            <h2 className="itemNameDetail">{product.name}</h2>
            <Divider variant="middle" />
            <div className="detailContainer">
                <img src={product.image} alt={product.name} className="itemImageDetail"/>
                <div>
                    <h4 className="itemCategoryDetail">{product.category}</h4>
                    <div className="itemDescriptionDetail">{product.description}</div>
                    <div className="itemStockDetail">Cantidad disponible: {product.stock} unidades.</div>
                    <h5 className="itemPriceDetail">Precio: ${product.price} </h5>
                    <Divider variant="middle" className="divider"/>
                    { itemInCart ? 
                        <div>
                            <div className='alignButtons'>
                                    { foundItemInCart ? <h4 className='nowInCart'>Actualmente en el carrito: {foundItemInCart.quantity}.</h4> : <div></div> }
                                <Button
                                    endIcon={<DeleteIcon />}
                                    onClick={() => deleteProductInCart(foundItemInCart.name)}
                                    sx={{marginRight:"5rem"}}
                                >
                                    Eliminar       
                                </Button>
                            </div>
                            <div className="counter" color="error">
                                <Link to="/Cart">
                                    <Button 
                                        variant="contained" 
                                            endIcon={
                                        <StyledBadge badgeContent={cartLength} color="success">
                                            <ShoppingCartIcon />
                                        </StyledBadge>}
                                    >
                                        Ver carrito
                                    </Button>   
                                </Link>
                            </div>
                        </div>
                        :
                        <div>
                            <ItemCount product={product} initial={1}/>                                     
                        </div>
                    }
                </div>
            </div>
        </Paper>
        </>
    )
}

export default ItemDetail