import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

function Navbar() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Promociones">Promociones</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="FYQ">Preguntas Frecuentes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Delivery" disabled>
          Delivery
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;