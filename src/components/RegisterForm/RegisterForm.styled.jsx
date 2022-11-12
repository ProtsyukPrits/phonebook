import styled from 'styled-components';

export const Label = styled.label`
  display: grid;
  font-size: small;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  &:focus {
    outline: none;
    border-radius: 4px;
    box-shadow: 0 0 10px #1e90ff;
  }
`;
