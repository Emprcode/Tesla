import React from 'react';
import { Link } from 'react-scroll';
// import './ScrollToTopButton.css'; // Import CSS file for styling

export const ScrollUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link
      className="css-eSWDUO "
      to="top"
      smooth={true}
      duration={500}
      onClick={scrollToTop}
    >
      &#8593; {/* Upward pointing arrow */}
    </Link>
  );
};


