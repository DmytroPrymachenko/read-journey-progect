import styled from "styled-components";

export const BookItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: calc((100% - 8px) / 2);
  max-width: 137px;
  @media only screen and (min-width: 768px) {
    gap: 10px;
  }
`;
export const Cover = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 208px;
  cursor: pointer;
  border: ${(props) => (props.$image ? "none" : "1px solid #3e3e3e")};
`;
export const LibraryItemImg = styled.img`
  border-radius: 8px;
  height: 100%;
  width: 100%;
  object-fit: fill;
`;
export const CoverText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.28571;
  color: var(--input-title);
  padding: 15px;
`;
export const Span = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--white);
`;
export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const Title = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: var(--white);
`;
export const Author = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--input-title);
`;
export const DeleteButton = styled.button`
  height: 28px;
  align-self: flex-end;
  background: transparent;
  border: none;
`;
