import React from 'react';
import styled from 'styled-components';

import testImg from '../../images/tintas-ocp.jpeg';

const Item = () => {
  return (
    <Container>
      <ItemImage src={testImg} />
    </Container>
  );
};

export default Item;

const Container = styled.li`
  height: 200px;
  width: 200px;
  border: 2px solid #dcdcdc;
  margin-right: 1rem;
  border-radius: 0.5rem;
  display: inline-block;
  padding: 2px;
`;

const ItemImage = styled.img`
  width: 100%;
`;
