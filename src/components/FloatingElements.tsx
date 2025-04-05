import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FloatingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;

const FloatingCircle = styled(motion.div)<{size: number; color: string}>`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.color};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  opacity: 0.2;
  filter: blur(8px);
`;

const FloatingElements: React.FC = () => {
  const elements = [
    { id: 1, size: 100, color: '#FFD700', initialX: '20%', initialY: '30%' },
    { id: 2, size: 200, color: '#032CA6', initialX: '80%', initialY: '60%' },
    { id: 3, size: 150, color: '#FFA500', initialX: '50%', initialY: '20%' },
    { id: 4, size: 120, color: '#FFFFFF', initialX: '10%', initialY: '80%' },
    { id: 5, size: 180, color: '#032CA6', initialX: '70%', initialY: '10%' },
  ];

  return (
    <FloatingContainer>
      {elements.map(element => (
        <FloatingCircle
          key={element.id}
          size={element.size}
          color={element.color}
          initial={{ x: element.initialX, y: element.initialY }}
          animate={{
            x: [element.initialX, `calc(${element.initialX} + 30px)`, element.initialX],
            y: [element.initialY, `calc(${element.initialY} + 30px)`, element.initialY],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
        />
      ))}
    </FloatingContainer>
  );
};

export default FloatingElements; 