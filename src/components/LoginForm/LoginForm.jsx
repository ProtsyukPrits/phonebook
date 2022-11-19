import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Label } from "./LoginForm.styled";
import { Button, Input } from "@chakra-ui/react";


const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  }

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
}

export default LoginForm;