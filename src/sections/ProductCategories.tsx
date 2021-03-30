import React from 'react';
import styled from 'styled-components';

import HighlightCard from '../components/HighlightCard';
import TintasOCPImg from '../images/tintas-ocp.jpeg';

const ProductCategories = () => {
  return (
    <Container id='products'>
      <HighlightCard
        title='Tintas OCP'
        image={TintasOCPImg}
        body='Descripción más detallada de los productos específicos que se venden de esta categoría o cualquier otra cosa que se quiera resaltar.'
        color='blue'
      />
      <HighlightCard
        title='Papel foto'
        image={TintasOCPImg}
        body='Otra descripción para este artículo.'
        color='magenta'
      />
      <HighlightCard
        title='articulo 3'
        image={TintasOCPImg}
        body='Descripción más detallada de los productos específicos que se venden de esta categoría o cualquier otra cosa que se quiera resaltar.'
        color='darkYellow'
      />
      <HighlightCard
        title='articulo 4'
        image={TintasOCPImg}
        body='Descripción más detallada de los productos específicos que se venden de esta categoría o cualquier otra cosa que se quiera resaltar.'
        color='black'
      />
    </Container>
  );
};

export default ProductCategories;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 4rem 0;
  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
`;
