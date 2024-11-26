import styled from "@emotion/styled";
import SearchBar from "../components/search-bar/SearchBar";
import QuickLink from "../components/quick-link/QuickLink";
import ContentBox from "../components/content/ContentBox";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import HashtagCloud from "../components/word-cloud/HashtagCloud";
import Emblem from "../assets/emblem-1_DarkGray.png";
import { mockData } from "../mockData";
import { useState } from "react";

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  position: relative;
`;
const QuickLinkContainer = styled.div`
  margin: 4rem 0;
  width: 100%;
`;
const EmblemContainer = styled.img`
  width: 750px;
  height: 750px;
  //HomeContainer 기준 상대정렬
  position: absolute;
  top: -55%;
  left: -40%;
  opacity: 0.2;
  z-index: 0;
  @media screen and (max-width: 768px) {
    width: 500px;
    height: 500px;
    top: -30%;
    left: -40%;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const Title = styled.h2`
  width: 100%;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const SearchContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 500;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const ContentBoxContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const KeyWordContainer = styled.div`
  width: 350px;
  height: 200px;
`;

const ArrowIconLeft = styled(SvgIcon)<SvgIconProps>`
  width: 24px;
  height: 24px;
  fill: var(--gray5-lowText);
  position: absolute;
  left: -2.5rem;
  top: calc(50% - 12px);
  cursor: pointer;
  &:hover {
    background-color: var(--gray2-subbtn);
    border-radius: 100px;
    transition: 0.3s ease;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ArrowIconRight = styled(ArrowIconLeft)`
  left: auto;
  right: -2.5rem;
`;

//7개 보냄
const mockHashtag = [
  "냉난방",
  "학사일정",
  "교환학생",
  "연계전공",
  "졸업",
  "시설",
  "설비",
];

const Home = () => {
  const FIRST_PAGE_INDEX = 0;
  const LAST_PAGE_INDEX = 4;
  //최근 주목받은 민원
  const [currentIndex, setCurrentIndex] = useState(FIRST_PAGE_INDEX);
  const data = mockData.slice(currentIndex, currentIndex + 2);
  const nextPage = () => {
    if (currentIndex + 2 < mockData.length) {
      setCurrentIndex(currentIndex + 2);
      return;
    }
    setCurrentIndex(FIRST_PAGE_INDEX);
  };
  const prevPage = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
      return;
    }
    setCurrentIndex(LAST_PAGE_INDEX);
  };
  return (
    <HomeContainer>
      <EmblemContainer src={Emblem} />

      <SearchContainer>
        <KeyWordContainer>
          <HashtagCloud data={mockHashtag} />
        </KeyWordContainer>
        <SearchBar />
      </SearchContainer>

      <QuickLinkContainer>
        <QuickLink />
      </QuickLinkContainer>

      <ContentContainer>
        <Title>최근 주목받은 민원</Title>
        <ContentBoxContainer>
          <ArrowIconLeft
            component={ArrowBackIosNewRoundedIcon}
            onClick={prevPage}
          />
          <ArrowIconRight
            component={ArrowForwardIosRoundedIcon}
            onClick={nextPage}
          />
          {data.map((i) => (
            <ContentBox type="large" data={i} />
          ))}
        </ContentBoxContainer>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
