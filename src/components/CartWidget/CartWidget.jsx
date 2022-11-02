import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Badge from 'react-bootstrap/Badge'

import CartContext from '../../context/CartContext'
import { Cart3 } from 'react-bootstrap-icons'
import './CartWidget.scss'

const CartWidget = () => {
  const { getItemsQty } = useContext(CartContext);
  const qty = getItemsQty();

  return (
    <Button as={Link} to={`/cart`} className="App-cart-icon d-flex align-items-center">
      <Cart3 size={32}/>
      <Badge bg="dark" className={qty ? "visible" : "invisible"}>{ qty }</Badge>
    </Button>
	)
}

export default CartWidget;