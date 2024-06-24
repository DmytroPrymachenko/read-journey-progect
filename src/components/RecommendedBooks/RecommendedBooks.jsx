import {
  ImgWrap,
  LinkNextSVG,
  LinkStyled,
  LinksWrap,
  NextSVGStyled,
  RecommendedBooksWrap,
  Title,
} from "./RecommendedBooks.Styled";
import RecommendedBooksImg from "../../images/RecommendedBooksImg.png";
import RecommendedBooksImg2x from "../../images/RecommendedBooksImg@2x.png";

export const RecommendedBooks = () => {
  return (
    <RecommendedBooksWrap>
      <Title>Recommended books</Title>
      <ImgWrap>
        <img
          src={RecommendedBooksImg}
          srcSet={RecommendedBooksImg + " 1x, " + RecommendedBooksImg2x + " 2x"}
          alt="Recommended Books"
        />
      </ImgWrap>
      <LinksWrap>
        <LinkStyled to="/recommended">Home</LinkStyled>
        <LinkNextSVG to="/recommended">
          <NextSVGStyled />
        </LinkNextSVG>
      </LinksWrap>
    </RecommendedBooksWrap>
  );
};
