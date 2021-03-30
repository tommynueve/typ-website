import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

import Item from './Item';

const Carrousel = () => {
  return (
    <Container>
      <CarrContainer>
        <CarrList>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </CarrList>
      </CarrContainer>
      <Arrow />
    </Container>
  );
};

export default Carrousel;

const Container = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
`;

const CarrContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  @media screen and (max-width: 1023px) {
    overflow-x: scroll;
  }
`;

const CarrList = styled.ul`
  display: inline-block;
  position: relative;
  left: 0;
`;
