import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import AppButton from '../AppButton/AppButton'

import formatter from '../../utils/formatter'
import useNearScreenLoad from '../../hooks/useNearScreenLoad'

import { SearchHeart } from 'react-bootstrap-icons'
import './Item.scss'

const Item = ({ item }) => {
  const [elementRef, show] = useNearScreenLoad();
  
  return (
    <Col ref={elementRef} className="col-6 col-sm-6 col-md-4 col-lg-3 lazy-loader-wrapper">
      {
        show 
        && <Card className="App-item-card">
              <Card.Img variant="top" src={item.img} alt={`Foto de ${item.title}}`} />
              
              <Card.Body>
                <h2 className="card-title">{item.name}</h2>
                <div className="d-flex justify-content-between align-items-center">  
                  <div>
                    <div className="App-item-card-price">{formatter.price(item.price)}</div>
                    <small className="d-flex flex-column flex-xl-row">
                      <span>{item.category.name.toUpperCase()}</span>
                      <span>Stock: {item.stock}</span>
                    </small>
                  </div>
                  <AppButton 
                    className="App-btn-primary-rounded"
                    as="Link"
                    to={`/item/${item.id}`}
                    Icon={<SearchHeart size={18} />}
                  />
                </div>
              </Card.Body>
            </Card>
      }
    </Col>
  )
}
	
export default Item;