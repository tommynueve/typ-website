import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.nav<Props>`
  display: flex;
  color: ${({ textColor }) => textColor};
`;

const MenuButton = styled.button`
  text-transform: uppercase;
  color: inherit;
  font-weight: 600;
  padding: 0 1vw;
  &:first-child {
    padding-left: 0;
  }
`;

interface Props {
  textColor?: string;
}

const Menu: React.FC<Props> = ({ textColor = '#000' }) => {
  return (
    <MenuContainer aria-labelledby='primary menu navigation' textColor={textColor}>
      <MenuButton>Inicio</MenuButton>
      <MenuButton>Productos</MenuButton>
      <MenuButton>Contacto</MenuButton>
    </MenuContainer>
  );
};

export default Menu;
