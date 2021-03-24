import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

const arrayPointOneToPointNine = Array(10)
  .fill(1)
  .map((_, index) => index / 10)
  .slice(1);
const squaresArray = [...arrayPointOneToPointNine, 1, ...arrayPointOneToPointNine.reverse()];

interface Props {
  color: keyof typeof theme;
}

const ColorDivider: React.FC<Props> = ({ color = 'black' }) => {
  return (
    <Container role='separator'>
      {squaresArray.map((opacityValue, index) => (
        <Square color={color} opacityValue={opacityValue.toString()} key={index}></Square>
      ))}
    </Container>
  );
};

export default ColorDivider;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Square = styled.div<{ color: keyof typeof theme; opacityValue: string }>`
  height: 66px;
  width: 54px;
  background-color: ${({ theme, color }) => theme[color]};
  opacity: ${({ opacityValue }) => opacityValue};
`;
