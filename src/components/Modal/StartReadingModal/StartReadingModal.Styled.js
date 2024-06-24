import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 254px;
  background: rgba(20, 20, 20, 0.6);
  z-index: 3;
  overflow: auto;
`;
export const Modal = styled.div`
  position: relative;
  border: 1px solid rgba(104, 104, 104, 0.2);
  padding: 52px 70px 40px;
  background-color: var(--dark-grey);
  border-radius: 12px;
  max-width: 335px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;
  padding: 0;
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  max-width: 100%;
`;
export const Cover = styled.div`
  border-radius: 8px;
  width: 140px;
  height: 213px;
  border: ${(props) => (props.$image ? "none" : "1px solid #3e3e3e")};
`;
export const LibraryItemImg = styled.img`
  display: ${(props) => (props.$image ? "blok" : "none")};
`;
export const Picture = styled.img`
  display: block;
  margin: 0 auto;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--white);
  text-align: center;
`;
export const Author = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: var(--input-title);
  margin-top: 2px;
`;
export const Pages = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--white);
`;
export const StartReadingtButton = styled.button`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 12px 24px;
  /* width: 141px;
  height: 42px; */
  background: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.02em;
  color: var(--white);
`;
