import { RecommendPageWraper } from "./RecommendPage.Styled";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserBooks,
  recommendedBooksThunk,
} from "../../store/books/operations";
import { selectRecommended } from "../../store/books/selectors";
import { setRecommendData } from "../../store/recommend/recommendSlise";
import RecommBooksList from "../../components/RecommBooksList/RecommBooksList";
import Filter from "../../components/Filter/Filter";

// import styled from "styled-components";

// const Test = styled.div``;

const RecommendPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const recommendedBooks = useSelector(selectRecommended);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getLimit = () => {
      if (windowWidth <= 767) return 2;
      if (windowWidth >= 768 && windowWidth <= 1279) return 8;
      return 10;
    };

    let limit = getLimit();

    const currentData = recommendedBooks || {};

    dispatch(setRecommendData({ ...currentData, limit }));
  }, [dispatch, windowWidth, recommendedBooks]);

  useEffect(() => {
    dispatch(fetchUserBooks());
  }, [dispatch]);

  useEffect(() => {
    // if (recommendedBooks) {
    dispatch(
      recommendedBooksThunk({
        title: recommendedBooks.title,
        author: recommendedBooks.author,
        page: recommendedBooks.page,
        limit: recommendedBooks.limit,
      })
    );
    // }
  }, [dispatch, recommendedBooks]);

  return (
    <RecommendPageWraper>
      <>
        <>
          <Filter />
        </>
        <>
          <RecommBooksList />
        </>
      </>
    </RecommendPageWraper>
  );
};

export default RecommendPage;
