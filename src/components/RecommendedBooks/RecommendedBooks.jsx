import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import { selectRecommendedBooks } from "../../store/books/selectors";
import { recommendedBooksThunk } from "../../store/books/operations";
import {
  ImgWrap,
  LinkNextSVG,
  LinkStyled,
  LinksWrap,
  NextSVGStyled,
  RecommendedBooksAutorSpan,
  RecommendedBooksImg,
  RecommendedBooksTitleSpan,
  RecommendedBooksWrap,
  Title,
} from "./RecommendedBooks.Styled";
import { transformTitle, truncateTitle } from "../../helpers/cutString";

export const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector(selectRecommendedBooks);

  useEffect(() => {
    dispatch(
      recommendedBooksThunk({
        title: "",
        author: "",
        page: 1,
        limit: 20,
      })
    );
  }, [dispatch]);

  return (
    <RecommendedBooksWrap>
      <Title>Recommended books</Title>
      <ImgWrap>
        <Marquee gradient={false} speed={30}>
          {recommendedBooks.map((book, index) => {
            const truncatedTitle =
              book.title.length > 15
                ? truncateTitle(book.title, 12)
                : transformTitle(book.title);
            const truncatedAutor =
              book.author.length > 13
                ? truncateTitle(book.author, 10)
                : transformTitle(book.author);

            return (
              <div
                key={index}
                className="book-item"
                style={{ width: "71px", margin: "0 20px" }}
              >
                <RecommendedBooksImg
                  src={book.imageUrl}
                  alt={book.title}
                  style={{ width: "100%" }}
                />
                <RecommendedBooksTitleSpan>
                  {truncatedTitle}
                </RecommendedBooksTitleSpan>
                <RecommendedBooksAutorSpan>
                  {truncatedAutor}
                </RecommendedBooksAutorSpan>
              </div>
            );
          })}
        </Marquee>
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
