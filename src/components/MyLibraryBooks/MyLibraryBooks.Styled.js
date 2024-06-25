import styled from "styled-components";

export const MyLibraryWrap = styled.div`
  padding: 40px 20px;
  background-color: var(--dark-grey);
  border-radius: 30px;
  width: 100%;
  min-height: 407px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$length === 0 ? "63px" : "14px")};
  @media only screen and (min-width: 768px) {
    padding: 40px;
    gap: ${(props) => (props.$length === 0 ? "100px" : "28px")};
    min-height: 518px;
  }
  @media only screen and (min-width: 1280px) {
    gap: ${(props) => (props.$length === 0 ? "161px" : "28px")};
  }
`;
export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--white);
  align-self: flex-start;
  @media only screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14286;
    letter-spacing: 0.02em;
  }
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: center;
  align-items: center;
  width: 197px;
  margin-bottom: 60px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 120px;
  }
`;
export const Picture = styled.img`
  /* display: block; */
  margin: 0 auto;
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: var(--white);
  text-align: center;
`;
export const Span = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--input-title);
`;
export const MyBookList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
`;
