import { useEffect } from "react";
import LibraryList from "../../components/LibraryList/LibraryList";
import { fetchUserBooks } from "../../store/books/operations";
import { useDispatch } from "react-redux";

const LibraryPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserBooks());
  }, [dispatch]);

  return (
    <>
      <></>
      <>
        <LibraryList />
      </>
    </>
  );
};

export default LibraryPage;
