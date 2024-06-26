import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addBookFromRecommendations,
  fetchUserBooks,
} from "../../store/books/operations";
import { selectUserBooks } from "../../store/books/selectors";
import {
  RecommendedItemImg,
  RecommendedItemImgWraper,
  RecommendedItemTitlewraper,
} from "./RecommendedItem.Styled";
import RecommendedModalItem from "../Modal/RecommendedModal/RecommendedModalItem";
import Backdrop from "../Backdrop/Backdrop";
import { transformTitle, truncateTitle } from "../../helpers/cutString";

const RecommendedItem = ({ book }) => {
  const [isModalItem, setIsModalItem] = useState(false);
  const dispatch = useDispatch();
  const userBooks = useSelector(selectUserBooks);

  const openModal = () => {
    setIsModalItem(true);
  };

  const closeModal = () => {
    setIsModalItem(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalItem) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalItem]);

  const handleAddBook = () => {
    const isBookExists = userBooks.some(
      (userBook) => userBook.title === book.title
    );
    if (isBookExists) {
      toast.error("This book is already in your library!");
      return;
    }

    dispatch(addBookFromRecommendations(book._id))
      .unwrap()
      .then(() => {
        toast.success("Book added successfully!");

        dispatch(fetchUserBooks());
        closeModal();
      })
      .catch((error) => {
        toast.error("Error adding book: " + error.message);
        console.error("Error adding book:", error);
      });
  };

  const truncatedTitle =
    book.title.length > 19
      ? truncateTitle(book.title, 16)
      : transformTitle(book.title);
  return (
    <>
      {isModalItem && (
        <>
          <Backdrop closeModal={closeModal} />
          <RecommendedModalItem
            closeModal={closeModal}
            book={book}
            handleAddBook={handleAddBook}
          />
        </>
      )}
      <li key={book._id} onClick={openModal}>
        <RecommendedItemImgWraper>
          <RecommendedItemImg src={book.imageUrl} alt={book.title} />
        </RecommendedItemImgWraper>
        <RecommendedItemTitlewraper>
          <span>{truncatedTitle}</span>
          <span>{book.author}</span>
        </RecommendedItemTitlewraper>
      </li>
    </>
  );
};

export default RecommendedItem;
