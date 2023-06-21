import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'

export const Header = () => {
return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top">
      <Container className='mt-3'>
        <Navbar.Brand href="/">
            <img src={logo} alt="logo" width="140px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fw-bold gap-2">
            <Nav.Link href="#features">Model S</Nav.Link>
            <Nav.Link href="#pricing">Model 3</Nav.Link>
            <Nav.Link href="#pricing">Model X</Nav.Link>
            <Nav.Link href="#pricing">Model Y</Nav.Link>
            <Nav.Link href="#pricing">Solar Roof</Nav.Link>
            <Nav.Link href="#pricing">Solar Panels</Nav.Link>
            <Nav.Link href="#pricing">Powerwall</Nav.Link>
          </Nav>
          <Nav className='fw-bold'>
            <Nav.Link href="#deets">Shop</Nav.Link>
            <Nav.Link href="#deets">Account</Nav.Link>
            <Nav.Link href="#deets">Menu</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
