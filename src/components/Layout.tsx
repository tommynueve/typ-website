import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
`;

const Layout: React.FC = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
