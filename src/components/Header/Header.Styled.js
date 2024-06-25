import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #1f1f1f;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 57px;

  padding-right: 20px;
  padding-left: 20px;
  @media (min-width: 768px) {
    padding-right: 16px;
    padding-left: 16px;

    height: 74px;
  }
`;
export const HeaderIconUser = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: #262626;
  border: 1px solid rgba(249, 249, 249, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HeaderUserDextopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
export const HeaderUserDextopWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const HeaderButtonBurger = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const HeaderDivLink = styled.div`
  display: flex;
  gap: 28px;
`;

export const HeaderLink = styled(NavLink)`
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: -0.02em;
  color: #686868;
  position: relative;
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover {
    color: #f9f9f9;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 4px;
    background-color: #4f92f7;
    border-radius: 8px;
    transition: width 0.5s ease-in-out;
  }
  &.active {
    color: #f9f9f9;
  }
  &.active::before {
    width: 100%;
    opacity: 1;
  }

  &.inactive::before {
    width: 0;
    opacity: 0;
  }
  transition: transform 0.6s ease;

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;
export const HeaderTabletLogOut = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: 0.02em;
  color: #f9f9f9;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 12px 28px;
  background-color: transparent;
`;
export const HeaderLogoWraper = styled.div`
  display: flex;
  gap: 4px;
  & > :nth-child(2) {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #f9f9f9;
  }
`;
export const HeaderUserName = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f9f9f9;
`;
