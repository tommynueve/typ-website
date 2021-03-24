import React from 'react';
import styled from 'styled-components';

import mapImg from '../images/mapa.png';

const Container = styled.div`
  display: block;
  margin: 1rem;
`;

const Map = () => {
  return (
    <Container>
      <img width='100%' src={mapImg} />
    </Container>
  );
};

export default Map;
