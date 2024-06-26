import { differenceInMinutes, differenceInSeconds } from "date-fns";

import { selectBookInfo } from "../../../store/books/selectors";
import { useSelector } from "react-redux";

import {
  DeleteRecordButton,
  DeleteRecordPageHourDiv,
  DeleteRecordVectorWraper,
  DeleteRecordWraper,
  DiaryDatePercentageWraper,
  DiaryDateRightWraper,
  DiaryItemLi,
  PerHour,
  ReadingSpeed,
} from "./DiaryItem.Styled";
import VectorSVG from "../../../images/VectorSVG";
import DeleteRecord from "../../../images/DeleteRecord";

const DiaryItem = ({ progress, handleDeleteRecord }) => {
  const bookInfo = useSelector(selectBookInfo);

  const startTime = new Date(progress.startReading);
  const endTime = new Date(progress.finishReading);

  const sessionDurationHours = (endTime - startTime) / (1000 * 60 * 60);
  const progressFinishPage = progress.finishPage ?? progress.startPage;

  const percentageRead = (
    (progressFinishPage / bookInfo.totalPages) *
    100
  ).toFixed(1);

  const pagesRead = progressFinishPage - progress.startPage;

  const readingSpeed = pagesRead / sessionDurationHours;
  const formattedReadingSpeed = isNaN(readingSpeed)
    ? 0
    : readingSpeed.toFixed(0);

  let durationText;
  if (sessionDurationHours < 1) {
    const readingDurationSeconds = differenceInSeconds(
      new Date(progress.finishReading),
      new Date(progress.startReading)
    );
    durationText = isNaN(readingDurationSeconds)
      ? "0 seconds"
      : `${readingDurationSeconds} seconds`;
  } else {
    const readingDurationMinutes = differenceInMinutes(
      new Date(progress.finishReading),
      new Date(progress.startReading)
    );
    durationText = isNaN(readingDurationMinutes)
      ? "0 minutes"
      : `${readingDurationMinutes} minutes`;
  }

  return (
    <>
      <DiaryItemLi>
        <>
          <DiaryDatePercentageWraper>
            <span>{percentageRead}%</span>
            <span>{durationText}</span>
          </DiaryDatePercentageWraper>
        </>
        <>
          <DiaryDateRightWraper>
            <>
              <>
                <DeleteRecordVectorWraper>
                  <DeleteRecordWraper>
                    <VectorSVG />
                    <DeleteRecordButton
                      onClick={() => handleDeleteRecord(progress._id)}
                    >
                      <DeleteRecord />
                    </DeleteRecordButton>
                  </DeleteRecordWraper>

                  <DeleteRecordPageHourDiv>
                    <ReadingSpeed>{formattedReadingSpeed} pages</ReadingSpeed>
                    <PerHour>per hour</PerHour>
                  </DeleteRecordPageHourDiv>
                </DeleteRecordVectorWraper>
              </>
            </>
          </DiaryDateRightWraper>
        </>
      </DiaryItemLi>
    </>
  );
};

export default DiaryItem;
