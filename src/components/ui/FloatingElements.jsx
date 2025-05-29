'use client';

import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const FloatingElement = ({ children, speed = 1, sensitivity = 30 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (window.innerWidth / 2 - e.clientX) / sensitivity,
        y: (window.innerHeight / 2 - e.clientY) / sensitivity
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sensitivity]);

  const props = useSpring({
    transform: `translate(${mousePosition.x * speed}px, ${mousePosition.y * speed}px)`,
    config: { mass: 1, tension: 120, friction: 40 }
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const FloatingElements = ({ count = 10 }) => {
  const elements = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.5 + 0.1
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <FloatingElement key={element.id} speed={element.speed}>
          <div
            className="absolute rounded-full bg-[#f5b314]"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.x}%`,
              top: `${element.y}%`,
              opacity: element.opacity
            }}
          />
        </FloatingElement>
      ))}
    </div>
  );
};

export default FloatingElements;