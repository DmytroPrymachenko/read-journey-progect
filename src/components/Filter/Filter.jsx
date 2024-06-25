import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRecommended } from "../../store/books/selectors";
import { setRecommendData } from "../../store/recommend/recommendSlise";
import { useForm } from "react-hook-form";
import {
  BooksDextotWraper,
  ContentWraper,
  FiltersButton,
  FiltersContentWraper,
  FiltersFormWraper,
  FiltersInput,
  FiltersInputSpan,
  FiltersInputWraper,
  FiltersSpan,
  QuoteSpan,
  WorkoutContainer,
  WorkoutItemContainer,
  WorkoutItemH1,
  WorkoutItemP,
  WorkoutItemSpan,
  WorkoutLink,
  WorkoutLinkWraper,
  WorkoutNamredWraper,
} from "./Filter.Styled";
import NextSVG from "../../images/NextSVG";
import BooksPNG from "../../images/Books.png";

const Filter = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const recommendedBooks = useSelector(selectRecommended);

  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (recommendedBooks && recommendedBooks.title) {
      setValue("title", recommendedBooks.title);
    }
    if (recommendedBooks && recommendedBooks.author) {
      setValue("author", recommendedBooks.author);
    }
  }, [recommendedBooks, setValue]);

  const handleBook = ({ title, author }) => {
    dispatch(setRecommendData({ title, author }));
  };

  return (
    <ContentWraper>
      <FiltersContentWraper>
        <form onSubmit={handleSubmit(handleBook)}>
          <FiltersFormWraper>
            <FiltersSpan>Filters:</FiltersSpan>
            <FiltersInputWraper>
              <FiltersInput
                {...register("title")}
                type="text"
                id="title"
                placeholder="Enter text"
              />
              <FiltersInputSpan>Book title:</FiltersInputSpan>
            </FiltersInputWraper>
            <FiltersInputWraper>
              <FiltersInput
                {...register("author")}
                type="text"
                id="author"
                placeholder="Enter text"
              />
              <FiltersInputSpan>The author:</FiltersInputSpan>
            </FiltersInputWraper>
          </FiltersFormWraper>

          <FiltersButton>To apply</FiltersButton>
        </form>
        <WorkoutContainer>
          <WorkoutItemH1>Start your workout</WorkoutItemH1>
          <WorkoutItemContainer>
            <WorkoutNamredWraper>1</WorkoutNamredWraper>
            <WorkoutItemSpan>
              Create a personal library:{" "}
              <WorkoutItemP>
                add the books you intend to read to it.
              </WorkoutItemP>
            </WorkoutItemSpan>
          </WorkoutItemContainer>
          <WorkoutItemContainer>
            <WorkoutNamredWraper>2</WorkoutNamredWraper>

            <WorkoutItemSpan>
              Create your first workout:{" "}
              <WorkoutItemP>
                define a goal, choose a period, start training.
              </WorkoutItemP>
            </WorkoutItemSpan>
          </WorkoutItemContainer>
          <WorkoutLinkWraper>
            <WorkoutLink
              to="/library"
              aria-label="return to the library page"
              style={{ textDecoration: "none" }}
            >
              My library
            </WorkoutLink>
            <WorkoutLink
              to="/library"
              aria-label="return to the library page"
              style={{ textDecoration: "none" }}
            >
              <NextSVG />
            </WorkoutLink>
          </WorkoutLinkWraper>
        </WorkoutContainer>
        {isDesktopView && (
          <BooksDextotWraper>
            <img src={BooksPNG} alt="Books" />
            <QuoteSpan>
              &ldquo;Books are <span>windows</span> to the world, and reading is
              a journey into the unknown.&rdquo;
            </QuoteSpan>
          </BooksDextotWraper>
        )}
      </FiltersContentWraper>
    </ContentWraper>
  );
};

export default Filter;
