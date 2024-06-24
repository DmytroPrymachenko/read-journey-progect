import styled from "styled-components";

export const ProgressWraper = styled.div`
  background: #1f1f1f;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 768px) {
    padding: 32px;
    flex-direction: row;
    justify-content: space-between;
    & > :nth-child(2) {
      min-width: 321px;
    }
  }
`;
