import styled from "@emotion/styled";
import ScrapList from "./ScrapList";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

const Scrap = () => {
  return (
    <PageContainer>
      <ScrapList />
    </PageContainer>
  );
};

export default Scrap;
