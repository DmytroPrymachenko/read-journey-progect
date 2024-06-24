import styled from "styled-components";
import { Container } from "../../components/Layout/Layout.Styled";

export const AuthContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 32px;
  }
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 16px;
    /* padding: 32px; */
  }
`;
