import ReadingForm from "../ReadingForm/ReadingForm";
import ReadingStatistics from "../ReadingStatistics/ReadingStatistics";
import { ProgressWraper } from "./ProgressStyled";

const Progress = ({ setIsTimeLeft }) => {
  return (
    <ProgressWraper>
      <>
        <ReadingForm />
      </>
      <>
        <ReadingStatistics setIsTimeLeft={setIsTimeLeft} />
      </>
    </ProgressWraper>
  );
};

export default Progress;
