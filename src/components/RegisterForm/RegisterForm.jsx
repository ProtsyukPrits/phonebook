import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Label } from './RegisterForm.styled';
import { Input } from '@chakra-ui/react';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
