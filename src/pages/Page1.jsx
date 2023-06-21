import { Header } from './Header';
import {Row} from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

export const Page1 = () => {
return (
  <div>
        <Header/>
    <div className='main'>
       <Row className='text-center p-5' data-aos="fade-up">
        <div className='p-5 mt-5'>
            <h1>Experience Tesla</h1>
            <p>Schedule a Demo Drive Today</p>
        </div>

       
       </Row>

       <div className='button-div'>
       <div
     
     className='button mt-5'>DEMO DRIVE</div>
     </div>
    </div>
    </div>
  );
}
