import React from 'react';
import styled from 'styled-components';
import Carrousel from './Carrousel';

interface Props {
  title: string;
}

const ProductCarrousel = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Carrousel />
    </Container>
  );
};

export default ProductCarrousel;

const Container = styled.div`
  margin: 2rem 0;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
