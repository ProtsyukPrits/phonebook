import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Container, Title } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    <Container>
      <Title>
        Wellcome, <b>{(user.name).toUpperCase()}!</b>
      </Title>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Container>
  );
};

export default UserMenu;
