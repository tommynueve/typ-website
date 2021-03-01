import React from 'react';
import styled from 'styled-components';

type VariantType = 'primary' | 'secondary';

const Button = styled.button<{ variant: VariantType }>`
  background-color: ${({ variant, theme }) => (variant === 'primary' ? theme.main : '#fff')};
  text-transform: uppercase;
  color: ${({ variant, theme }) => (variant === 'primary' ? '#fff' : theme.main)};
  border: 2px solid ${({ theme }) => theme.main};
  border-radius: 2rem;
  padding: 0.5rem 0.5rem;
  @media screen and (min-width: 769px) {
    padding: 0.8rem 1.5rem;
  }
`;

interface Props {
  children: string;
  variant?: VariantType;
}

const MainButton: React.FC<Props> = ({ children, variant = 'primary' }) => {
  return <Button variant={variant}>{children}</Button>;
};

export default MainButton;
