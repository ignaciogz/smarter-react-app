import { createContext, useState } from "react"

const CartContext = createContext({})

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const getItemInCart = (id) => cart.find(cartItem => cartItem.id === id);

  const addToCart = (item) => {
    item.outOfStock = false;
    const itemInCart = getItemInCart(item.id);
       
    itemInCart 
      ? setCart(cart.map(cartItem => {
          return cartItem === itemInCart
                ? {
                    ...itemInCart, 
                    quantity: itemInCart.quantity + item.quantity,
                    price: itemInCart.price
                  }
                : cartItem;
        }))
      : setCart([...cart, item]);
  }
  
  const removeList = () => {
    setCart([]);
  }

  const setOutOfStock = (item) => {
    const itemInCart = getItemInCart(item.id);

    setCart(cart.map(cartItem => {
      return cartItem === itemInCart
            ? {
                ...itemInCart, 
                outOfStock: true,
              }
            : cartItem;
    }))
  }

  const someOutOfStock = () => cart.some(cartItem => cartItem.outOfStock);
    
  const deleteItem = (id) => {
    setCart(cart.filter(cartItem => cartItem.id !== id));
  }

  const getItemsQty = () => cart.reduce((acc, item) => acc + item.quantity, 0);
  const getTotalToPayPerProduct = (item) => !item.outOfStock ? item.quantity * item.price : 0;
  const getTotalToPay = () => cart.reduce((acc, item) => !item.outOfStock ? acc + getTotalToPayPerProduct(item) : 0, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeList,
        deleteItem,
        setOutOfStock,
        someOutOfStock,
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
