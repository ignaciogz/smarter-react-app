import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBar.scss"

const NavBar = () => {
  return (
    <Container className="container-lg d-flex flex-row">
      <Navbar className="App-navbar" expand="lg">
        <Container className="container-fluid flex-lg-column p-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand className='App-logo mx-auto' href="#inicio">SMARTER</Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="App-navbar-items me-auto">
              <Nav.Link href="#relojes">Relojes</Nav.Link>
              <Nav.Link href="#auriculares">Auriculares</Nav.Link>
              <Nav.Link href="#accesorios">Accesorios</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CartWidget />
    </Container>
  );
}

export default NavBar;