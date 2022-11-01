import { createContext, useState } from "react"

const CartContext = createContext({})

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const getItemInCart = (id) => cart.find(cartItem => cartItem.id === id);

  const addToCart = (item) => {
    const itemInCart = getItemInCart(item.id);
       
    itemInCart 
      ? setCart(cart.map(cartItem => {
          return cartItem === itemInCart
                ? {
                    ...itemInCart, 
                    quantity: itemInCart.quantity + item.quantity,
                    price: itemInCart.price * (itemInCart.quantity + item.quantity)
                  }
                : cartItem;
        }))
      : setCart([...cart, item]);
  }
  
  const removeList = () => {
    setCart([]);
  }
    
  const deleteItem = (id) => {
    setCart(cart.filter(cartItem => cartItem.id !== id));
  }

  const getItemsQty = () => cart.reduce((acc, item) => acc + item.quantity, 0);
  const getTotalToPayPerProduct = (item) => item.quantity * item.price;
  const getTotalToPay = () => cart.reduce((acc, item) => acc + getTotalToPayPerProduct(item), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeList,
        deleteItem,
        getItemInCart,
        getItemsQty,
        getTotalToPay,
        getTotalToPayPerProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider }
export default CartContext
