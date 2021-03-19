import React from 'react';
import ColorDivider from '../components/ColorDivider';
import Layout from '../components/Layout';
import Heading from '../sections/Heading';
import OurValues from '../sections/OurValues';
import ProductCategories from '../sections/ProductCategories';

const IndexPage = () => {
  return (
    <Layout>
      <Heading />
      <main>
        <OurValues />
        <ProductCategories />
        <ColorDivider color='blue' />
      </main>
    </Layout>
  );
};

export default IndexPage;
