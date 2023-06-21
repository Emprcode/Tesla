import './App.css';
import { ModelX } from './pages/ModelX';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
import { Page5 } from './pages/Page5';
import { Page6 } from './pages/Page6';
import { Page7 } from './pages/Page7';
import { Page8 } from './pages/Page8';
// import { Element, scroller } from 'react-scroll';


function App() {
  // const scrollToPage = (pageName) => {
  //   scroller.scrollTo(pageName, {
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //   });
  // };
  return (
    <div className="App">
     <Page1 />
     <Page2 />
     {/* <Page3 name="page3x" scrollToPage={scrollToPage}/> */}
     <Page3 />
     <Page4 />
     <ModelX />
     <Page5 />
     <Page6 />
     <Page7 />
     <Page8 />
    </div>
  );
}

export default App;
