import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  body: string;
  iconPath?: string;
  iconAlt?: string;
}

const ValueCard: React.FC<Props> = ({ title, body, iconPath, iconAlt }) => {
  return (
    <Container>
      <CardIcon src={iconPath} alt={iconAlt} />
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
    </Container>
  );
};

export default ValueCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
  align-items: center;
`;

const CardIcon = styled.img`
  width: 36px;
`;

const CardTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 800;
  margin: 1rem 0;
`;

const CardBody = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;
