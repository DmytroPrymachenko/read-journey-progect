import { useSelector } from "react-redux";
import { selectUserBooks } from "../../store/books/selectors";
import LibraryItem from "../LibraryItem/LibraryItem";

const LibraryList = () => {
  const userBooks = useSelector(selectUserBooks);
  console.log("Test", userBooks);
  return (
    <>
      <ul>
        {userBooks.map((book) => (
          <LibraryItem key={book._id} book={book} />
        ))}
      </ul>
    </>
  );
};

export default LibraryList;
