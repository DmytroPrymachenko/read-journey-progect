import { useDispatch, useSelector } from "react-redux";
import { selectBookProgress } from "../../store/books/selectors";
import { DiaryComponentUl, ProgressWraper } from "./DiaryComponent.Styled";
import DiaryItem from "./DiaryItem/DiaryItem";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteReadingRecord } from "../../store/books/operations";
import { useParams } from "react-router-dom";
import DiaryList from "./DiaryList/DiaryList";

const DiaryComponent = () => {
  const bookProgress = useSelector(selectBookProgress);
  const [filteredProgress, setFilteredProgress] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (bookProgress.length > 0) {
      const groupedAndSortedProgress = groupAndSortProgressByDate(bookProgress);
      setFilteredProgress(groupedAndSortedProgress);
    }
  }, [bookProgress]);

  const groupAndSortProgressByDate = (progressArray) => {
    const grouped = progressArray.reduce((acc, progress) => {
      const date = new Date(progress.startReading).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(progress);
      return acc;
    }, {});

    const sortedDates = Object.keys(grouped).sort(
      (a, b) => new Date(b) - new Date(a)
    );

    const sortedProgress = sortedDates.reverse().map((date) => ({
      date,
      progress: grouped[date].sort(
        (a, b) => new Date(b.startReading) - new Date(a.startReading)
      ),
    }));

    return sortedProgress;
  };

  const handleDeleteRecord = async (readingId) => {
    try {
      await dispatch(deleteReadingRecord({ bookId: id, readingId })).unwrap();
      toast.success("Reading record deleted successfully!");
    } catch (error) {
      toast.error("Error deleting reading record: " + error.message);
    }
  };
  console.log(filteredProgress);

  return (
    <>
      <ProgressWraper>
        <>
          <DiaryComponentUl>
            {filteredProgress.map((group) => (
              <DiaryList
                key={group.date}
                group={group}
                handleDeleteRecord={handleDeleteRecord}
              />
            ))}
          </DiaryComponentUl>
        </>
      </ProgressWraper>
    </>
  );
};

export default DiaryComponent;
