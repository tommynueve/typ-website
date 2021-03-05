import React from 'react';
import Layout from '../components/Layout';
import Heading from '../sections/Heading';
import OurValues from '../sections/OurValues';

const IndexPage = () => {
  return (
    <Layout>
      <Heading />
      <main>
        <OurValues />
      </main>
    </Layout>
  );
};

export default IndexPage;
