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
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;
  @media screen and (min-width: 769px) {
    text-align: left;
  }
`;
