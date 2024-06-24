import styled, { keyframes } from "styled-components";

export const NotStartedComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: center;
  @media (min-width: 768px) {
    max-width: 305px;
  }

  & > div {
    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: #f9f9f9;
      padding-bottom: 14px;
    }

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 129%;
      letter-spacing: -0.02em;
      color: #686868;
    }
  }
`;
export const StatisticsWraper = styled.div`
  width: 100%;
  border-radius: 12px;
  background: #262626;
  display: flex;
  justify-content: center;
  height: 211px;
  @media (min-width: 768px) {
    height: 252px;
  }
`;
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

export const ReadingStatisticsButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border: none;
  transition: transform 0.3s ease;

  &:hover {
    animation: ${hoverAnimation} 0.3s ease;
    transform: scale(1.1);
  }
`;
export const SectionSelectionWraper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-right: 16px;
  }

  & > :first-child {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  & > :nth-child(2) {
    display: flex;
    gap: 8px;
  }
`;
export const StarWraper = styled.div`
  border-radius: 100%;
  display: flex;
  background-color: #262626;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
`;
