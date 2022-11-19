import styled from 'styled-components';
import {Form} from 'formik'
 

export const FormList = styled(Form)`
  display: grid;

  padding: 8px;
`;

export const Label = styled.label`
  display: grid;
  margin-bottom:10px;
`;


export const Button = styled.button`
  width: 100px;
  border-color: transparent;
  border-radius: 4px;

  &:hover,
  :focus {
    background: #1e90ff;
  }
`;
