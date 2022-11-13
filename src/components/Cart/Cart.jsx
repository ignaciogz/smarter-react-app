import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Info from '../Info/Info'
import AppButton from '../AppButton/AppButton'
import BuyerModal from '../BuyerModal/BuyerModal'

import CartContext from '../../context/CartContext'
import setDocFirestore from '../../services/setDocFirestore'
import updateStockFirebase from '../../services/updateStockFirebase'
import useModal from '../../hooks/useModal';
import formatter from '../../utils/formatter'

import { BagHeartFill, Trash } from 'react-bootstrap-icons'
import './Cart.scss'

const Cart = () => {
	const { cart, deleteItem, getTotalToPay, getTotalToPayPerProduct, removeList, setOutOfStock } = useContext(CartContext);
	const {isOpen, openModal, closeModal} = useModal(false);
	const navigate = useNavigate();

	const handleFinishOrder = async (buyer) => {
		const result = await updateStockFirebase("products", cart);

		if(result.status === "error") {
			const productsOutOfStock = result.error.value;
			productsOutOfStock.forEach(item => setOutOfStock(item));
		} else {
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

			closeModal();
			removeList();
			navigate(`/order/${orderID}`);
		}
	}

	return (
			<Container className="container-lg">
				<Row className="row-gap">
					<div className="App-cart">
						{
							cart.length > 0
								? (<>
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
																	<div>{item.name}</div>
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
											<AppButton 
                        className="App-btn-general btn-payout"
                        Icon={<BagHeartFill size={20} />}
                        text="Comprar ya !"
												textClassName="text-uppercase"
                        onClick={() => openModal()}
                      />
										</div>
										<BuyerModal show={isOpen} handleClose={() => closeModal()} handleFinishOrder={handleFinishOrder} />
										</>)
								:	<Info title="Carrito vacío" img="cart_is_empty"/>
						}
					</div>
				</Row>
			</Container>
	)
}

export default Cart;
