import styled from "@emotion/styled";
import CategorySelect from "../components/category-select/CategorySelect";
import SortBar from "../components/sort-bar/SortBar";
import AdminContentList from "./view/AdminTable";
import { useEffect, useState } from "react";
import { getProcessedComplaints } from "../services/managerServices";
import Loading from "../components/loading/Loading";

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

const AdminHome = () => {
  const [contentList, setContentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProcessedComplaints()
      .then((res) => setContentList(res.data))
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, []);

  return (
    <HomeArea>
      <Background>
        <Title>민원 관리</Title>
        <CategoryContainer>
          <CategorySelect />
        </CategoryContainer>
      </Background>
      <SortBar></SortBar>
      {isLoading ? <Loading /> : <AdminContentList data={contentList} />}
    </HomeArea>
  );
};

export default AdminHome;
