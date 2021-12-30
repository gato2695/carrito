import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from 'react-router-dom'
import { doc, addDoc, collection, getFirestore, writeBatch } from 'firebase/firestore';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import ShopIcon from '@mui/icons-material/Shop';
import Swal from 'sweetalert2';
import './Cart.css'

const Cart = () => {
  const { cart, emptyCart, cartLength, totalPrice, deleteProductInCart } = useContext(CartContext);

  const [formFields, setFormFields] = useState({
    userName: "",
    userEmail: "",
    userAddress: ""
  })

  const onChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  }

  const onSubmit = () => {
    const order = {
      buyer: {
        name: formFields.userName,
        email: formFields.userEmail,
        address: formFields.userAddress
      },
      time: Date(),
      items: cart,
      total: {totalPrice}
    }

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      Swal.fire({
        icon: 'success',
        confirmButtonColor: '#2C061F',
        title: '¡Gracias!',
        text: 'Su compra fue realizada con éxito.',
        footer: `El  de su compra es: ${id}`
      })
      emptyCart()  
    })

    const batch = writeBatch(db)
    cart.forEach(i => {
      const itemRef = doc(db, "items", i.id)
      batch.update(itemRef, {stock: i.stock - i.quantity})
    })
    batch.commit()
  }
  
  if (cartLength === 0) {
    return (
      <Paper className="emptyCart" elevation={7} sx={{minWidth:250, maxWidth: 400, margin: "auto"}}>
        <div className="center">
          
          <h3 className="emptyCartText">Aún no hay nada en el carrito.</h3>
          <Link to="/">
            <Button variant="outlined" color="primary"  startIcon={<ShopIcon />}>
              Ver los productos
            </Button>
          </Link>
        </div>
      </Paper>
    )
  }

  return (
    <div>
      <Paper elevation={7} sx={{ maxWidth: 920, margin:"auto", marginTop:"2rem"}}>
        <h2 className="tituloCarrito">TU CARRITO</h2>
          <TableContainer >
            <Table className="table" sx={{ minWidth: 650, maxWidth: 900 , margin:"auto"}} aria-label="simple table">
              <TableHead>
                  <TableRow>
                    <TableCell className="tableHead">Producto</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="tableHead" align="right">Categoría</TableCell>
                    <TableCell className="tableHead" align="right">Cantidad</TableCell>
                    <TableCell className="tableHead" align="right">Precio</TableCell>
                    <TableCell className="tableHead" align="right"></TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {cart.map((row) => (
                  <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell><img src={row.image} alt={row.name} className="imageCart"/></TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">${row.price}</TableCell>
                      <TableCell align="center">
                        <Button onClick={() => deleteProductInCart(row.name)} variant="outlined" color="warning" startIcon={<ClearIcon />}>
                          Eliminar
                        </Button>
                      </TableCell>
                  </TableRow>
                  ))}
                <TableRow>
                  <TableCell colSpan={4}>Total</TableCell>
                  <TableCell align="right">${totalPrice}</TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" color="warning" startIcon={<DeleteIcon />} onClick={emptyCart}>
                      Vaciar Carrito
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
      </Paper>
      <Divider sx={{marginTop:"1rem"}}><Chip color="success" label="DATOS DE COMPRA" /></Divider>
      <Stack sx={{marginTop: "1rem", marginBottom: "1rem"}} direction="row" spacing={2} justifyContent="center">
        <TextField id="outlined-basic" label="Nombre" variant="outlined" value={formFields.name} name="userName" onChange={onChange}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" value={formFields.email} name="userEmail" onChange={onChange}/>
        <TextField id="outlined-basic" label="Dirección" variant="outlined" value={formFields.address} name="userAddress" onChange={onChange}/>
        <Button variant="contained" color="success" startIcon={<CheckIcon />} onClick={onSubmit} disabled={!(formFields.userName && formFields.userEmail && formFields.userAddress)}>
          Finalizar Compra
        </Button>
      </Stack>
    </div>
  );
};

export default Cart;
