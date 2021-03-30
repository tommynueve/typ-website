import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from '../theme';
import Layout from '../components/Layout';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import Heading from '../sections/Heading';
import OurValues from '../sections/OurValues';
import Partners from '../sections/Partners';
import ProductCategories from '../sections/ProductCategories';
import Products from '../sections/Products';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Heading />
        <main>
          <OurValues />
          <ProductCategories />
          <Products />
          <Partners />
          <Contact />
        </main>
      </Layout>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
