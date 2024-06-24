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
  padding-top: 300px;
  background: rgba(20, 20, 20, 0.6);
  z-index: 3;
  overflow: auto;
  @media only screen and (min-width: 768px) {
    padding-top: 330px;
  }
`;
export const Modal = styled.div`
  position: relative;
  border: 1px solid rgba(104, 104, 104, 0.2);
  padding: 60px 46px;
  background-color: var(--dark-grey);
  border-radius: 12px;
  max-width: 335px;
  @media only screen and (min-width: 768px) {
    padding: 50px;
    max-width: 342px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 12px;
  border: none;
  background-color: transparent;
  padding: 0;
  @media only screen and (min-width: 768px) {
    right: 16px;
  }
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 768px) {
    gap: 32px;
    width: 242px;
  }
`;
export const Picture = styled.img`
  display: block;
  margin: 0 auto;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--white);
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: var(--input-title);
`;
export const Span = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--white);
`;
