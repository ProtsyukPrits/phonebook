import {  NavItem } from './Navigation.styled';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { BsBook } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    
      <NavItem>
        <Link to="/">
          <GoHome size="30" />
          Home
        </Link>

        {isLoggedIn && (
            <Link to="/phonebook">
              <AiOutlinePhone size="30" />
              Phonebook
            </Link>
          ) && (
            <Link to="/contacts">
              <BsBook size="30" />
              Contacts
            </Link>
          )}
      </NavItem>
   
  );
};

export default Navigation;
