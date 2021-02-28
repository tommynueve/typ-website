import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';

import logoImg from '../images/logo.svg';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = () => {
  return (
    <header>
      <NavbarContainer>
        <Menu />
        <img src={logoImg} alt='logo typ' />
        <button>Icon PH</button>
      </NavbarContainer>
    </header>
  );
};

export default Heading;
