import styled from "styled-components";

export const RecommendedModalWraper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  & > :first-child {
    position: absolute;
    background-color: transparent;
    border: none;
    cursor: pointer;
    top: -35px;
    right: -35px;
  }
  & > :nth-child(2) {
    width: 140px;
    border-radius: 8px;
    padding-bottom: 16px;
  }
  & > :nth-child(4) {
    border: 1px solid rgba(249, 249, 249, 0.2);
    border-radius: 30px;
    padding: 12px 24px;
    cursor: pointer;
    background-color: transparent;

    font-weight: 700;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: 0.02em;
    color: #f9f9f9;
  }
`;
