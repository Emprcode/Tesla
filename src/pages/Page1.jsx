import { Header } from './Header';
import {Row} from 'react-bootstrap'

export const Page1 = () => {
return (
    <div className='main'>
        <Header/>
       <Row className='text-center p-5'>
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
  );
}
