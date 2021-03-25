import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <ContainerForm onSubmit={onSubmit}>
      <label htmlFor='form-name'>Nombre</label>
      <FormField id='form-name' type='text' placeholder='Ingresa tu nombre' />
      <label htmlFor='form-email'>Email</label>
      <FormField id='form-email' type='email' placeholder='Ingresa tu email' />
      <label htmlFor='form-message'>Mensaje</label>
      <FormTextArea id='form-message' placeholder='Dejanos un mensaje' rows={5} />
      <FormSubmit type='submit'>Enviar</FormSubmit>
    </ContainerForm>
  );
};

export default ContactForm;

const ContainerForm = styled.form`
  margin: 1rem 0;
  flex: 1;
`;

const FormField = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const FormSubmit = styled.button`
  background-color: ${({ theme }) => theme.main};
  text-transform: uppercase;
  color: #fff;
  border: 2px solid ${({ theme }) => theme.main};
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
