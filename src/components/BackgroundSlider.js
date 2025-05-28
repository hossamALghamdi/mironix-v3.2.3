import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const SlideImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const BackgroundSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const backgrounds = [
    '/images/child-teddy-tablet.jpg',
    '/images/father-daughter-tablet.jpg',
    '/images/child-glasses-computer.jpg',
    '/images/boy-colorful-tablet.jpg',
    '/images/father-daughter-device.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => 
        prevSlide === backgrounds.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <SliderContainer>
      {backgrounds.map((bg, index) => (
        <SlideImage
          key={index}
          active={index === currentSlide}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
    </SliderContainer>
  );
};

export default BackgroundSlider;