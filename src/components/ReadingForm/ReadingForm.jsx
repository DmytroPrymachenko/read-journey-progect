import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  finishReadingBook,
  startReadingBook,
} from "../../store/books/operations";
import {
  FiltersButton,
  FiltersFormWraper,
  FiltersInputReading,
  FiltersInputSpan,
  FiltersInputWraper,
  FiltersSpan,
} from "../Filter/Filter.Styled";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectBookInfo, selectReadingInfo } from "../../store/books/selectors";

const ReadingForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const bookInfo = useSelector(selectBookInfo);
  const readingInfo = useSelector(selectReadingInfo);

  useEffect(() => {
    if (bookInfo && bookInfo.progress.length > 0) {
      const lastReadPage =
        bookInfo.progress[bookInfo.progress.length - 1].finishPage;
      setValue("page", lastReadPage);
    } else {
      setValue("page", 1);
    }
  }, [bookInfo, setValue]);

  const handleReading = ({ page }) => {
    if (readingInfo.isReading) {
      if (readingInfo.readingBookId !== id) {
        toast.error("You are already reading another book!");
        return;
      }

      dispatch(finishReadingBook({ id, page }))
        .unwrap()
        .then(() => {
          toast.success("Finished reading the book!");
        })
        .catch((error) => {
          toast.error("Error finishing the reading: " + error.message);
        });
    } else {
      dispatch(startReadingBook({ id, page }))
        .unwrap()
        .then(() => {
          toast.success("Started reading the book!");
        })
        .catch((error) => {
          toast.error("Error starting to read the book: " + error.message);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleReading)}>
        <FiltersFormWraper>
          <FiltersSpan>
            {readingInfo.isReading && readingInfo.readingBookId === id
              ? "Stop page:"
              : "Start page:"}
          </FiltersSpan>
          <FiltersInputWraper>
            <FiltersInputReading
              {...register("page", {
                validate: (value) => {
                  if (value > bookInfo.totalPages) {
                    toast.error(
                      `You cannot enter a page greater than the maximum number of ${bookInfo.totalPages} pages`
                    );
                    return false;
                  }
                  return true;
                },
              })}
              type="text"
              id="page"
              placeholder="Enter page number"
            />
            <FiltersInputSpan>Page number:</FiltersInputSpan>
          </FiltersInputWraper>
        </FiltersFormWraper>

        <FiltersButton type="submit">
          {readingInfo.isReading && readingInfo.readingBookId === id
            ? "Stop page:"
            : "Start page:"}
        </FiltersButton>
      </form>
    </>
  );
};

export default ReadingForm;
