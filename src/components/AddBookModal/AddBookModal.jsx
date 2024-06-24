import CloseSVG from "../../images/CloseSVG";
import goodJob from "../../images/addBookImages/goodJob.png";
import goodJob2x from "../../images/addBookImages/goodJob@2x.png";
import goodJobMobile from "../../images/addBookImages/goodJobMobile.png";
import goodJobMobile2x from "../../images/addBookImages/goodJobMobile@2x.png";
import {
  CloseButton,
  ContentWrap,
  Modal,
  Overlay,
  Picture,
  Span,
  Text,
  TextWrap,
  Title,
} from "./AddBookModal.Styled";

export const AddBookModal = ({ setModal }) => {
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

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CloseButton onClick={() => setModal(false)}>
          <CloseSVG />
        </CloseButton>
        <ContentWrap>
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={goodJobMobile + " 1x, " + goodJobMobile2x + " 2x"}
            />
            <source srcSet={goodJob + " 1x, " + goodJob2x + " 2x"} />
            <Picture src={goodJobMobile} alt="Good job" loading="lazy" />
          </picture>
          <TextWrap>
            <Title>Good job</Title>
            <Text>
              Your book is now in <Span>the library!</Span> The joy knows no
              bounds and now you can start your training
            </Text>
          </TextWrap>
        </ContentWrap>
      </Modal>
    </Overlay>
  );
};
