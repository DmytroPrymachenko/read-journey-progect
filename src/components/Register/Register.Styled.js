import styled from "styled-components";

export const AuthButton = styled.button`
  border-radius: 30px;
  padding: 12px 15px;
  border: none;
  background-color: var(--white);
  transition: all 0.3s;
  width: 140px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.02em;
  color: var(--dark-grey);
  &:hover,
  &:active {
    border: 1px solid rgba(249, 249, 249, 0.2);
    background-color: var(--dark-grey);
    color: var(--white);
  }
  @media only screen and (min-width: 768px) {
    padding: 16px 45px;
    width: 225px;
    font-size: 20px;
    line-height: 1;
  }
`;
