import { AuthImage } from "../../components/AuthImage/AuthImage";
import { Login } from "../../components/Login/Login";
import { AuthContainer } from "../RegisterPage/RegisterPage.Styled";

const LoginPage = () => {
  return (
    <AuthContainer>
      <Login />
      <AuthImage />
    </AuthContainer>
  );
};

export default LoginPage;
