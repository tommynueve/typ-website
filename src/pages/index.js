import React from 'react';
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
      </main>
    </Layout>
  );
};

export default IndexPage;
