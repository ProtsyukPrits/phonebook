import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem= styled.nav`
  display: grid;
`;


export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: grid;
  font-weight: 400px;
  font-size: small;
  padding: 12px 0;
  &.active {
    color: #808008;
  }
`;