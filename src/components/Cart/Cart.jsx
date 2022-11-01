import { useContext } from 'react'
import { Button } from 'semantic-ui-react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Info from '../Info/Info'

import CartContext from '../../context/CartContext'
import { BagHeartFill, Trash } from 'react-bootstrap-icons';
import './Cart.scss'

const Cart = () => {
	const { cart, deleteItem, getTotalToPay, getTotalToPayPerProduct, removeList } = useContext(CartContext);

	return (
			<Container className="container-lg">
				<Row className="row-gap">
					<div className="App-cart">
						{
							cart.length > 0
								? (<>
										<h1>Carrito</h1>
										<table class="table table-hover">
											<thead class="table-dark">
												<tr>
													<th scope="col" colspan="2">Producto</th>
													<th scope="col">Precio</th>
													<th scope="col">Cantidad</th>
													<th scope="col">Subtotal</th>
												</tr>
											</thead>
											<tbody>
												{cart.map((item) => 
													<tr key={`item-${item.id}`}>
														<td colspan="2">
															<div className="App-cart-td-col1">
																<img src={item.img} alt={`Imagen de ${item.name}`} />
																<div className="d-inline-flex">
																	<div>{item.name}</div>
																	<Button onClick={() => deleteItem(item.id)}>Eliminar</Button>
																</div>
															</div>
														</td>
														<td>{item.price}</td>
														<td>{item.quantity}</td>
														<td>{getTotalToPayPerProduct(item)}</td>
													</tr>
												)}
											</tbody>	
											<tfoot>
												<tr>
													<td colspan="4">TOTAL</td>
													<td colspan="5">{getTotalToPay()}</td>
												</tr>
											</tfoot>
										</table>
										<div className="App-cart-btns">
											<Button className="App-cart-btn-remove-items" onClick={() => removeList()}>
												<Trash size={20} />
												<span className="text-uppercase">Vaciar carrito</span>
											</Button>
											<Button className="App-cart-btn-payout" onClick={() => alert("THANKS")}>
												<BagHeartFill size={20} />
												<span className="text-uppercase">Comprar ya !</span>
											</Button>
										</div>
										</>)
								:	<Info title="Carrito vacío" img="cart_is_empty"/>
						}
					</div>
				</Row>
			</Container>
	)
}

export default Cart;
