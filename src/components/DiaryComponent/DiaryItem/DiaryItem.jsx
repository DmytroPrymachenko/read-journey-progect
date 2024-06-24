import { differenceInMinutes, differenceInSeconds, format } from "date-fns";

import { selectBookInfo } from "../../../store/books/selectors";
import { useSelector } from "react-redux";
import BlackWhiteSquare from "../../../images/BlackWhiteSquare";
import {
  BlackWhiteSquareWrapper,
  DeleteRecordButton,
  DeleteRecordPageHourDiv,
  DeleteRecordPagesSpan,
  DeleteRecordVectorWraper,
  DeleteRecordWraper,
  DiaryDateLeftWraper,
  DiaryDateLi,
  DiaryDatePercentageWraper,
  DiaryDateRightWraper,
  DiaryDateWraper,
  DiaryItemLi,
  PerHour,
  ReadingSpeed,
} from "./DiaryItem.Styled";
import VectorSVG from "../../../images/VectorSVG";
import DeleteRecord from "../../../images/DeleteRecord";

const DiaryItem = ({ progress, handleDeleteRecord }) => {
  const bookInfo = useSelector(selectBookInfo);
  const formattedDate = format(new Date(progress.startReading), "dd.MM.yyyy");
  const startTime = new Date(progress.startReading);
  const endTime = new Date(progress.finishReading);

  const sessionDurationHours = (endTime - startTime) / (1000 * 60 * 60);

  const percentageRead = (
    (progress.finishPage / bookInfo.totalPages) *
    100
  ).toFixed(1);

  const pagesRead = progress.finishPage - progress.startPage;

  const readingSpeed = pagesRead / sessionDurationHours;
  const formattedReadingSpeed = readingSpeed.toFixed(0);

  let durationText;
  if (sessionDurationHours < 1) {
    const readingDurationSeconds = differenceInSeconds(
      new Date(progress.finishReading),
      new Date(progress.startReading)
    );
    durationText = `${readingDurationSeconds} seconds`;
  } else {
    const readingDurationMinutes = differenceInMinutes(
      new Date(progress.finishReading),
      new Date(progress.startReading)
    );
    durationText = `${readingDurationMinutes} minutes`;
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
                    <DeleteRecordButton onClick={handleDeleteRecord}>
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
    // <>
    //   <>
    //     <>
    //       <>
    //         <>
    //           <>
    //             <BlackWhiteSquareWrapper>
    //               <BlackWhiteSquare />
    //             </BlackWhiteSquareWrapper>
    //           </>
    //           <>
    //             <DiaryDateWraper>
    //               <span>{formattedDate}</span>

    //               <DiaryDatePercentageWraper>
    //                 <span>{percentageRead}%</span>
    //                 <span>{durationText}</span>
    //               </DiaryDatePercentageWraper>
    //             </DiaryDateWraper>
    //           </>
    //         </>
    //       </>
    //     </>
    //     <>
    //       <DiaryDateRightWraper>
    //         <>
    //           <>
    //             <DeleteRecordPagesSpan>{pagesRead} pages</DeleteRecordPagesSpan>
    //           </>
    //           <>
    //             <DeleteRecordVectorWraper>
    //               <DeleteRecordWraper>
    //                 <VectorSVG />
    //                 <DeleteRecordButton onClick={handleDeleteRecord}>
    //                   <DeleteRecord />
    //                 </DeleteRecordButton>
    //               </DeleteRecordWraper>

    //               <DeleteRecordPageHourDiv>
    //                 <ReadingSpeed>{formattedReadingSpeed} pages</ReadingSpeed>
    //                 <PerHour>per hour</PerHour>
    //               </DeleteRecordPageHourDiv>
    //             </DeleteRecordVectorWraper>
    //           </>
    //         </>
    //       </DiaryDateRightWraper>
    //     </>
    //   </DiaryDateLi>
  );
};

export default DiaryItem;