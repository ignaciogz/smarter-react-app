import Container from 'react-bootstrap/Container';
import Item from "../Item/Item";
import Row from 'react-bootstrap/Row';
import SpinnerWidget from "../SpinnerWidget/SpinnerWidget";

const ItemList = ({items}) => { 
  return (
		<Container className="container-lg">
			<Row className="row-gap">
				{
					items.length > 0
						? items.map((item, index) => item.stock > 0 && <Item key={`item-${index}`} item={item} />)
						: <SpinnerWidget />
				}
			</Row>
		</Container>
	)
}

export default ItemList;