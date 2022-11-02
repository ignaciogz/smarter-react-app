import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import AppButton from '../AppButton/AppButton'

import { Shop } from 'react-bootstrap-icons'
import cart_is_empty from "../../assets/img/cart_is_empty.png"
import error_404 from "../../assets/img/error_404.png"
import order_success from "../../assets/img/order_success.png"
import './Info.scss'

const imgsToShow = {
	cart_is_empty,
	error_404,
	order_success
}

const Info = ({ title, img, text }) => {
  return (
			<Container className="container-lg">
				<Row className="row-gap">
					<div className="App-info offset-1 col-10">
						<img src={imgsToShow[img]} alt={`Imagen de ${title}`} />
						<h1>{title}</h1>
						{text ? <div>{text}</div> : null}
						<AppButton 
							className="App-btn-general btn-go-store"
							as="Link"
							to="/"
							Icon={<Shop size={20} />}
							text="Ir a la tienda"
						/>
					</div>
				</Row>
			</Container>
	)
}

export default Info;