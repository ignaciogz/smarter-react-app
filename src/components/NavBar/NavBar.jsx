import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from "react-router-dom"

import "./NavBar.scss"

const NavBar = () => {
  let activeStyle = {
    color: "black",
  };

  return (
    <header className="App-header">
      <Container className="container-lg d-flex flex-row position-relative">
        <Navbar className="App-navbar" expand="lg">
          <Container className="container-fluid flex-lg-column p-0">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="App-menu-mobile-btn" />
            <NavLink className='App-logo mx-auto navbar-brand' to="/">SMARTER</NavLink>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="App-navbar-items me-auto">
                <NavLink className="nav-link" to="/category/1" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Relojes
                </NavLink>
                <NavLink className="nav-link" to="/category/2" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Auriculares
                </NavLink>
                <NavLink className="nav-link" to="/category/3" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Accesorios
                </NavLink>
                <NavLink className="nav-link" to="/contact" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Contacto
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <CartWidget />
      </Container>
    </header>
  );
}

export default NavBar;