import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/svg/logo/Logo";
import LogoTitleSvg from "../../images/svg/logo/LogoTitleSvg";
import ErrorSvg from "../../images/authIcons/ErrorSvg";
import OkSvg from "../../images/authIcons/OkSvg";

export const EnterWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 40px;
  gap: 40px;
  border-radius: 30px;
  background-color: var(--dark-grey);
  @media only screen and (min-width: 768px) {
    padding: 40px 64px 214px;
    gap: 157px;
  }
  @media only screen and (min-width: 1280px) {
    width: 50%;
    padding: 40px 64px;
    gap: 107px;
  }
`;
export const LogoLink = styled(Link)`
  height: 17px;
  @media only screen and (min-width: 768px) {
  }
`;
export const LogoStyled = styled(Logo)`
  height: 17px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const LogoTitleSvgStyled = styled(LogoTitleSvg)`
  height: 17px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export const AuthSlogan = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: var(--white);
  max-width: 444px;
  @media only screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 0.9375;
  }
`;
export const AuthSpan = styled.span`
  color: rgba(227, 227, 227, 0.5);
  @media only screen and (min-width: 768px) {
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 768px) {
    gap: 40px;
  }
`;
export const AuthInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 472px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`;
export const AuthSubmitBlock = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  @media only screen and (min-width: 768px) {
    gap: 20px;
  }
`;
export const EmtyBlock = styled.div`
  height: 44px;
  @media only screen and (min-width: 768px) {
    height: 50px;
    margin-bottom: 42px;
  }
`;
export const AuthLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  @media only screen and (min-width: 768px) {
    &:last-child {
      margin-bottom: 42px;
    }
  }
`;
export const AuthInputContainer = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 12px;
  align-items: center;
  background: var(--input-bg);
  margin-bottom: ${(props) => (props.$err ? "4px" : "")};
  &:focus-within {
    border: 1px solid ${(props) => (props.$err ? "#e90516" : "#30b94d")};
    svg:last-child {
      display: ${(props) => (props.$err ? "none" : "block")};
    }
  }
  &:focus-within ~ button {
    display: none;
  }
  @media only screen and (min-width: 768px) {
  }
`;
export const ErrorSvgStyled = styled(ErrorSvg)`
  display: ${(props) => (props.$err ? "block" : "none")};
  position: absolute;
  right: 16px;
  top: 13px;
  z-index: 3;
  @media only screen and (min-width: 768px) {
    right: 18px;
    top: 15px;
  }
`;
export const OkSvgStyled = styled(OkSvg)`
  display: none;
  position: absolute;
  right: 16px;
  top: 13px;
  z-index: 3;
  @media only screen and (min-width: 768px) {
    right: 18px;
    top: 15px;
  }
`;
export const AuthInputTitle = styled.p`
  padding: 14px 0 14px 14px;
  border-radius: 12px 0 0 12px;
  color: var(--input-title);
  background: var(--input-bg);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  text-align: center;
  @media only screen and (min-width: 768px) {
    padding: 16px 0 16px 14px;
    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const AuthInput = styled.input`
  padding: 14px 14px 14px 0;
  border-radius: 0 12px 12px 0;
  background: var(--input-bg);
  color: var(--white);
  width: 100%;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  &::placeholder {
    background: var(--input-bg);
    color: var(--white);
  }
  &:active {
    background: var(--input-bg);
    color: var(--white);
  }
  @media only screen and (min-width: 768px) {
    padding: 16px 16px 16px 0;
    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const ErrorSpan = styled.span`
  color: #e90516;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
`;
export const AuthEyeBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 13px;
  background-color: transparent;
  border: none;
  padding: 0;
  height: 20px;
  width: 20px;
  z-index: 2;
  display: ${(props) => (props.$err ? "none" : "block")};
  @media only screen and (min-width: 768px) {
    right: 18px;
    top: 15px;
  }
`;
export const AuthButton = styled.button`
  border-radius: 30px;
  padding: 12px 15px;
  border: none;
  background-color: var(--white);
  transition: all 0.3s;
  width: 131px;
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
    width: 166px;
    font-size: 20px;
    line-height: 1;
  }
`;
export const LinkStyled = styled(Link)`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: center;
  color: var(--input-title);
  &:hover {
    color: var(--white);
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;
