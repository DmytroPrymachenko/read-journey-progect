import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
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
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-top: 16px;
    padding-right: 64px;
    padding-bottom: 27px;
    padding-left: 64px;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 100%;
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
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-right: 64px;
    padding-left: 64px;
  }
`;
