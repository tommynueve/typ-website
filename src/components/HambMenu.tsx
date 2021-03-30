import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import wsImg from '../images/icon-ws.svg';
import igImg from '../images/icon-ig.svg';
import fbImg from '../images/icon-fb.svg';

const HambMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    setIsOpen((currValue) => !currValue);
  };

  return (
    <Container>
      <HambButton id='menu-toggle' aria-label='Hamburger menu' aria-expanded={isOpen} onClick={handleClick}>
        ☰
      </HambButton>
      {isOpen && <Backdrop onClick={handleClick} />}
      <HambNav show={isOpen}>
        <ul>
          <li>
            <HambOption>
              <Link to='heading' smooth duration={100} onClick={handleClick} offset={-16}>
                Inicio
              </Link>
            </HambOption>
          </li>
          <li>
            <HambOption>
              <Link to='products' smooth duration={100} onClick={handleClick}>
                Productos
              </Link>
            </HambOption>
          </li>
          <li>
            <HambOption>
              <Link to='contact' smooth duration={100} onClick={handleClick}>
                Contacto
              </Link>
            </HambOption>
          </li>
          <li>
            <HambSocialOption>
              <SocialIcon src={wsImg} alt='Whatsapp Icon' />
            </HambSocialOption>
          </li>
          <li>
            <HambSocialOption>
              <SocialIcon src={igImg} alt='Instagram Icon' />
            </HambSocialOption>
          </li>
          <li>
            <HambSocialOption>
              <SocialIcon src={fbImg} alt='Facebook Icon' />
            </HambSocialOption>
          </li>
        </ul>
      </HambNav>
    </Container>
  );
};

export default HambMenu;

const SocialIcon = styled.img`
  display: block;
  border-radius: 5px;
`;

const Container = styled.div`
  display: block;
`;

const Backdrop = styled.div`
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 9;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const HambNav = styled.nav<{ show: boolean }>`
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-100%)')};
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  width: 60%;
  position: absolute;
  padding-top: 1rem;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  ${({ show }) =>
    show &&
    'box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)'};
`;

const HambButton = styled.button`
  color: #000;
  font-size: 2rem;
  font-weight: 600;
`;

const HambOption = styled.button`
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  font-weight: 600;
`;

const HambSocialOption = styled.button`
  padding: 0.5rem 1rem;
`;
