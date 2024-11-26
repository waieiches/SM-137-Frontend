import styled from "@emotion/styled";
import SearchBar from "../components/search-bar/SearchBar";
import QuickLink from "../components/quick-link/QuickLink";
import ContentBox from "../components/content/ContentBox";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { DataType } from "../\btypes/Type";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import HashtagCloud from "../components/word-cloud/HashtagCloud";
import Emblem from "../assets/emblem-1_DarkGray.png";

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
  display: flex;
  gap: 2.5rem;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
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

//삭제 예정, 백엔드 데이터
const mockData: DataType = {
  title: "저녁 수업 냉난방 가동 요청",
  category: ["시설", "설비", "냉난방"],
  status: "inProgress",
  content:
    "안녕하세요, 저는 저녁 시간대에 수업을 듣고 있는 학생입니다. 최근 들어 강의실 내부가 너무 덥거나 추운 경우가 많아 학습 환경이 다소 불편한데, 저녁 수업시간에도 냉난방을 틀어주실 수 있을까요?",
};

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
          <ArrowIconLeft component={ArrowBackIosNewRoundedIcon} />
          <ArrowIconRight component={ArrowForwardIosRoundedIcon} />
          <ContentBox type="large" data={mockData} />
          <ContentBox type="large" data={mockData} />
        </ContentBoxContainer>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
