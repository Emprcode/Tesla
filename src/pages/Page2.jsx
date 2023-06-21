import { Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

export const Page2 = () => {
return (
  <div className='page2' >
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <Row className='text-center p-5' >
        <div className='p-5 mt-5' data-aos="fade-up">
            <h1>Model 3</h1>
            <p>Starting at $32,740</p>
            <p>After Federal Tax Credit</p>
        </div>

       
       </Row>

       <div className='button-div gap-3'>
       <div className='button mt-5 bg-light text-dark'>EXPLORE INVENTORY</div>
       <div className='button mt-5 bg-secondary text-light'>CUSTOM ORDER</div>
     </div>

     <div>
        <p className='text-center mt-3'>3 months free Supercharging when you take delivery of a new Inventory vehicle by June 30</p>
     </div>
    </div>
    </div>
  );
}
