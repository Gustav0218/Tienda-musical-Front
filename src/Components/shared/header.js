import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Bring Me Rock Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="catalogo">Catalogo</Nav.Link>
            <Nav.Link href="#nuevos">Lo nuevo</Nav.Link>
            <NavDropdown title="Màs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Merch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cursos
              </NavDropdown.Item>
              <NavDropdown.Item href="">Noticias</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Especiales
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link eventKey={2} href="login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  };
  
  export default header;