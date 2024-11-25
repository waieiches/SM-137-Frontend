import styled from "@emotion/styled";
import SearchBar from "../components/search-bar/SearchBar";
import QuickLink from "../components/quick-link/QuickLink";
import ContentBox from "../components/content/ContentBox";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { StatusType } from "../\btypes/StatusType";

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

const ArrowIcon = styled(SvgIcon)<SvgIconProps>`
  fill: var(--gray5-lowText);
`;

interface DataType {
  title: string;
  status: StatusType;
  category: string[];
  content: string;
}

//삭제 예정, 백엔드 데이터
const mockData: DataType = {
  title: "저녁 수업 냉난방 가동 요청",
  category: ["시설", "설비", "냉난방"],
  status: "inProgress",
  content:
    "안녕하세요, 저는 저녁 시간대에 수업을 듣고 있는 학생입니다. 최근 들어 강의실 내부가 너무 덥거나 추운 경우가 많아 학습 환경이 다소 불편한데, 저녁 수업시간에도 냉난방을 틀어주실 수 있을까요?",
};

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
          <ContentBox type="large" data={mockData} />
          <ContentBox type="large" data={mockData} />
        </ContentBoxContainer>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
