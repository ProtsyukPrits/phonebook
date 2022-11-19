import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Container, Title } from './UserMenu.styled';
import { Button } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    <Container>
      <Title>
        Wellcome, <b>{(user.name).toUpperCase()}!</b>
      </Title>
      <Button size='sm' type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
