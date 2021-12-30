import { useEffect, createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]); 
    const [cartLength, setCartLength] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [itemInCart, setItemInCart] = useState(false)

    const onAdd = (product, count) => {
        const productInCart = cart.find((i) => i.id === product.id);

        if(!productInCart){
            const productToAdd = {...product, quantity: count}
            setCart([...cart, productToAdd])
            Swal.fire({
            confirmButtonColor: '#2C061F',
            title: '¡Listo!',
            text: `${productToAdd.quantity} producto/s  añadidos al carrito.`,
            })
        }
        else {
            productInCart.quantity = productInCart.quantity + count;
            setCart([...cart])
            Swal.fire({
            confirmButtonColor: '#2C061F',
            title: '¡Listo!',
            text: `${productInCart.quantity} producto/s  añadidos al carrito.`,
            })
        }
    }

    useEffect(() => {
        if(cart.length > 0){
            const quantities = cart.map((i) => i.quantity)
            const prices = cart.map((i) => i.quantity * i.price)
            setCartLength(quantities.reduce((a, b) => a + b))
            setTotalPrice(prices.reduce((a, b) => a + b))        
        }
        else {
            setCartLength(0)
            setTotalPrice(0)
        }
    }, [cart])

    const emptyCart = () => { 
        setCart([])
        setCartLength(0)
    }

    const deleteProductInCart = (name) => {
        setItemInCart(false)
        const index = cart.findIndex((i) => i.name === name)
        cart.splice(index, 1)
        if (cart.length > 0) {
            setCart([...cart])
        }
        else {
            setCart([])
        }
    }

    return (
        <CartContext.Provider value={{cart, onAdd, emptyCart, cartLength, totalPrice, deleteProductInCart, itemInCart, setItemInCart}}>
            {children}
        </CartContext.Provider>
    )
}



