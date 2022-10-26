import Container from 'react-bootstrap/Container';
import Item from "../Item/Item";
import Row from 'react-bootstrap/Row';
import SpinnerWidget from "../SpinnerWidget/SpinnerWidget";
import Alert from 'react-bootstrap/Alert';

const ItemList = ({ items, loaded }) => {
  return (
		<section className="App-content container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/black-1800.webp'})`,
		}}>
			<Container className="container-lg">
				<Row className="row-gap">
					{
						loaded 
							? items.length > 0
									? items.map((item, index) => item.stock > 0 && <Item key={`item-${index}`} item={item} />)
									: <Alert variant="secondary" className="text-center fw-bold">No hay productos cargados en la API</Alert>
							: <SpinnerWidget />
					}
				</Row>
			</Container>
		</section>
	)
}

export default ItemList;