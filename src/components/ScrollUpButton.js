import React from 'react';
// import { Link } from 'react-scroll';
// import './ScrollToTopButton.css'; // Import CSS file for styling

export const ScrollUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='p-3' onClick={scrollToTop}>
         
   
        <span className="p-2 mb-2 h3 about-icon text-dark">
            {" "}
            <i className="fa-solid fa-arrow-up"></i>
          </span>
  
    </div>
  );
};


