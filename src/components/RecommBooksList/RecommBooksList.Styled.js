import styled from "styled-components";

export const RecommBooksListWraper = styled.div`
  border-radius: 30px;
  background: #1f1f1f;
  padding: 40px 20px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 40px 40px;
  }
  @media (min-width: 1280px) {
    padding: 40px 40px;
  }
  & > :first-child {
    display: flex;
    justify-content: space-between;
    padding-bottom: 22px;

    & > :first-child {
      font-weight: 700;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: #f9f9f9;
    }
    & > :nth-child(2) {
      display: flex;
      gap: 8px;
    }
  }
`;

export const RecommBooksListPageButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  margin: 0 auto;
  border: none;
`;

export const RecommBooksListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 23px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 23px;
  }

  @media (min-width: 1280px) {
    justify-content: flex-start;
    gap: 20px;
  }

  li {
    width: 136px;
    display: flex;
    flex-direction: column;

    text-align: center;
    cursor: pointer;
    align-items: flex-start;
  }
`;
