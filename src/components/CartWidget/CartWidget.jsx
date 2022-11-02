import { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import AppButton from '../AppButton/AppButton'

import CartContext from '../../context/CartContext'
import { Cart3 } from 'react-bootstrap-icons'
import './CartWidget.scss'

const CartWidget = () => {
  const { getItemsQty } = useContext(CartContext);
  const qty = getItemsQty();

  return (
    <AppButton 
      className="App-btn-navbar-icon"
      as="Link"
      to="/cart"
      Icon={<Cart3 size={32}/>}
      Badge={<Badge bg="dark" className={qty ? "visible" : "invisible"}>{ qty }</Badge>}
    />
	)
}

export default CartWidget;