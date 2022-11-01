import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import CartContext from '../../context/CartContext'
import { BagHeartFill, Shop, Trash } from 'react-bootstrap-icons';
import cart_is_empty from "../../assets/img/cart_is_empty.gif"
import './Cart.scss'

const Cart = () => {
	const { cart, deleteItem, getTotalToPay, getTotalToPayPerProduct, removeList } = useContext(CartContext);

	return (
		<section className="App-content container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/black-1800.webp'})`,
		}}>
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
								: (<Card className="App-cart-empty offset-1 col-10">
										<img src={cart_is_empty} alt="Imagen de el carro se encuentra vacio" />
										<h1>Carrito vacío</h1>
										<Button as={Link} to={`/`} className="App-cart-btn-go-store">
											<Shop size={20} />
											<span>Ir a la tienda</span>
										</Button>
									</Card>)
						}
					</div>
				</Row>
			</Container>
		</section>
	)
}

export default Cart;
