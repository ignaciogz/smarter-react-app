import { createContext, useState } from "react"

const CartContext = createContext({})

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    const itemInCart = cart.find(itemAdded => itemAdded.id === item.id) 
       
    itemInCart 
      ? setCart(cart.map(e => {
          return (
            {
              ...itemInCart, 
              quantity: itemInCart.quantity + item.quantity,
              price: itemInCart.price * (itemInCart.quantity + item.quantity)
            }
          )
      }))
      : setCart([...cart, item]);
  }
  
  const removeList = () => {
    setCart([]);
  }
    
  const deleteItem = (id) => {
    setCart(cart.filter(itemAdded => itemAdded.id !== id));
  }

  const getItemsQty = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  const getTotalToPay = () => cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeList,
        deleteItem,
        getItemsQty,
        getTotalToPay
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider }
export default CartContext
