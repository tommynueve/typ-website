import React from 'react';
import styled from 'styled-components';

import Menu from '../components/Menu';
import SocialMenu from '../components/SocialMenu';
import logoImg from '../images/logo.svg';
import HeadingText from '../components/HeadingText';
import cartuchosImg from '../images/cartuchos.png';
import HambMenu from '../components/HambMenu';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  position: relative;
  top: -50px;
`;

const MainImageContainer = styled.div`
  top: -5vw;
  position: relative;
  max-width: 55%;
`;

const HeadingMainContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = () => {
  return (
    <header>
      <NavbarContainer>
        {/* <Menu /> */}
        <HambMenu />
        <SocialMenu />
      </NavbarContainer>
      <Logo src={logoImg} alt='logo typ' />
      <HeadingMainContent>
        <HeadingText />
        <MainImageContainer>
          <img src={cartuchosImg} alt='imagen de cartuchos en la portada' width='100%' />
        </MainImageContainer>
      </HeadingMainContent>
    </header>
  );
};

export default Heading;
