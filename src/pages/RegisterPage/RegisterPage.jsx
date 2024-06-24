import { AuthImage } from "../../components/AuthImage/AuthImage";
import { Register } from "../../components/Register/Register";
import { AuthContainer } from "./RegisterPage.Styled";

const RegisterPage = () => {
  return (
    <AuthContainer>
      <Register />
      <AuthImage />
    </AuthContainer>
  );
};

export default RegisterPage;
