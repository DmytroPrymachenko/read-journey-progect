import { useDispatch, useSelector } from "react-redux";
import {
  selectRecommended,
  selectRecommendedBooks,
  selectTotalPages,
} from "../../store/books/selectors";

import { useState } from "react";
import { setRecommendData } from "../../store/recommend/recommendSlise";

import RecommendedItem from "../RecommendedItem/RecommendedItem";
import {
  RecommBooksListPageButton,
  RecommBooksListUl,
  RecommBooksListWraper,
} from "./RecommBooksList.Styled";
import NextPage from "../../images/svg/recomendPage/NextPage";
import PrevPage from "../../images/svg/recomendPage/PrevPage";

const RecommBooksList = () => {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector(selectRecommended);
  const booksList = useSelector(selectRecommendedBooks);
  const totalPages = useSelector(selectTotalPages);
  console.log("recommendedBooks", recommendedBooks);
  console.log("booksList", booksList);
  console.log("totalPages", totalPages);

  const [page, setPage] = useState(recommendedBooks.page || 1);

  const changePage = (newPage) => {
    setPage(newPage);
    dispatch(setRecommendData({ ...recommendedBooks, page: newPage }));
  };

  const prevPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      changePage(newPage);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      const newPage = page + 1;
      changePage(newPage);
    }
  };

  return (
    <>
      <>
        <RecommBooksListWraper>
          <div>
            <h1>Recommended</h1>
            <div>
              <RecommBooksListPageButton
                onClick={prevPage}
                disabled={page === 1}
              >
                <PrevPage isDisabled={page === 1} />
              </RecommBooksListPageButton>
              <RecommBooksListPageButton
                onClick={nextPage}
                disabled={page === totalPages}
              >
                <NextPage isDisabled={page === totalPages} />
              </RecommBooksListPageButton>
            </div>
          </div>
          <div>
            <RecommBooksListUl>
              {booksList.map((book) => (
                <RecommendedItem key={book._id} book={book} />
              ))}
            </RecommBooksListUl>
          </div>
        </RecommBooksListWraper>
      </>
    </>
  );
};

export default RecommBooksList;
