import Badge from 'react-bootstrap/Badge';
import { CartFill } from 'react-bootstrap-icons';

import './CartWidget.scss'

const CartWidget = () => {
    return (
        <div className="App-cart-icon d-flex">
            <CartFill size={32}/>
            <Badge bg="dark">2</Badge>
        </div>
    )
}

export default CartWidget;