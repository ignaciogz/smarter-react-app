import { useContext } from 'react'
import Badge from 'react-bootstrap/Badge';
import { Cart3 } from 'react-bootstrap-icons';

import CartContext from '../../context/CartContext'
import './CartWidget.scss'

const CartWidget = () => {
  const { getItemsQty } = useContext(CartContext);
  const qty = getItemsQty();

  return (
    <div className="App-cart-icon d-flex">
      {qty > 0 &&
        (
          <>
            <Cart3 size={32}/>
            <Badge bg="dark">{ qty }</Badge>
          </>
        )
      }
    </div>
	)
}

export default CartWidget;