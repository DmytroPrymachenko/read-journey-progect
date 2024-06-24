import styled from "styled-components";

export const AuthImageWrap = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: var(--dark-grey);
  padding: 20px 40px 0;
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 1280px) {
    width: 50%;
    display: block;
    padding: 87px 97px 0;
    /* padding-left: 97px;
    padding-right: 97px;
    padding-bottom: 0; */
  }
`;
export const Picture = styled.img`
  display: block;
  margin: 0 auto;
`;
