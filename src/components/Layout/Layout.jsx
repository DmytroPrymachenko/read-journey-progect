import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Container, HeaderContainer } from "./Layout.Styled";

const Layout = () => {
  return (
    <>
      <header>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
