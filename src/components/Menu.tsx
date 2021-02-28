import React from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
  text-transform: uppercase;
  border: none;
  background: none;
  color: #000;
  font-size: 1rem;
`;

const Menu = () => {
  return (
    <div>
      <MenuButton>Inicio</MenuButton>
      <MenuButton>Productos</MenuButton>
      <MenuButton>Contacto</MenuButton>
    </div>
  );
};

export default Menu;
