import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

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
  cursor: pointer;
`;

interface Props {
  textColor?: string;
}

const Menu: React.FC<Props> = ({ textColor = '#000' }) => {
  return (
    <MenuContainer aria-labelledby='primary menu navigation' textColor={textColor}>
      <MenuButton>
        <Link to='heading' smooth duration={100} offset={-16}>
          Inicio
        </Link>
      </MenuButton>
      <MenuButton>
        <Link to='products' smooth duration={100}>
          Productos
        </Link>
      </MenuButton>
      <MenuButton>
        <Link to='contact' smooth duration={100}>
          Contacto
        </Link>
      </MenuButton>
    </MenuContainer>
  );
};

export default Menu;
