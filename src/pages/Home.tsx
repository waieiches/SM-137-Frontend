import styled from "@emotion/styled";
import SearchBar from "../components/search-bar/SearchBar";
import QuickLink from "../components/quick-link/QuickLink";
import ContentBox from "../components/content/ContentBox";

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const QuickLinkContainer = styled.div`
  margin: 2rem;
`;
const Title = styled.h2`
  width: 100%;
`;
const SearchContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ContentBoxContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
/*키워드 컴포넌트 (임시) */
const KeyWordTemp = styled.div`
  width: 350px;
  height: 200px;
  background-color: var(--white);
`;

const Home = () => {
  return (
    <HomeContainer>
      <SearchContainer>
        <KeyWordTemp />
        <SearchBar />
      </SearchContainer>

      <QuickLinkContainer>
        <QuickLink />
      </QuickLinkContainer>

      <ContentContainer>
        <Title>최근 주목받은 민원</Title>
        <ContentBoxContainer>
          <ContentBox type="large" />
          <ContentBox type="large" />
        </ContentBoxContainer>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
