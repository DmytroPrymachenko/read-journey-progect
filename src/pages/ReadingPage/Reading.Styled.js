import styled from "styled-components";

export const ReadingWraper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 16px;
  }
  @media (min-width: 1280px) {
    gap: 6px;
    flex-direction: row;
  }
  & > :nth-child(2) {
    width: 100%;
  }
`;
