import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

interface Props {
  title: string;
  body: string;
  image: string;
  color?: keyof typeof theme;
}

const HighlightCard: React.FC<Props> = ({ title, body, image, color = 'black' }) => {
  return (
    <Container color={color}>
      <CardImage>
        <img src={image} alt={`imagen de ${title}`} width='100%' />
      </CardImage>
      <CardTextContainer>
        <Title>{title}</Title>
        <Description>{body}</Description>
      </CardTextContainer>
    </Container>
  );
};

export default HighlightCard;

const Container = styled.div<{ color: keyof typeof theme }>`
  display: flex;
  background-color: ${({ theme, color }) => theme[color]};
  padding: 1rem;
`;

const CardTextContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
`;

const Description = styled.p``;

const CardImage = styled.div`
  max-width: 200px;
`;
