import { BiLogIn } from 'react-icons/bi';
import { GoSignIn } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { NavItem } from './AuthNav.styled';


const AuthNav = () => {
  return (
    <NavItem>
      <Link to="/register">
        <GoSignIn size="30" />
        Register
      </Link>

      <Link to="/login">
        <BiLogIn size="30" />
        Login
      </Link>
    </NavItem>
  );
};

export default AuthNav;
