import { useState } from "react";
import { ContentType, SortType } from "../types/Type";

export interface SortOptionsProps {
  latest: boolean;
  scrap: boolean;
  likes: boolean;
}

export const useSort = (filteredData: ContentType[]) => {
  const [sortData, setSortData] = useState<ContentType[]>(filteredData);
  const [sortOptions, setSortOptions] = useState({
    latest: true,
    scrap: false,
    likes: false,
  });

  const sortOptionsReset = () => {
    setSortOptions({
      latest: false,
      scrap: false,
      likes: false,
    });
  };

  const handleSortOption = (type: SortType) => {
    sortOptionsReset();
    setSortOptions((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  console.log(sortOptions);

  const handleSort = (inputData: ContentType[]) => {
    console.log("정렬 작동");
    if (sortOptions.scrap) {
      setSortData([...inputData].sort((a, b) => b.scrapCount - a.scrapCount));
    } else if (sortOptions.likes) {
      setSortData([...inputData].sort((a, b) => b.likeCount - a.likeCount));
    } else if (sortOptions.latest) {
      setSortData(
        [...inputData].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      );
    } else {
      setSortData(inputData);
    }
  };

  return {
    sortOptions,
    handleSortOption,
    handleSort,
    sortData,
  };
};
