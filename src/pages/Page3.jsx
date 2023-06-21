import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
import { Header } from './Header';
import { Row } from 'react-bootstrap';

export const Page3 = () => {
return (
    <div className='page3'>
      <Row className='text-center p-5'>
        <div className='p-5 mt-5'>
            <h1>Model Y</h1>
            <p>Starting at $40, 240</p>
            <p>After Federal Tax Credit</p>
        </div>

       
       </Row>

       <div className='button-div gap-3'>
       <div className='button mt-5 bg-light text-dark'>EXPLORE INVENTORY</div>
       <div className='button mt-5 bg-secondary text-light'>CUSTOM ORDER</div>
     </div>

    
    </div>
  );
}
