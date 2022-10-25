import Badge from 'react-bootstrap/Badge';
import { Cart3 } from 'react-bootstrap-icons';

import './CartWidget.scss'

const CartWidget = () => {
  return (
    <div className="App-cart-icon d-flex">
      <Cart3 size={32}/>
      <Badge bg="dark">2</Badge>
    </div>
	)
}

export default CartWidget;