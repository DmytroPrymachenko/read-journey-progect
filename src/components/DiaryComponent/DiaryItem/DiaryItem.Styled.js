import styled from "styled-components";

export const DiaryDateWraper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 10px;
  & > :first-child {
    font-weight: 700;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.02em;
    color: #f9f9f9;
    height: 16px;
  }
  & > :last-child {
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    text-align: start;
    color: #686868;
    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 129%;
      letter-spacing: -0.02em;
      text-align: center;
      color: #686868;
    }
  }
`;
export const DiaryDateLi = styled.li`
  display: flex;
  flex-direction: column;
  /* width: 100%;
  justify-content: space-between; */
`;

export const DiaryListWraper = styled.div`
  display: flex;

  /* width: 100%;
  justify-content: space-between; */
`;
export const DiaryDatePercentageWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > :first-child {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  & > :last-child {
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }
`;

export const DiaryDateLeftWraper = styled.div`
  display: flex;
  gap: 9px;
`;
export const DiaryDateRightWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const DeleteRecordButton = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  margin: 0 auto;
  border: none;
  background-color: transparent;
`;
export const DeleteRecordWraper = styled.div`
  display: flex;
  gap: 5px;
`;

export const DeleteRecordPageHourDiv = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #686868;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ReadingSpeed = styled.span`
  display: block;
`;

export const PerHour = styled.span`
  display: block;
`;

export const DeleteRecordPagesSpan = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-align: start;
  color: #686868;
`;

export const DeleteRecordVectorWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const BlackWhiteSquareWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  ${DiaryDateLi}:not(:last-child) &::after {
    content: "";
    position: absolute;
    width: 2px;
    background: #1f1f1f;
    top: 20%;
    left: 50%;

    height: 100%;
  }
`;

export const DiaryItemLi = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const DiaryListUl = styled.ul`
  padding-left: 26px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
