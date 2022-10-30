import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ItemCount from '../ItemCount/ItemCount'

import CartContext from '../../context/CartContext'
import { ArrowLeftCircleFill, CartCheckFill, CartPlus } from 'react-bootstrap-icons';
import './ItemDetail.scss'

const ItemDetail = ({ item }) => {
  const { addToCart, getItemInCart } = useContext(CartContext);
  const itemInCart = getItemInCart(item.id);
  
  const initialCartItem = {
    id: item.id,
    name: item.name,
    price: item.price,
    img: item.img,
    quantity: 1
  }
  const [itemToAdd, setItemToAdd] = useState(itemInCart ? itemInCart : initialCartItem);
  const [currentStock, setCurrentStock] = useState(itemInCart ? item.stock - itemInCart.quantity : item.stock);

  const onAdd = (value) => {
    setItemToAdd({
      ...itemToAdd,
      quantity: value
    });

    return true;
  }

  const handleAddToCartClick = () => {
    addToCart(itemToAdd);
    setCurrentStock(currentStock - itemToAdd.quantity);
    setItemToAdd(initialCartItem);
  }
  
  const descriptionContent = item && item.description.split(". ");

  return (
    <section className="App-content container-fluid" style={{ 
			backgroundImage: `url(${process.env.PUBLIC_URL + '/img/backgrounds/gray-1800.webp'})`,
		}}>
      {item ?
        <Container className="container-lg">
        <Card className="App-item-horizontal-card">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <Button as={Link} to={"/"} className="App-item-horizontal-back-btn">
                <ArrowLeftCircleFill size={32}/>
              </Button>
              <Card.Img className="img-fluid rounded-start" src={item.img} alt={`Foto de ${item.name}}`} />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-end mb-2">
                  <Card.Title>{item.name}</Card.Title>
                  <small>Stock: <span>{item.stock}</span></small>
                </div>
                
                <div>{item.category.name.toUpperCase()}</div>
                <div className="App-item-horizontal-card-price">
                  {item.price}
                  <span>Abone en 3 a 6 cuotas sin interés</span>
                </div>

                <div className="App-item-horizontal-card-description">
                  {
                    descriptionContent.map((element, index) => 
                      <p key={`description-p-${index}`}>
                        {index < descriptionContent.length - 1 ? `${element}.` : `${element}`}
                      </p>
                    )
                  }
                </div>
                
                {currentStock 
                  ?
                    <div className="d-flex">
                      <ItemCount stock={item.stock} onAdd={onAdd} currentStock={currentStock} />
                      <button className="App-item-horizontal-btn d-flex justify-content-center" onClick={handleAddToCartClick}>
                        <CartPlus size={24}/>
                        <span>Añadir al carrito</span>
                      </button>
                    </div>
                  :
                    <div className="d-flex">
                      <Button as={Link} to={`/cart`} className="App-item-horizontal-btn d-flex justify-content-center">
                        <CartCheckFill size={24}/>
                        <span className="text-uppercase">Finalizar compra</span>
                      </Button>
                      
                    </div>
                }
              </Card.Body>
            </div>
          </div>
        </Card>
      </Container>
      : <Alert variant="secondary" className="text-center fw-bold">No se ha encontrado el producto solicitado</Alert> 
      }
    </section>
  )
}
	
export default ItemDetail;