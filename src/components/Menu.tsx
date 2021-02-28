import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  display: flex;
`;

const MenuButton = styled.button`
  text-transform: uppercase;
  color: #000;
  font-weight: 600;
  padding: 0 1vw;
  &:first-child {
    padding-left: 0;
  }
`;

const Menu = () => {
  return (
    <MenuContainer aria-labelledby='primary menu navigation'>
      <MenuButton>Inicio</MenuButton>
      <MenuButton>Productos</MenuButton>
      <MenuButton>Contacto</MenuButton>
    </MenuContainer>
  );
};

export default Menu;
