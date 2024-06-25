import styled from "styled-components";

export const Container = styled.div`
  max-width: 375px;
  padding: 20px 20px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding-top: 16px;
    padding-right: 32px;
    padding-bottom: 27px;
    padding-left: 32px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 375px;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 32px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
