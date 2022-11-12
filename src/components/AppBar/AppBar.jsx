import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import { useAuth } from "hooks/useAuth";
import { Container, Header } from "./AppBar.styled";


const AppBar = () => {
  const { isLoggedIn} = useAuth();


  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
}

export default AppBar;