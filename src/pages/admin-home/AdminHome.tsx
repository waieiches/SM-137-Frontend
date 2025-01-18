import styled from "@emotion/styled";
import { mockData } from "../../mockData";
import CategorySelect from "../../components/category-select/CategorySelect";
import SortBar from "../../components/sort-bar/SortBar";
import AdminContentList from "../admin-detail/AdminContentList";
import FormComponent from "./AdminSearch";
import { createContext, useEffect, useState } from "react";
import { DataType, SortType } from "../../types/Type";
import { FiltersProps, useFilter } from "../../hooks/useFilter";
import { SortOptionsProps, useSort } from "../../hooks/useSort";
import { getProcessedComplaints } from "../../services/managerServices";

interface AdminContenContextProps {
  originData: DataType[];
  filters: FiltersProps;
  handleFilterOptions: <K extends keyof FiltersProps>(
    option: K,
    value: FiltersProps[K]
  ) => void;
  handleFilter: () => void;
  handleSort: (inputData: DataType[]) => void;
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
  const [originData] = useState(mockData);

  const { filteredData, handleFilter, handleFilterOptions, filters } =
    useFilter(originData);
  const { handleSort, sortOptions, handleSortOption, sortData } =
    useSort(filteredData);

  useEffect(() => {
    handleFilter();
  }, [filters]);

  useEffect(() => {
    handleSort(filteredData);
  }, [sortOptions, filteredData]);

  useEffect(() => {
    getProcessedComplaints()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <AdminContentContext.Provider
      value={{
        originData,
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
          <AdminContentList data={sortData} />
        </ContentContainer>
      </HomeArea>
    </AdminContentContext.Provider>
  );
};

export default AdminHome;
