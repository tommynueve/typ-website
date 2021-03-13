import React from 'react';
import styled from 'styled-components';
import HighlightCard from '../components/HighlightCard';

const ProductCategories = () => {
  return (
    <Container>
      <HighlightCard
        title='Tintas OCP'
        image='https://via.placeholder.com/200'
        body='Descripción más detallada de los productos específicos que se venden de esta categoría o cualquier otra cosa que se quiera resaltar.'
        color='blue'
      />
      <HighlightCard
        title='Papel foto'
        image='https://via.placeholder.com/200'
        body='Otra descripción para este artículo.'
        color='magenta'
      />
      <HighlightCard
        title='articulo 3'
        image='https://via.placeholder.com/200'
        body='Descripción más detallada de los productos específicos que se venden de esta categoría o cualquier otra cosa que se quiera resaltar.'
        color='darkYellow'
      />
      <HighlightCard
        title='articulo 4'
        image='https://via.placeholder.com/200'
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
`;
