import { useState } from "react";
import { CategoryValue, DataType, StatusType } from "../types/Type";
import { matchingMonth } from "../utils/MatchingOption";

export interface FiltersProps {
  period: string | null;
  category: CategoryValue | null;
  status: StatusType[] | null;
  hashtag: string[] | null;
  id: number | null;
  title: string[] | null;
}

export const useFilter = (originData: DataType[]) => {
  const [filteredData, setFilteredData] = useState<DataType[]>(originData);
  const [filters, setFilters] = useState<FiltersProps>({
    //필터 옵션 저장
    period: null,
    category: null,
    status: null,
    hashtag: null,
    id: null,
    title: null,
  });

  const handleFilterOptions = <K extends keyof FiltersProps>(
    option: K,
    value: FiltersProps[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [option]: value,
    }));
  };

  const handleFilter = () => {
    let result: DataType[] = originData;
    if (filters.period) {
      result = handlePeriod(result, filters.period);
    }
    if (filters.category) {
      result = handleCategory(result, filters.category);
    }
    if (filters.status) {
      result = handleStatus(result, filters.status);
    }
    if (filters.hashtag) {
      result = handleHashtag(result, filters.hashtag);
    }
    if (filters.id) {
      result = handleAdminNumber(result, filters.id);
    }
    if (filters.title) {
      result = handleAdminTitle(result, filters.title);
    }
    setFilteredData(result);
  };

  const setLastDate = (option: string) => {
    const today = new Date();
    const gap = matchingMonth(option);
    const lastDate = today.setMonth(today.getMonth() - gap);
    return lastDate;
  };

  const handlePeriod = (originData: DataType[], dateOption: string) => {
    if (dateOption === "전체") {
      return originData;
    }
    const lastDate = setLastDate(dateOption);
    const result = originData.filter((i) => {
      const date = new Date(i.date).getTime();
      return date > lastDate;
    });
    return result;
  };

  const handleCategory = (
    originData: DataType[],
    subCategory: CategoryValue
  ) => {
    //subCategory를 선택했을 때만 필터링
    let result = originData;

    if (subCategory) {
      result = originData.filter((i) => i.category === subCategory);
    }
    return result;
  };

  const handleStatus = (originData: DataType[], status: StatusType[]) => {
    let result = originData;
    const noStatusOption = status.length === 0;
    //option이 선택된 경우에만 필터링
    if (!noStatusOption) {
      result = originData.filter((i) => status.includes(i.status));
    }
    return result;
  };

  const handleHashtag = (originData: DataType[], hashtag: string[]) => {
    let result = originData;
    for (let tag of hashtag) {
      result = originData.filter((i) => i.hashtag.includes(tag));
    }
    return result;
  };

  const handleAdminNumber = (originData: DataType[], number: number) => {
    let result = originData;
    result = originData.filter((i) => i.id === number);
    return result;
  };

  const handleAdminTitle = (originData: DataType[], titleKeywords: string[]) => {
    let result = originData;
  
    // titleKeywords와 originData가 모두 유효한지 확인
    if (!Array.isArray(titleKeywords) || titleKeywords.length === 0) {
      return result; // 키워드가 없으면 원본 데이터 반환
    }
  
    result = originData.filter((data) => {
      // 데이터가 유효한지 확인
      if (!data || typeof data.title !== "string") {
        return false; // 제목이 없거나 문자열이 아니면 제외
      }
  
      // 게시글의 제목을 공백 기준으로 분리
      const titleWords = data.title.split(" ");
  
      // 입력받은 키워드 배열과 비교하여 하나라도 포함되면 필터링
      return titleKeywords.some((keyword) =>
        titleWords.some((word) => word.includes(keyword))
      );
    });
  
    return result; // 필터링된 데이터 반환
  };
  

  return { filters, filteredData, handleFilter, handleFilterOptions };
};


