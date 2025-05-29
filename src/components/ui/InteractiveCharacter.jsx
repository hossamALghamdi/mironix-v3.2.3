'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const InteractiveCharacter = ({ modelPath, width = 300, height = 400 }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setRotation({
      x: (y - 0.5) * 30, // -15 to 15 degrees
      y: (x - 0.5) * 30, // -15 to 15 degrees
    });
  };

  const props = useSpring({
    transform: `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    scale: isHovered ? 1.05 : 1,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  return (
    <div 
      ref={containerRef}
      className="relative cursor-pointer"
      style={{ width, height }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
    >
      <animated.div style={props} className="w-full h-full">
        <img 
          src={modelPath} 
          alt="Interactive Character" 
          className="w-full h-full object-contain"
        />
      </animated.div>
    </div>
  );
};

export default InteractiveCharacter;