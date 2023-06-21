import { Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

export const Page7 = () => {
return (
    <div className='page7'>
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <Row className='text-center p-5'>
        <div className='p-5 mt-5'>
            <h1>Powerwall</h1>
            {/* <p>Produce Clean Energy From Your Roof</p> */}
        </div>

       
       </Row>

       <div className='button-div gap-3'>
       <div className='button mt-5 bg-light text-dark'>ORDER NOW</div>
       <div className='button mt-5 bg-secondary text-light'>LEARN MORE</div>
     </div>
     </div>
    
    </div>
  );
}
