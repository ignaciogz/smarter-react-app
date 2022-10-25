import Item from "../Item/Item";
import SpinnerWidget from "../SpinnerWidget/SpinnerWidget";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemList = ({items}) => { 
  return (
		<Container className="container-lg">
			<Row className="row-gap">
				{
					items.length > 0
						? items.map((item, index) => <Item key={`item-${index}`} item={item} />)
						: <SpinnerWidget />
				}
			</Row>
		</Container>
	)
}

export default ItemList;