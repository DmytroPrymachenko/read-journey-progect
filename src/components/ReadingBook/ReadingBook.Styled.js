import styled from "styled-components";

export const ReadingBookIMG = styled.img`
  border-radius: 15px;

  height: auto;
  max-width: 137px;
  max-height: 208px;

  object-fit: contain;
  display: block;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 169px;
    max-height: 256px;
  }
`;

export const ReadingBookWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReadingBookH1 = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  padding-bottom: 40px;
`;

export const ReadingBookTitleWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-top: 10px;
  padding-bottom: 20px;

  & > :first-child {
    max-width: 300px;
    font-weight: 700;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #f9f9f9;
    @media (min-width: 768px) {
      font-weight: 700;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: #f9f9f9;
    }
  }

  & > :nth-child(2) {
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #686868;
    @media (min-width: 768px) {
      font-weight: 700;
      font-size: 14px;
      line-height: 129%;
      letter-spacing: -0.02em;
      color: #686868;
    }
  }
`;
export const ReadingBookTimeRemainingWraper = styled.div`
  display: flex;
  justify-content: space-between;
  & > :nth-child(2) {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }
`;
