import { createContext, useState, ReactNode } from "react";
import { DataType, SortType } from "../types/Type";
import { mockData } from "../mockData";

interface ViewProps {
  originData: DataType[];
  setOriginData: React.Dispatch<React.SetStateAction<DataType[]>>;
  filteredData: DataType[];
  setFilteredData: React.Dispatch<React.SetStateAction<DataType[]>>;
  sortOption: SortType;
  setSortOption: React.Dispatch<React.SetStateAction<SortType>>;
}

export const ViewContext = createContext<ViewProps>({
  originData: mockData,
  setOriginData: () => {},
  filteredData: mockData,
  setFilteredData: () => {},
  sortOption: "latest",
  setSortOption: () => {},
});

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [originData, setOriginData] = useState<DataType[]>(mockData);
  const [filteredData, setFilteredData] = useState<DataType[]>(mockData);
  const [sortOption, setSortOption] = useState<SortType>("latest");

  return (
    <ViewContext.Provider
      value={{
        originData,
        setOriginData,
        filteredData,
        setFilteredData,
        sortOption,
        setSortOption,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
