import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import AppButton from '../AppButton/AppButton'
import OrderDetail from '../OrderDetail/OrderDetail'
import Info from '../Info/Info'

import CartContext from '../../context/CartContext'

import { CartCheckFill, Trash } from 'react-bootstrap-icons'
import './CartCompact.scss'

const CartCompact = ({ show, handleClose }) => {
		const { cart, deleteItem, getTotalToPay, getTotalToPayPerProduct } = useContext(CartContext);
		const { removeList } = useContext(CartContext);
		const navigate = useNavigate();

		const handleClick = () => {
			handleClose();
			setTimeout(() => navigate("/cart"), 1000);
		}

		return (
			<Offcanvas show={show} onHide={handleClose} placement="end" className="App-card-compact">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>DETALLE</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{cart.length > 0 
						? (<>
							<OrderDetail
								cart={cart}
								deleteItem={deleteItem}
								getTotalToPay={getTotalToPay}
								getTotalToPayPerProduct={getTotalToPayPerProduct}
								compactDetail={true} 
							/>
							<div className="App-cart-btns">
								<AppButton className="btn-remove-items" 
									Icon={<Trash size={20} />}
									text="Vaciar carrito"
									textClassName="text-uppercase"
									onClick={() => removeList()}
								/>
								<AppButton 
									className="App-btn-general btn-checkout"
									Icon={<CartCheckFill size={24} />}
									text="Finalizar compra"         
									textClassName="text-uppercase"
									onClick={() => handleClick()}
								/>
							</div>
						</>)
						: <Info title="Carrito vacío" titleColor="secondary" img="cart_is_empty" noBtn={true} />
					}
					
				</Offcanvas.Body>
			</Offcanvas>
		);
}

export default CartCompact;