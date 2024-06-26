import { useSelector } from "react-redux";
import { ContentWraper } from "../Filter/Filter.Styled";
import {
  selectBookInfo,
  selectBookProgress,
  selectReadingInfo,
} from "../../store/books/selectors";
import {
  CoverReading,
  ReadingBookH1,
  ReadingBookTimeRemainingWraper,
  ReadingBookTitleWraper,
  ReadingBookWraper,
} from "./ReadingBook.Styled";
import StartSVG from "../../images/svg/readingButtonStartStop/StartSVG";
import StopSVG from "../../images/svg/readingButtonStartStop/StopSVG";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StopTabletSVG from "../../images/svg/readingButtonStartStop/StopTabletSVG";
import StartTabletSVG from "../../images/svg/readingButtonStartStop/StartTabletSVG";
import {
  CoverText,
  LibraryItemImg,
  Span,
} from "../LibraryItem/LibraryItem.Styled";

const ReadingBook = ({ isTimeLeft }) => {
  const { id } = useParams();
  const readingInfo = useSelector(selectReadingInfo);
  const bookInfo = useSelector(selectBookInfo);
  const bookProgress = useSelector(selectBookProgress);

  const [istimeRemaining, setIstimeRemaining] = useState("");

  const [isTabletView, setIsTabletView] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletView(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (bookProgress.length > 0 && isTimeLeft) {
      const averageSpeed =
        bookProgress.reduce((total, progress) => total + progress.speed, 0) /
        bookProgress.length;

      const lastIndex = bookProgress.length - 1;
      const lastElementBooks =
        bookProgress[lastIndex].finishPage || bookProgress[lastIndex].startPage;

      const pagesLeft = bookInfo.totalPages - lastElementBooks;

      const hoursLeft = pagesLeft / averageSpeed;

      const hours = Math.floor(hoursLeft);
      const minutes = Math.round((hoursLeft - hours) * 60);

      const remainingTime = ` ${hours} hours and ${minutes} minutes left`;
      setIstimeRemaining(remainingTime);
    } else {
      setIstimeRemaining("");
    }
  }, [bookProgress, bookInfo.totalPages, isTimeLeft]);

  const isReadingCurrentBook =
    readingInfo.isReading && readingInfo.readingBookId === id;

  return (
    <ContentWraper>
      <ReadingBookTimeRemainingWraper>
        <ReadingBookH1>My reading</ReadingBookH1>
        <span>{istimeRemaining}</span>
      </ReadingBookTimeRemainingWraper>

      <>
        <ReadingBookWraper>
          <CoverReading $image={bookInfo.imageUrl}>
            {bookInfo.imageUrl ? (
              <LibraryItemImg src={bookInfo.imageUrl} alt={bookInfo.title} />
            ) : (
              <CoverText>
                There is no cover for <br /> <Span>{bookInfo.title}</Span>
              </CoverText>
            )}
          </CoverReading>

          <ReadingBookTitleWraper>
            <span>{bookInfo.title}</span>
            <span>{bookInfo.author}</span>
          </ReadingBookTitleWraper>
          {isTabletView ? (
            isReadingCurrentBook ? (
              <StopTabletSVG />
            ) : (
              <StartTabletSVG />
            )
          ) : isReadingCurrentBook ? (
            <StopSVG />
          ) : (
            <StartSVG />
          )}
        </ReadingBookWraper>
      </>
    </ContentWraper>
  );
};

export default ReadingBook;
