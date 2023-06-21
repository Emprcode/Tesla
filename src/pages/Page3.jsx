import { Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';


AOS.init();

export const Page3 = () => {
//    useEffect(() => {
//         const handleScroll = (event) => {
//           if (event.deltaY < 0) {
//             scrollToPage('page2');
//           }
//         };
    
//         window.addEventListener('wheel', handleScroll);
    
//         return () => {
//           window.removeEventListener('wheel', handleScroll);
//         };
//       }, [scrollToPage]);
return (
    <div className='page3'>
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
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
    </div>
  );
}
