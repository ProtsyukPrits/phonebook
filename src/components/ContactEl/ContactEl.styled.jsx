import styled from "styled-components";


export const Button = styled.button`
  border-radius: 4px;
  border-color: transparent;

  margin-left: 16px;

  &:hover, :focus {
    background: #1e90ff;
  }
`;

export const ListEl = styled.li`
display: flex;
justify-content: space-between;
  margin: 4px 0;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const UserName = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 8px;
`;