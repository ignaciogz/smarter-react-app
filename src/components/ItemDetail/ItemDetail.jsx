import Card from 'react-bootstrap/Card';
import { CartPlus } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.scss'

const ItemDetail = ({ item }) => {
  return (
    <Container className="container-lg">
      <Card className="App-item-horizontal-card">
        <div class="row g-0 align-items-center">
          <div class="col-md-4">
            <Card.Img className="img-fluid rounded-start" src={item.img} alt={`Foto de ${item.title}}`} />
          </div>
          <div class="col-md-8">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-end mb-2">
                <Card.Title>{item.title}</Card.Title>
                <small>Stock: <span>{item.stock}</span></small>
              </div>
              
              <div className="App-item-horizontal-card-price">
                {item.price}
                <span>Abone en 3 a 6 cuotas sin interés</span>
              </div>

              <div className="App-item-horizontal-card-description">{item.description}</div>
              
              <div className="d-flex">
                <ItemCount stock={Number(item.stock)}/>
                <button className="App-item-horizontal-add-btn d-flex justify-content-center">
                  <CartPlus size={24}/>
                  <span>Añadir al carrito</span>
                </button>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </Container>
  )
}
	
export default ItemDetail;