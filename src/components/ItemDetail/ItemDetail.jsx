import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ItemCount from '../ItemCount/ItemCount'
import Row from 'react-bootstrap/Row'

import CartContext from '../../context/CartContext'
import { ArrowLeftCircleFill, CartCheckFill, CartPlus } from 'react-bootstrap-icons'
import './ItemDetail.scss'

const ItemDetail = ({ item }) => {
  const { addToCart, getItemInCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const initialCartItem = {
    id: item.id,
    name: item.name,
    price: item.price,
    img: item.img,
    quantity: 1
  }
  const itemInCart = getItemInCart(item.id);

  const [itemToAdd, setItemToAdd] = useState(itemInCart ? itemInCart : initialCartItem);
  const [currentStock, setCurrentStock] = useState(itemInCart ? item.stock - itemInCart.quantity : item.stock);
  const descriptionContent = item.description.split(". ");

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

  return (
    <Container className="container-lg">
			<Row className="row-gap">
        <div className="col-12">
          {item &&
            <Card className="App-item-horizontal-card">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <button onClick={() => navigate(-1)} className="App-item-horizontal-back-btn">
                    <ArrowLeftCircleFill size={32}/>
                  </button>
                  <Card.Img className="img-fluid rounded-start" src={item.img} alt={`Foto de ${item.name}}`} />
                </div>
                <div className="col-md-8">
                  <Card.Body>
                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-end mb-2">
                      <h1 className="card-title">{item.name}</h1>
                      <small>Stock: <span>{item.stock}</span></small>
                    </div>
                    
                    <h2>{item.category.name}</h2>
                    <div className="App-item-horizontal-card-price">
                      {item.price}
                      <span>Abone en 3 a 6 cuotas sin interés</span>
                    </div>

                    <div className="App-item-horizontal-card-description">
                      {
                        descriptionContent.length > 0 && descriptionContent.map((element, index) => 
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
                          <button onClick={handleAddToCartClick} className="App-item-horizontal-btn d-flex justify-content-center">
                            <CartPlus size={24}/>
                            <span>Añadir al carrito</span>
                          </button >
                        </div>
                      :
                      <div className="d-flex">
                          <Button as={Link} to="/cart" className="App-item-horizontal-btn d-flex justify-content-center">
                            <CartCheckFill size={24}/>
                            <span className="text-uppercase">Finalizar compra</span>
                          </Button >
                      </div>
                    }
                  </Card.Body>
                </div>
              </div>
            </Card>
          }
        </div>
      </Row>
    </Container>
  )
}
	
export default ItemDetail;