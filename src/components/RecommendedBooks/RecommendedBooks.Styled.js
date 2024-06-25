import styled from "styled-components";
import NextSVG from "../../images/NextSVG";
import { Link } from "react-router-dom";

export const RecommendedBooksWrap = styled.div`
  background: var(--input-bg);
  border-radius: 12px;
  padding: 20px;
  @media only screen and (min-width: 768px) {
    padding: 26px 20px 27px;
    width: 313px;
  }
  @media only screen and (min-width: 1280px) {
    padding: 20px 20px;
  }
`;
export const Title = styled.h2`
  font-weight: 700;
  line-height: 1;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #e3e3e3;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const LinksWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--input-title);
`;
export const ImgWrap = styled.div`
  width: 270px;
  overflow: hidden;
  display: flex;
  padding-top: 20px;
  padding-bottom: 15px;

  .book-item {
    width: 71px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 20px;
  }

  img {
    width: 100%;
  }
`;
export const LinkStyled = styled(Link)`
  align-self: flex-end;
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const LinkNextSVG = styled(Link)`
  width: 20px;
  height: 20px;
  display: flex;
  @media only screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const NextSVGStyled = styled(NextSVG)`
  width: 20px;
  height: 20px;
  align-self: flex-start;
  @media only screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const RecommendedBooksTitleSpan = styled.span`
  font-weight: 700;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #e3e3e3;
  padding-top: 8px;
  padding-bottom: 2px;
`;
export const RecommendedBooksImg = styled.img`
  border-radius: 8px;
  width: 71px;
  height: 107px;
`;

export const RecommendedBooksAutorSpan = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #686868;
`;
