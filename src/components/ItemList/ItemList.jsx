import Container from 'react-bootstrap/Container';
import Item from "../Item/Item";
import Row from 'react-bootstrap/Row';
import SpinnerWidget from "../SpinnerWidget/SpinnerWidget";

const ItemList = ({ items }) => {
  return (
		<section className="App-content container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/black-1800.webp'})`,
		}}>
			<Container className="container-lg">
				<Row className="row-gap">
					{
						items.length > 0
							? items.map((item, index) => item.stock > 0 && <Item key={`item-${index}`} item={item} />)
							: <SpinnerWidget />
					}
				</Row>
			</Container>
		</section>
	)
}

export default ItemList;