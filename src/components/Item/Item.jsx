import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { SearchHeart } from 'react-bootstrap-icons';
import './Item.scss'

const Item = ({ item }) => {
  return (
    <div className="col-6 col-lg-3">
      <Card className="App-item-card">
        <Card.Img variant="top" src={item.img} alt={`Foto de ${item.title}}`} />
        
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <div className="d-flex justify-content-between align-items-center">  
            <div>
              <div className="App-item-card-price">{item.price}</div>
              <small>{item.category.name.toUpperCase()} | Stock: <span>{item.stock}</span></small>
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