import React from 'react';
import styled from 'styled-components';
import ValueCard from '../components/ValueCard';

const Container = styled.section`
  background-color: ${({ theme }) => theme.grey};
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

const OurValues = () => {
  return (
    <Container>
      <ValueCard
        title='Calidad profesional'
        body='Usamos materiales importados para asegurarnos de entregar calidad en cada producto'
      />
      <ValueCard title='Cualidad numero 2' body='Algún texto que resalte algo importante sobre esta cualidad' />
      <ValueCard title='Ultima cualidad' body='Algún texto que resalte algo importante esta ultima' />
    </Container>
  );
};

export default OurValues;
