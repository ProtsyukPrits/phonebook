import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Backdrop = styled.div`
  max-width: calc(70vw - 48px);
  max-height: calc(1000vh - 24px);
`;

export const Form = styled.form`
  padding: 50px;
  background: white;
  display: block;
`;

export const Input = styled.input``;

export const Button = styled.button`
  color: red;
`;
