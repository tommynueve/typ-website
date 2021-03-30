import React from 'react';
import styled from 'styled-components';

const Arrow = () => {
  return (
    <Container>
      <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='black' viewBox='0 0 16 16'>
        <path
          fill-rule='evenodd'
          d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
        />
      </svg>
    </Container>
  );
};

export default Arrow;

const Container = styled.div`
  height: 100px;
  width: 40px;
  position: absolute;
  right: -20px;
  top: 50%;
  margin-top: -50px;
  box-shadow: 0 1px 3px #888;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
