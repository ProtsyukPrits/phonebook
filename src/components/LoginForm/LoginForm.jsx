import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Input, Label } from "./LoginForm.styled";

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
        <Input type='email' name="email"/>
      </Label>
      <Label>
        Password
        <Input type='password' name='password' />
      </Label>
      <button type="submit">Log In</button>
   </form>
  )
}

export default LoginForm;