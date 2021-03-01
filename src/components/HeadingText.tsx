import React from 'react';
import styled from 'styled-components';

import MainButton from './MainButton';

const Container = styled.div`
  display: block;
`;

const TitleText = styled.p`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  @media screen and (min-width: 769px) {
    font-size: 4rem;
    line-height: 4.5rem;
    text-align: left;
  }
`;

const SubtitleText = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 2rem;
  text-align: center;
  @media screen and (min-width: 769px) {
    font-size: 1.5rem;
    text-align: left;
  }
`;

const ButtonsContainer = styled.div`
  & > button:not(:last-child) {
    margin-right: 2rem;
  }
`;

interface Props {
  isMobile?: boolean;
}

const HeadingText: React.FC<Props> = ({ isMobile = false }) => {
  return (
    <Container>
      <TitleText>Tintas y papeles para impresora</TitleText>
      <SubtitleText>Algun mensaje o slogan que aporte a la causa de vender el producto.</SubtitleText>
      {!isMobile && (
        <ButtonsContainer>
          <MainButton>Ver Productos</MainButton>
          <MainButton variant='secondary'>Contactanos</MainButton>
        </ButtonsContainer>
      )}
    </Container>
  );
};

export default HeadingText;
