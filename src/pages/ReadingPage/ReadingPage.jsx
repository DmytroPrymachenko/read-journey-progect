import { useDispatch, useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";
import { useParams } from "react-router-dom";
import { fetchBookInfo } from "../../store/books/operations";
import { useEffect, useState } from "react";
import Progress from "../../components/Progress/Progress";
import ReadingBook from "../../components/ReadingBook/ReadingBook";
import { ReadingWraper } from "./Reading.Styled";

// import styled from "styled-components";

// const Test = styled.div``;

const ReadingPage = () => {
  const { id } = useParams();
  console.log(useParams());
  const dispatch = useDispatch();
  const bookInfo = useSelector(selectBookInfo);
  const [isTimeLeft, setIsTimeLeft] = useState(false);
  console.log(isTimeLeft);

  useEffect(() => {
    if (id) {
      console.log(id);
      dispatch(fetchBookInfo(id));
    }
  }, [id, dispatch]);

  console.log("bookInfo", bookInfo);

  if (!bookInfo) {
    return (
      <>
        <div>Loader</div>
      </>
    );
  }
  return (
    <>
      <ReadingWraper>
        <Progress setIsTimeLeft={setIsTimeLeft} />
        <ReadingBook isTimeLeft={isTimeLeft} />
      </ReadingWraper>
    </>
  );
};

export default ReadingPage;
