import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { SearchHeart } from 'react-bootstrap-icons';
import './Item.scss'

const Item = ({ item }) => {
  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
      <Card className="App-item-card">
        <Card.Img variant="top" src={item.img} alt={`Foto de ${item.title}}`} />
        
        <Card.Body>
          <h2 className="card-title">{item.name}</h2>
          <div className="d-flex justify-content-between align-items-center">  
            <div>
              <div className="App-item-card-price">{item.price}</div>
              <small className="d-flex flex-column flex-lg-row">
                <span>{item.category.name.toUpperCase()}</span>
                <span>Stock: {item.stock}</span>
              </small>
            </div>
            <Button as={Link} to={`/item/${item.id}`} className="App-item-card-details">
              <SearchHeart size={18} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
	
export default Item;