import React from 'react';
import styled from 'styled-components';

import emailIcon from '../images/icon-email.svg';
import wsIcon from '../images/icon-ws.svg';
import phoneIcon from '../images/icon-phone.svg';

const ContactMethods = () => {
  return (
    <Container>
      <MethodContainer>
        <MethodItem>
          <MethodIcon src={phoneIcon} />
          <MethodText>48563932</MethodText>
        </MethodItem>
        <MethodItem>
          <MethodIcon src={wsIcon} />
          <MethodText>1556345113</MethodText>
        </MethodItem>
        <MethodItem>
          <MethodIcon src={emailIcon} />
          <MethodText>email@email.com</MethodText>
        </MethodItem>
      </MethodContainer>
    </Container>
  );
};

export default ContactMethods;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin-top: 1rem;
  }
`;

const MethodContainer = styled.div``;

const MethodItem = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

const MethodIcon = styled.img`
  width: 36px;
`;

const MethodText = styled.p`
  margin-left: 1rem;
`;
