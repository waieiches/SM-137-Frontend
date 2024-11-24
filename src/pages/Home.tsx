import styled from "@emotion/styled";
import SearchBar from "../components/search-bar/SearchBar";
import QuickLink from "../components/quick-link/QuickLink";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const QuickLinkContainer = styled.div`
  position: absolute;
  top: calc(50% - 36.5px);
  @media screen and (max-width: 768px) {
    top: calc(50% - 52px);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <SearchBar />
      <QuickLinkContainer>
        <QuickLink />
      </QuickLinkContainer>
    </HomeContainer>
  );
};

export default Home;
