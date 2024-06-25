import { useDispatch, useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";
import { useParams } from "react-router-dom";
import { fetchBookInfo } from "../../store/books/operations";
import { useEffect, useState } from "react";
import Progress from "../../components/Progress/Progress";
import ReadingBook from "../../components/ReadingBook/ReadingBook";
import { ReadingWraper } from "./Reading.Styled";

const ReadingPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const bookInfo = useSelector(selectBookInfo);
  const [isTimeLeft, setIsTimeLeft] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchBookInfo(id));
    }
  }, [id, dispatch]);

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
