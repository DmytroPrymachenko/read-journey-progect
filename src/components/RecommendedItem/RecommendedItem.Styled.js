import styled from "styled-components";
export const RecommendedItemImgWraper = styled.div`
  width: 137px;
  height: 208px;
  /* object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px; */
`;
export const RecommendedItemImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
export const RecommendedItemTitlewraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding-top: 8px;
  & > :first-child {
    font-weight: 700;
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
    color: #686868;
  }
`;

export const RecommendedModalItemWraper = styled.div`
  width: 335px;
  z-index: 10;
  /* max-width: 472px; */
  background-color: #1f1f1f;
  padding: 40px;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(104, 104, 104, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const RecommendedModalItemContantWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 250px;
  gap: 4px;
  padding-bottom: 20px;

  & > :nth-child(1) {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  & > :nth-child(2) {
    font-weight: 500;
    font-size: 12px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #686868;
  }

  & > :nth-child(3) {
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #f9f9f9;
  }
`;
