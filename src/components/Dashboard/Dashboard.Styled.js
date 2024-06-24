import styled from "styled-components";

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #1f1f1f;
  border-radius: 30px;
  padding: 18px 20px 20px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 32px;
    gap: 32px;
  }
  @media only screen and (min-width: 1280px) {
    flex-direction: column;
    padding: 40px 20px 20px;
    gap: 78px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 768px) {
    width: 295px;
    gap: 38px;
  }
  @media only screen and (min-width: 1280px) {
    width: 313px;
    gap: 20px;
  }
`;
export const FiltersFormWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-direction: column;
  /* padding-bottom: 20px; */
`;
export const FiltersTitle = styled.h3`
  padding-left: 13px;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const InputWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 472px;
  @media only screen and (min-width: 768px) {
  }
`;
export const InputContainer = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  @media only screen and (min-width: 768px) {
  }
`;
export const Label = styled.label`
  display: flex;
  gap: 10px;
  border-radius: 12px;
  align-items: center;
  background: var(--input-bg);
  @media only screen and (min-width: 768px) {
  }
`;
export const InputTitle = styled.p`
  padding: 14px 0 14px 14px;
  border-radius: 12px 0 0 12px;
  color: var(--input-title);
  background: var(--input-bg);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  text-align: center;
  white-space: nowrap;
  @media only screen and (min-width: 768px) {
    padding: 16px 0 16px 14px;
    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const Input = styled.input`
  padding: 14px 14px 14px 0;
  border-radius: 0 12px 12px 0;
  background: var(--input-bg);
  color: var(--white);
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    background: var(--input-bg);
    color: var(--white);
  }
  &:active {
    background: var(--input-bg);
    color: var(--white);
  }
  @media only screen and (min-width: 768px) {
    max-width: 145px;
    padding: 16px 16px 16px 0;
    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const ErrorSpan = styled.span`
  color: #e90516;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
`;
export const SubmitButton = styled.button`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 9px 20px;
  background: transparent;
  align-self: flex-start;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.02em;
  color: var(--white);
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
    padding: 11px 28px;
  }
`;
