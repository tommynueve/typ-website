import React from 'react';
import styled from 'styled-components';

import ValueCard from '../components/ValueCard';
import iconHeart from '../images/icon-heart.svg';
import iconMedal from '../images/icon-medal.svg';
import iconPaintBrush from '../images/icon-paint-brush.svg';

const Container = styled.section`
  background-color: ${({ theme }) => theme.grey};
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  flex-wrap: wrap;
  padding: 1rem 0;
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
        iconPath={iconMedal}
        iconAlt='Medal Icon'
      />
      <ValueCard
        title='Cualidad numero 2'
        body='Algún texto que resalte algo importante sobre esta cualidad'
        iconPath={iconPaintBrush}
        iconAlt='Paint brush Icon'
      />
      <ValueCard
        title='Ultima cualidad'
        body='Algún texto que resalte algo importante esta ultima'
        iconPath={iconHeart}
        iconAlt='Heart Icon'
      />
    </Container>
  );
};

export default OurValues;
