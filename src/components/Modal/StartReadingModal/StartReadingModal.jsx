import { useNavigate } from "react-router-dom";
import CloseSVG from "../../../images/CloseSVG";
import {
  CoverText,
  LibraryItemImg,
  Span,
} from "../../LibraryItem/LibraryItem.Styled";
import {
  Author,
  CloseButton,
  ContentWrap,
  Cover,
  Modal,
  Overlay,
  Pages,
  StartReadingtButton,
  TextWrap,
  Title,
} from "./StartReadingModal.Styled";

export const StartReadingModal = ({ setModal, book }) => {
  const navigate = useNavigate();

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }
  document.addEventListener("keydown", onWindowEscape);
  function onWindowEscape(e) {
    if (e.code === "Escape") {
      setModal(false);
      document.removeEventListener("keydown", onWindowEscape);
    }
  }
  function handleFetchBookInfo(id) {
    navigate(`/reading/${id}`);
  }

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CloseButton onClick={() => setModal(false)}>
          <CloseSVG />
        </CloseButton>
        <ContentWrap>
          <Cover $image={book.imageUrl}>
            {book.imageUrl ? (
              <LibraryItemImg src={book.imageUrl} alt={book.title} />
            ) : (
              <CoverText>
                There is no cover for <br /> <Span>{book.title}</Span>
              </CoverText>
            )}
          </Cover>
          <TextWrap>
            <Title>{book.title}</Title>
            <Author>{book.author}</Author>
            <Pages>{book.totalPages}</Pages>
          </TextWrap>
        </ContentWrap>
        <StartReadingtButton
          aria-label="Start reading"
          onClick={() => handleFetchBookInfo(book._id)}
        >
          {console.log(book._id)}
          Start reading
        </StartReadingtButton>
      </Modal>
    </Overlay>
  );
};
