import React from 'react';
import styled from 'styled-components';

import OCPLogoImg from '../images/ocp-logo.png';
import KennenLogoImg from '../images/kennen-logo.png';
import HartwiiLogoImg from '../images/hartwii-logo.png';
import AgfafotoLogoImg from '../images/agfafoto-logo.png';

const Partners = () => {
  return (
    <Container>
      <CardImage>
        <img src={OCPLogoImg} alt={'Logo de OCP'} width='100%' />
      </CardImage>
      <CardImage>
        <img src={KennenLogoImg} alt={'Logo de Kennen'} width='100%' />
      </CardImage>
      <CardImage>
        <img src={HartwiiLogoImg} alt={'Logo de Hartwii'} width='100%' />
      </CardImage>
      <CardImage>
        <img src={AgfafotoLogoImg} alt={'Logo de Agfafoto'} width='100%' />
      </CardImage>
    </Container>
  );
};

export default Partners;

const Container = styled.section`
  background-color: ${({ theme }) => theme.grey};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  margin: 5rem 0;
`;

const CardImage = styled.div`
  max-width: 200px;
  margin: 1rem;
`;
