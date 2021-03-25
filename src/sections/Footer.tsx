import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import SocialMenu from '../components/SocialMenu';
import { useMediaQuery } from 'react-responsive';

import customTheme from '../theme';

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>
      {isMobile ? <Title>typ</Title> : <Menu textColor={customTheme.grey} />}
      <SocialMenu />
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  background-color: ${customTheme.black};
  padding: 2rem 1rem;
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: ${customTheme.grey};
`;
