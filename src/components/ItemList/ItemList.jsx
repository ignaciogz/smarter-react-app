import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Item from "../Item/Item"
import Row from 'react-bootstrap/Row'

const ItemList = ({ items }) => {
	let location = useLocation();
  const [storeH1, setStoreH1] = useState("");

	useEffect(() => {
		location.pathname === "/" 
			? setStoreH1("Productos")
			: setStoreH1(items.length > 0 && items[0].category.name)
  }, [location, items]);
  

  return (
			<Container className="container-lg">
				<Row className="row-gap">
					{
						items.length > 0
							? (<>
									<h1>{storeH1}</h1>
									{items.map((item) => 
										item.stock > 0 && <Item key={`item-${item.id}`} item={item} />
									)}
								</>)
							: <div className="col-12">
									<Alert variant="secondary" className="text-center fw-bold">No hay productos cargados en la API</Alert>
								</div>
					}
				</Row>
			</Container>
	)
}

export default ItemList;