import { useSelector } from "react-redux";
import { selectBookProgress } from "../../store/books/selectors";

import {
  NotStartedComponent,
  ReadingStatisticsButton,
  SectionSelectionWraper,
  StarWraper,
  StatisticsWraper,
} from "./ReadingStatistics.Styled";
import { useEffect, useState } from "react";
import DiaryComponent from "../DiaryComponent/DiaryComponent";
import StatisticsComponent from "../StatisticsComponent/StatisticsComponent";
import DiarySVG from "../../images/DiarySVG";
import StatisticsSVG from "../../images/StatisticsSVG";
import StarPNG from "../../images/StarPNG.png";

const ReadingStatistics = ({ setIsTimeLeft }) => {
  const [activeSection, setActiveSection] = useState("Diary");

  const bookProgress = useSelector(selectBookProgress);

  useEffect(() => {
    if (activeSection === "Statistics") {
      setIsTimeLeft(true);
    } else {
      setIsTimeLeft(false);
    }
  }, [activeSection, setIsTimeLeft]);

  return (
    <>
      {bookProgress.length === 0 ? (
        <NotStartedComponent>
          <div>
            <h1>Progress</h1>
            <span>
              Here you will see when and how much you read. To record, click on
              the red button above.
            </span>
          </div>
          <StarWraper>
            <img src={StarPNG} alt="Star" />
          </StarWraper>
        </NotStartedComponent>
      ) : (
        <div>
          <SectionSelectionWraper>
            <h1>{activeSection}</h1>
            <div>
              <ReadingStatisticsButton
                onClick={() => setActiveSection("Diary")}
              >
                <DiarySVG active={activeSection === "Diary"} />
              </ReadingStatisticsButton>
              <ReadingStatisticsButton
                onClick={() => setActiveSection("Statistics")}
              >
                <StatisticsSVG active={activeSection === "Statistics"} />
              </ReadingStatisticsButton>
            </div>
          </SectionSelectionWraper>
          <StatisticsWraper>
            {activeSection === "Diary" && <DiaryComponent />}
            {activeSection === "Statistics" && <StatisticsComponent />}
          </StatisticsWraper>
        </div>
      )}
    </>
  );
};

export default ReadingStatistics;
