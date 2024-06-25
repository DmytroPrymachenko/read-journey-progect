import { useEffect, useState } from "react";
import BlackWhiteSquare from "../../../images/BlackWhiteSquare";
import DiaryItem from "../DiaryItem/DiaryItem";
import {
  BlackWhiteSquareWrapper,
  DiaryDateLi,
  DiaryDateWraper,
  DiaryListUl,
  DiaryListWraper,
} from "../DiaryItem/DiaryItem.Styled";

const DiaryList = ({ group, handleDeleteRecord }) => {
  const [pagesRead, setPagesRead] = useState(0);

  useEffect(() => {
    let totalPages = 0;
    group.progress.forEach((progress) => {
      totalPages += progress.finishPage - progress.startPage;
    });
    setPagesRead(totalPages);
  }, [group]);
  console.log("group", group);
  return (
    <DiaryDateLi>
      <DiaryListWraper>
        <BlackWhiteSquareWrapper>
          <BlackWhiteSquare />
        </BlackWhiteSquareWrapper>

        <DiaryDateWraper>
          <span>{group.date}</span>
          <span>{pagesRead} pages</span>
        </DiaryDateWraper>
      </DiaryListWraper>
      <DiaryListUl>
        {group.progress.map((progress) => (
          <DiaryItem
            key={progress._id}
            progress={progress}
            handleDeleteRecord={handleDeleteRecord}
          />
        ))}
      </DiaryListUl>
    </DiaryDateLi>
  );
};

export default DiaryList;
