'use client';

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const ParallaxContainer = ({ 
  children, 
  speed = 0.5, 
  direction = 'vertical',
  className = '' 
}) => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const distanceFromCenter = top - windowHeight / 2;
      
      // Calculate the parallax offset based on the distance from center
      setOffset(distanceFromCenter * speed * -0.1);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  const parallaxStyle = {
    transform: direction === 'vertical' 
      ? `translateY(${offset}px)` 
      : `translateX(${offset}px)`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div style={parallaxStyle}>
        {children}
      </div>
    </div>
  );
};

ParallaxContainer.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  className: PropTypes.string,
};

export default ParallaxContainer;