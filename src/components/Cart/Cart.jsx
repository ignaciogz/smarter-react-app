import { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

import CartContext from '../../context/CartContext'

const Cart = () => {
	const { cart, deleteItem, getTotalToPay, getTotalToPayPerProduct } = useContext(CartContext);

	return (
		<section className="App-content container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/black-1800.webp'})`,
		}}>
			<Container className="container-lg">
				<Row className="row-gap">
					<Card className="App-item-card">
						{
							cart.length > 0
								? (
										cart.map((item) => 
											<ul key={`item-${item.id}`}>
												<li>{item.id}</li>
												<li>{item.name}</li>
												<li>{getTotalToPayPerProduct(item)}</li>
												<li>{item.quantity}</li>
												<li>{item.img}</li>
											</ul>
										)
									)
								: <Alert variant="secondary" className="text-center fw-bold">El carro se encuentra vacio</Alert> 
						}
					</Card>
				</Row>
			</Container>
		</section>
	)
}

export default Cart;
