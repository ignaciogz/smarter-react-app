import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import { SearchHeart } from 'react-bootstrap-icons'
import './Item.scss'

const Item = ({ item }) => {
  const elementRef = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting }= entries[0];
      
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(elementRef.current);
  }, [elementRef]);

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
                    <div className="App-item-card-price">{item.price}</div>
                    <small className="d-flex flex-column flex-xl-row">
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
      }
    </Col>
  )
}
	
export default Item;