import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Label } from './LoginForm.styled';
import { Button, Input } from '@chakra-ui/react';
import Notiflix from 'notiflix';


const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const formReset = e.currentTarget;

    if (
      form.email.value === '' ||
      form.password.value === ''
    ) {
      return Notiflix.Notify.info('please, enter your details');
    }

    dispatch(
      logIn({
        email: form.email.value,
        password: form.password.value,
      })
    );

    formReset.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default LoginForm;
