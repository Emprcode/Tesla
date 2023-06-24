import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'

export const Header = () => {
return (
    <Navbar collapseOnSelect expand="md" className="fixed-top">
      <Container className='mt-3'>
        <Navbar.Brand href="/">
            <img src={logo} alt="logo" width="140px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fw-bold gap-2">
            <Nav.Link href="#modelS">Model S</Nav.Link>
            <Nav.Link href="#model3">Model 3</Nav.Link>
            <Nav.Link href="#modelX">Model X</Nav.Link>
            <Nav.Link href="#modelY">Model Y</Nav.Link>
            <Nav.Link href="#solarroof">Solar Roof</Nav.Link>
            <Nav.Link href="#solarpanels">Solar Panels</Nav.Link>
            <Nav.Link href="#powerwall">Powerwall</Nav.Link>
          </Nav>
          <Nav className='fw-bold'>
            <Nav.Link href="shop">Shop</Nav.Link>
            <Nav.Link href="account">Account</Nav.Link>
            <Nav.Link href="menu">Menu</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
