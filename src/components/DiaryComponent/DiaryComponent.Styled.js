import styled from "styled-components";

export const ProgressWraper = styled.div`
  background: #262626;
  padding: 16px;
  border-radius: 12px;
  height: 211px;
  width: 100%;
  position: relative;
  overflow-y: auto;
  @media (min-width: 768px) {
    height: 252px;
  }
  @media (min-width: 1280px) {
    height: 373px;
  }

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 15px;
    background-color: #1f1f1f;
  }

  &::-webkit-scrollbar-track:hover {
    background-color: #1f1f1f;
  }

  &::-webkit-scrollbar-track:active {
    background-color: #1f1f1f;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #262626;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #262626;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #262626;
  }
`;

export const DiaryComponentUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
