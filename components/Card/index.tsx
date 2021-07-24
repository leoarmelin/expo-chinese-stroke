import React, { ReactNode } from 'react';
import { Container } from './styles';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <Container
      style={{
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      }}
    >
      {children}
    </Container>
  );
};
