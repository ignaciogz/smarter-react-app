import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Shop } from 'react-bootstrap-icons';
import cart_is_empty from "../../assets/img/cart_is_empty.png"
import error_404 from "../../assets/img/error_404.png"
import './Info.scss'

const Info = ({ title, img }) => {
	const imgsToShow = {
		"cart_is_empty": cart_is_empty,
		"error_404": error_404
	}

  return (
		<section className="App-content container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/gray-1800.webp'})`,
		}}>
			<Container className="container-lg">
				<Row className="row-gap">
					<div className="App-info offset-1 col-10">
						<img src={imgsToShow[img]} alt={`Imagen de ${title}`} />
						<h1>{title}</h1>
						<Button as={Link} to={`/`} className="App-info-btn-go-store">
							<Shop size={20} />
							<span>Ir a la tienda</span>
						</Button>
					</div>
				</Row>
			</Container>
		</section>
	)
}

export default Info;