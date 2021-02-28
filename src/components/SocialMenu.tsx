import React from 'react';
import styled from 'styled-components';

import wsImg from '../images/icon-ws.svg';
import igImg from '../images/icon-ig.svg';
import fbImg from '../images/icon-fb.svg';

const SocialIcon = styled.img`
  border-radius: 5px;
`;

const SocialMenu = () => {
  return (
    <nav aria-labelledby='social icons navigation'>
      <button>
        <SocialIcon src={wsImg} alt='Whatsapp Icon' />
      </button>
      <button>
        <SocialIcon src={igImg} alt='Instagram Icon' />
      </button>
      <button>
        <SocialIcon src={fbImg} alt='Facebook Icon' />
      </button>
    </nav>
  );
};

export default SocialMenu;
