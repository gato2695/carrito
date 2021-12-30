import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import './Item.css'

const Item = ({id, name, price, category, image}) => {
    return (
        <>
            <Box>
                <Paper elevation={4} sx={{
                    backgroundColor: "white",
                    margin: "auto",
                    maxWidth: 600,
                    
                }}> 
                    <Link to={`/item/${id}`}>
                        <div className="itemContainer">
                            <div className="detailsContainer">
                                <h2 className="itemName">{name}</h2>
                                <Divider variant="middle" />
                                <h4 className="itemCategory">{category}</h4>
                                <div className="rowAlign">
                                    <h5 className="itemPrice">Precio: ${price} </h5>
                                </div>
                            </div>
                            <div>
                                <img className="itemImage" src={image} alt={name} />
                            </div>
                        </div>
                    </Link>
                </Paper>
            </Box>
        </>
    )
};

export default Item