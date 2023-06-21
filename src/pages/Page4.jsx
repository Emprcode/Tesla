import { Row } from 'react-bootstrap';

export const Page4 = () => {
return (
    <div className='page4'>
      <Row className='text-center p-5'>
        <div className='p-5 mt-5'>
            <h1>Model X</h1>
            <p>Explore Inventory</p>
            <p>After Federal Tax Credit</p>
        </div>

       
       </Row>

       <div className='button-div gap-3'>
       <div className='button mt-5 bg-light text-dark'>CUSTOM ORDER</div>
       <div className='button mt-5 bg-secondary text-light'>DEMO DRIVE</div>
     </div>

    
    </div>
  );
}
