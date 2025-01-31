import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import CategorySelect from "../../components/category-select/CategorySelect";
import SortBar from "../../components/sort-bar/SortBar";
import AdminContentList from "./AdminContentList";
import FormComponent from "./AdminSearch";
import { createContext } from "react";
import { ContentType, SortType } from "../../types/Type";
import { FiltersProps, useFilter } from "../../hooks/useFilter";
import { SortOptionsProps, useSort } from "../../hooks/useSort";
import { getProcessedComplaints } from "../../services/managerServices";
import Loading from "../../components/loading/Loading";

interface AdminContenContextProps {
  originData: ContentType[];
  filters: FiltersProps;
  handleFilterOptions: <K extends keyof FiltersProps>(
    option: K,
    value: FiltersProps[K]
  ) => void;
  handleFilter: () => void;
  handleSort: (inputData: ContentType[]) => void;
  sortOptions: SortOptionsProps;
  handleSortOption: (type: SortType) => void;
}

const Background = styled.div`
  width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: rem;
`;

const HomeArea = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const Title = styled.h2`
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: var(--white);
`;

const CategoryContainer = styled.div`
  margin: 0.5 0rem;
  width: 100%;
`;

const ContentContainer = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const AdminContentContext = createContext<
  AdminContenContextProps | undefined
>(undefined);

const AdminHome = () => {
  const [contentList, setContentList] = useState<ContentType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("AdminHome 렌더링, isLoading:", isLoading);

  const { filteredData, handleFilter, handleFilterOptions, filters } =
    useFilter(contentList);

  const { handleSort, sortOptions, handleSortOption, sortData } =
    useSort(filteredData);

  useEffect(() => {
    console.log("API 호출");

    getProcessedComplaints()
    .then((res) => {
      console.log("log: API 응답 데이터:", res.data);
      if (!Array.isArray(res.data)) {
        console.error("log: API 응답이 배열이 아닙니다:", res.data);
      }
      setContentList(res.data || []);
    })
    .catch((error) => {
      console.error("log: API 호출 에러:", error);
      setContentList([]);
    });
}, []);

  useEffect(() => {
    console.log("useEffect (필터 적용) 실행. isLoading:", isLoading);
    console.log("현재 filters 상태:", filters);

    if (!isLoading) {
      console.log("handleFilter 실행");
      handleFilter();
    }
  }, [filters, isLoading]);

  useEffect(() => {
    console.log("useEffect (정렬 적용) 실행. isLoading:", isLoading);
    console.log("현재 sortOptions 상태:", sortOptions);
    console.log("현재 filteredData 상태:", filteredData);

    if (!isLoading) {
      console.log("handleSort 호출 직전. filteredData =", filteredData);
      handleSort(filteredData);
    }
  }, [sortOptions, filteredData, isLoading]);

  return (
    <AdminContentContext.Provider
      value={{
        originData: contentList,
        handleFilter,
        filters,
        handleFilterOptions,
        handleSort,
        sortOptions,
        handleSortOption,
      }}
    >
      <HomeArea>
        <Background>
          <Title>민원 관리</Title>
          <CategoryContainer>
            <CategorySelect />
          </CategoryContainer>
          <FormComponent />
        </Background>

        <SortBar />
        <ContentContainer>
          {isLoading ? <Loading /> : <AdminContentList data={sortData} />}
        </ContentContainer>
      </HomeArea>
    </AdminContentContext.Provider>
  );
};

export default AdminHome;
