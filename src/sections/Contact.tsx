import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import ContactMethods from '../components/ContactMethods';
import Map from '../components/Map';

const Contact = () => {
  return (
    <section id='contact'>
      <Title>Contactanos</Title>
      <Container>
        <ContactForm />
        <ContactMethods />
      </Container>
    </section>
  );
};

export default Contact;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 900;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
