import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Label } from './RegisterForm.styled';
import { Input } from '@chakra-ui/react';
import Notiflix from 'notiflix';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const formReset = e.currentTarget;

    if (
      form.name.value === '' ||
      form.email.value === '' ||
      form.password.value === ''
    ) {
      return Notiflix.Notify.info('please, enter your details');
    }

    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    formReset.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Name
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>

      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
