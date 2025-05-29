'use client';

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const AnimatedElement = ({
  children,
  animation = 'fade-in',
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity',
    'slide-up': 'opacity-0 translate-y-10 transition-all',
    'slide-down': 'opacity-0 -translate-y-10 transition-all',
    'slide-left': 'opacity-0 translate-x-10 transition-all',
    'slide-right': 'opacity-0 -translate-x-10 transition-all',
    'scale-up': 'opacity-0 scale-95 transition-all',
    'scale-down': 'opacity-0 scale-105 transition-all',
  };

  const style = {
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`,
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

AnimatedElement.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf([
    'fade-in',
    'slide-up',
    'slide-down',
    'slide-left',
    'slide-right',
    'scale-up',
    'scale-down',
  ]),
  duration: PropTypes.number,
  delay: PropTypes.number,
  threshold: PropTypes.number,
  className: PropTypes.string,
};

export default AnimatedElement;