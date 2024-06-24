import styled from "styled-components";

export const ContainerRange = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 138px;
    height: 138px;
  }
`;

export const CircularRange = styled.input.attrs({ type: "range" })`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  -webkit-appearance: none;
  appearance: none;
  background: none;
  border: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: none;
    cursor: default;
  }

  &::-moz-range-thumb {
    width: 0;
    height: 0;
    border-radius: 50%;
    background: none;
    cursor: default;
  }

  &:disabled {
    cursor: default;
  }
`;

export const ValueDisplay = styled.span`
  position: absolute;

  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;

export const ProgressCircle = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: #1f1f1f;
  stroke-width: 15;
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: #30b94d;
  stroke-width: 15;
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease;
`;

export const StatisticsPagesWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & > :first-child {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  & > :nth-child(2) {
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }
`;

export const StatisticsComponentWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;

  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const GreenSquare = styled.div`
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background: #30b94d;
`;

export const StatisticsValueWraper = styled.div`
  display: flex;
  gap: 15px;
`;
