import ExitSVG from "../../../images/ExitSVG";
import {
  RecommendedModalItemContantWraper,
  RecommendedModalItemWraper,
} from "../../RecommendedItem/RecommendedItem.Styled";
import { RecommendedModalWraper } from "./RecommendedModalStyled";

const RecommendedModalItem = ({ closeModal, book, handleAddBook }) => {
  return (
    <RecommendedModalItemWraper>
      <RecommendedModalWraper>
        <button onClick={closeModal}>
          <ExitSVG />
        </button>
        <div>
          <img src={book.imageUrl} alt={book.title} />
        </div>
        <RecommendedModalItemContantWraper>
          <span>{book.title}</span>
          <span>{book.author}</span>
          <span>{book.totalPages} pages</span>
        </RecommendedModalItemContantWraper>
        <button onClick={handleAddBook}>Add to library</button>
      </RecommendedModalWraper>
    </RecommendedModalItemWraper>
  );
};

export default RecommendedModalItem;
