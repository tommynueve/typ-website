import React from 'react';
import ColorDivider from '../components/ColorDivider';

import ProductCarrousel from '../components/ProductCarrousel';

const Products = () => {
  return (
    <>
      <ColorDivider color='blue' />
      <ProductCarrousel title='Tintas Alemanas OCP' />
      <ColorDivider color='magenta' />
      <ProductCarrousel title='Papeles' />
      <ColorDivider color='darkYellow' />
      <ProductCarrousel title='Cartuchos recargables y sistemas continuos' />
    </>
  );
};

export default Products;
