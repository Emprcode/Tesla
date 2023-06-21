
import { div, Row } from 'react-bootstrap';

export const Page8 = () => {
return (
    <div className='page8'>
      <Row className='text-center p-5'>
        <div className='p-5 mt-5'>
            <h1>Accessories</h1>
            {/* <p>Produce Clean Energy From Your Roof</p> */}
        </div>

       
       </Row>

       <div className='button-div gap-3'>
       {/* <div className='button mt-5 bg-light text-dark'>ORDER NOW</div> */}
       <div className='button mt-5 bg-secondary text-light'>SHOP NOW</div>
     </div>

     <div className='d-flex justify-content-center mt-5 gap-3 pointer'>
        <div className=''> Tesla &copy; 2023</div>
        <div>Privacy & Legal</div>
        <div>Vehicle Recalls</div>
        <div>Contact</div>
        <div>News</div>
        <div>Get Updates</div>
        <div>Locations</div>
     </div>

    
    </div>
  );
}
