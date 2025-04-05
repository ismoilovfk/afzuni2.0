import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FloatingElement = styled(motion.div)<{ size: string; opacity: number }>`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, ${props => props.opacity});
  width: ${props => props.size};
  height: ${props => props.size};
  z-index: 1;
`;

const FloatingElements: React.FC = () => {
  // Generate random elements
  const elements = Array.from({ length: 20 }).map((_, index) => {
    const size = `${Math.random() * 60 + 10}px`;
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    const opacity = Math.random() * 0.6 + 0.1;
    const duration = Math.random() * 30 + 20;
    
    return {
      id: index,
      size,
      left,
      top,
      opacity,
      duration
    };
  });

  return (
    <>
      {elements.map(element => (
        <FloatingElement
          key={element.id}
          size={element.size}
          opacity={element.opacity}
          style={{ left: element.left, top: element.top }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

export default FloatingElements; 