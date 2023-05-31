import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarJ() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Medicamentos</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Inicio</Nav.Link> */}
            {/* <Nav.Link href="/productos">Productos</Nav.Link> */}
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/agregar-producto">Agregar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/productos">Ver listado</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Proveedores" id="basic-nav-dropdown">
              <NavDropdown.Item href="/agregar-proveedor">Agregar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/proveedores">Ver listado</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="/recepcion">Recepción</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     
    </>
  );
}

export default NavbarJ;