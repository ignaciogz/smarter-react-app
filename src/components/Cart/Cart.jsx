import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Info from '../Info/Info'
import AppButton from '../AppButton/AppButton'
import BuyerModal from '../BuyerModal/BuyerModal'
import toast, { Toaster } from 'react-hot-toast'

import CartContext from '../../context/CartContext'
import setDocFirestore from '../../services/setDocFirestore'
import updateStockFirebase from '../../services/updateStockFirebase'
import useModal from '../../hooks/useModal';
import formatter from '../../utils/formatter'

import { BagHeartFill, Trash } from 'react-bootstrap-icons'
import './Cart.scss'

const Cart = () => {
	const { cart, deleteItem, getTotalToPay, getTotalToPayPerProduct, removeList, setOutOfStock, someOutOfStock } = useContext(CartContext);
	const {isOpen, openModal, closeModal} = useModal(false);
	const [buyer, setBuyer] = useState(null);
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
		const toastId = toast.loading('Generando la orden...');

		setTimeout(async () => {
			const orderID = await createOrder(buyer);

			removeList();
			setBuyer(null);
			toast.dismiss(toastId);
			navigate(`/order/${orderID}`);
		}
		, 2000);
	}

	const handleFinishOrder = async (buyerData) => {
		delete buyerData.email2;
		
		const result = await updateStockFirebase("products", cart);

		if(result.status === "error") {
			closeModal();
			toast.error(result.error.desc, { duration: 6000, position: "bottom-center" });

			setBuyer(buyerData);

			const productsOutOfStock = result.error.value;
			productsOutOfStock.forEach(item => setOutOfStock(item));
		} else {	
			finishOrder(buyerData);
		}
	}

	return (
			<Container className="container-lg">
				<Row className="row-gap">
					<section className="App-cart">
						{
							cart.length > 0
								? (<>
										<Toaster />
										<h1>Carrito</h1>
										<table className="table table-hover">
											<thead className="table-dark">
												<tr>
													<th scope="col" colSpan="2">Producto</th>
													<th scope="col">Precio</th>
													<th scope="col">Cantidad</th>
													<th scope="col">Subtotal</th>
												</tr>
											</thead>
											<tbody>
												{cart.map((item) => 
													<tr key={`item-${item.id}`}>
														<td colSpan="2">
															<div className="App-cart-td-col1">
																<img src={item.img} alt={`Imagen de ${item.name}`} />
																<div className="d-inline-flex">
																	<div className={item.outOfStock ? 'text-decoration-line-through' : null}>{item.name}</div>
																	{item.outOfStock ? <div className='out-of-stock'>sin stock</div> : null}
																	
																	<AppButton 
																		text="Eliminar"
																		onClick={() => deleteItem(item.id)}
																	/>
																</div>
															</div>
														</td>
														<td>{formatter.price(item.price)}</td>
														<td>{item.quantity}</td>
														<td>{formatter.price(getTotalToPayPerProduct(item))}</td>
													</tr>
												)}
											</tbody>	
											<tfoot>
												<tr>
													<td colSpan="4">TOTAL</td>
													<td colSpan="5">{formatter.price(getTotalToPay())}</td>
												</tr>
											</tfoot>
										</table>
										<div className="App-cart-btns">
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
										<BuyerModal show={isOpen} handleClose={() => closeModal()} handleFinishOrder={handleFinishOrder} />
										</>)
								:	<Info title="Carrito vacío" img="cart_is_empty"/>
						}
					</section>
				</Row>
			</Container>
	)
}

export default Cart;
