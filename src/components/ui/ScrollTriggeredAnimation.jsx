'use client';

import React, { useEffect, useRef, useState } from 'react';

const ScrollTriggeredAnimation = ({ 
  children, 
  animation = 'fade-in', 
  threshold = 0.2,
  duration = 0.8,
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    const baseClasses = `transition-all duration-${duration * 1000}ms delay-${delay * 1000}ms`;
    
    switch (animation) {
      case 'fade-in':
        return `${baseClasses} opacity-100`;
      case 'slide-up':
        return `${baseClasses} opacity-100 transform translate-y-0`;
      case 'slide-down':
        return `${baseClasses} opacity-100 transform translate-y-0`;
      case 'slide-left':
        return `${baseClasses} opacity-100 transform translate-x-0`;
      case 'slide-right':
        return `${baseClasses} opacity-100 transform translate-x-0`;
      case 'zoom-in':
        return `${baseClasses} opacity-100 transform scale-100`;
      default:
        return `${baseClasses} opacity-100`;
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'fade-in':
        return 'opacity-0';
      case 'slide-up':
        return 'opacity-0 transform translate-y-16';
      case 'slide-down':
        return 'opacity-0 transform -translate-y-16';
      case 'slide-left':
        return 'opacity-0 transform translate-x-16';
      case 'slide-right':
        return 'opacity-0 transform -translate-x-16';
      case 'zoom-in':
        return 'opacity-0 transform scale-90';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getInitialClass()} ${isVisible ? getAnimationClass() : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollTriggeredAnimation;