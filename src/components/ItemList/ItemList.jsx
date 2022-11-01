import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Item from "../Item/Item";
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const ItemList = ({ items }) => {
	let location = useLocation();
  const [storeH1, setStoreH1] = useState("");

	useEffect(() => {
		location.pathname === "/" 
			? setStoreH1("Productos")
			: setStoreH1(items[0].category.name)
  }, [location, items]);
  

  return (
		<section className="App-content container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/black-1800.webp'})`,
		}}>
			<Container className="container-lg">
				<Row className="row-gap">
					<h1>{storeH1}</h1>
					{
						items.length > 0
							? items.map((item) => 
									item.stock > 0 && <Item key={`item-${item.id}`} item={item} />
								)
							: <Alert variant="secondary" className="text-center fw-bold">No hay productos cargados en la API</Alert> 
					}
				</Row>
			</Container>
		</section>
	)
}

export default ItemList;