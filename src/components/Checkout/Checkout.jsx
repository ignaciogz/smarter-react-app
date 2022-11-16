import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Info from '../Info/Info'
import AppButton from '../AppButton/AppButton'
import BuyerModal from '../BuyerModal/BuyerModal'
import OrderDetail from '../OrderDetail/OrderDetail'
import toast, { Toaster } from 'react-hot-toast'

import CartContext from '../../context/CartContext'
import setDocFirestore from '../../services/setDocFirestore'
import updateStockFirestore from '../../services/updateStockFirestore'
import useModal from '../../hooks/useModal';

import { BagHeartFill, Trash } from 'react-bootstrap-icons'
import './Checkout.scss'
import { Col } from 'react-bootstrap'

const Checkout = () => {
	const { cart, deleteItem, getTotalToPayPerProduct, getTotalToPay, removeList, setOutOfStock, someOutOfStock } = useContext(CartContext);
	const [ isOpen, openModal, closeModal ] = useModal(false);
	const [ buyer, setBuyer ] = useState(null);
	const navigate = useNavigate();

	const createOrder = async (buyer) => {
		const order = {
			buyer,
			items: cart.map((item) => {
				return {
					id: item.id,
					name: item.name,
					quantity: item.quantity,
					price: item.price
				}
			}),
			date: new Date(),
			total: getTotalToPay()
		}

		const orderID = await setDocFirestore("orders", order);
		return orderID;
	}

	const finishOrder = async (buyer) => {
		closeModal();
		const toastId = toast.loading("Generando la orden...");

		setTimeout(async () => {
			const orderID = await createOrder(buyer);

			removeList();
			setBuyer(null);
			toast.dismiss(toastId);
			navigate(`/order/${orderID}`);
		}
		, 3000);
	}

	const handleFinishOrder = async (buyerData) => {
		delete buyerData.email2;
		
		const result = await updateStockFirestore("products", cart);

		if(result.status === "error") {
			closeModal();
			toast.error(result.error.desc, { duration: 6000 });

			setBuyer(buyerData);

			const productsOutOfStock = result.error.value;
			productsOutOfStock.forEach(item => setOutOfStock(item));
		} else {	
			finishOrder(buyerData);
		}
	}

	return (
			<Container className="container-lg">
				<Row className="row-gap App-checkout">
					<Col className="col-12">
						{
							cart.length > 0
								? (<>
										<h1>Checkout</h1>
										<OrderDetail 
												cart={cart}
												deleteItem={deleteItem}
												getTotalToPay={getTotalToPay}
												getTotalToPayPerProduct={getTotalToPayPerProduct}
										/>
										
										<div className="App-checkout-btns">
											<AppButton 
                        className="btn-remove-items"
                        Icon={<Trash size={20} />}
                        text="Vaciar carrito"
												textClassName="text-uppercase"
                        onClick={() => removeList()}
                      />
											
											{
												!someOutOfStock() 
												? <AppButton 
														className="App-btn-general btn-payout"
														Icon={<BagHeartFill size={20} />}
														text="Comprar ya !"
														textClassName="text-uppercase"
														onClick={() => buyer ? handleFinishOrder(buyer) : openModal()}
													/>
												: null
											}
										</div>
										
										<Toaster />
										<BuyerModal show={isOpen} handleClose={() => closeModal()} handleFinishOrder={handleFinishOrder} />
										</>)
								:	<Info title="Carrito vacío" img="cart_is_empty"/>
						}
					</Col>
				</Row>
			</Container>
	)
}

export default Checkout;
