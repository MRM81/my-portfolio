import { BsArrowUp } from "react-icons/bs";
import React, { useState, useEffect } from 'react';

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 100); 
      };
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className={`back-to-top-container ${isVisible ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
      <BsArrowUp />
    </div>
  )
}

export default BackToTop
