import React from 'react';
import ColorDivider from '../components/ColorDivider';
import Layout from '../components/Layout';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import Heading from '../sections/Heading';
import OurValues from '../sections/OurValues';
import Partners from '../sections/Partners';
import ProductCategories from '../sections/ProductCategories';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Heading />
        <main>
          <OurValues />
          <ProductCategories />
          <ColorDivider color='blue' />
          <Partners />
          <Contact />
        </main>
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;
