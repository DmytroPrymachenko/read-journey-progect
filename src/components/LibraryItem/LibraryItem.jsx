import { useDispatch, useSelector } from "react-redux";
import {
  Author,
  BookItem,
  Cover,
  CoverText,
  DeleteButton,
  Description,
  LibraryItemImg,
  Span,
  TextWrap,
  Title,
} from "./LibraryItem.Styled";
import { deleteUserBook, fetchUserBooks } from "../../store/books/operations";
import TrashCanSVG from "../../images/myLibraryBooksImages/TrashCanSVG";
import { createPortal } from "react-dom";

import { useState } from "react";
import { cutString } from "../../helpers/cutString";
import { StartReadingModal } from "../Modal/StartReadingModal/StartReadingModal";
import { selectExpireTime } from "../../store/auth/selectors";
import { currentThunk, refreshTokensThunk } from "../../store/auth/operations";
import { toast } from "react-toastify";

const LibraryItem = ({ book }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const expireTime = useSelector(selectExpireTime);

  function deleteBook(id) {
    if (expireTime < Date.now()) {
      dispatch(refreshTokensThunk())
        .unwrap()
        .then(() => {
          dispatch(currentThunk()).catch((error) => toast.error(error));
        })
        .then(() => {
          dispatch(deleteUserBook(id));
          dispatch(fetchUserBooks());
        })
        .catch((error) => toast.error(error));
    } else {
      dispatch(deleteUserBook(id));
      dispatch(fetchUserBooks());
    }
  }

  return (
    <>
      <BookItem>
        <Cover $image={book.imageUrl} onClick={setModal}>
          {book.imageUrl ? (
            <LibraryItemImg src={book.imageUrl} alt={book.title} />
          ) : (
            <CoverText>
              There is no cover for <br /> <Span>{book.title}</Span>
            </CoverText>
          )}
        </Cover>
        <Description>
          <TextWrap>
            <Title>{cutString(book.title, 15)}</Title>
            <Author>{cutString(book.author, 20)}</Author>
          </TextWrap>
          <DeleteButton onClick={() => deleteBook(book._id)}>
            <TrashCanSVG />
          </DeleteButton>
        </Description>
      </BookItem>
      {modal &&
        createPortal(
          <StartReadingModal book={book} setModal={setModal} />,
          document.body
        )}
    </>
  );
};

export default LibraryItem;
