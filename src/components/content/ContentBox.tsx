import styled from "@emotion/styled";
import StatusDisplay from "../status-button/StatusDisplay";
import CategoryTagGroup from "../category-tag/CategoryTagGroup";
import { Article, Title } from "../../styles/ContentStyle";

interface ContenteBoxProps {
  type: keyof typeof boxType;
}
interface ContainerProps {
  width: string;
  height: string;
}

const boxType = {
  small: {
    width: "287px",
    height: "255px",
    flex: "column",
    line: 3,
  },
  large: {
    width: "537px",
    height: "207px",
    flex: "row",
    line: 2,
  },
};

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.65rem;
  background-color: var(--white);
  border: 1px solid var(--gray3-border);
  border-radius: 8px;
  padding: 24px;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--gray4-placeholder-low);
  }
  @media screen and (max-width: 480px) {
    display: inline-flex;
    padding: 1rem;
    width: auto;
    height: auto;
  }
`;
//진행상태 + 좋아요/스크랩
const StatusContainer = styled.div<{ flex: string }>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => props.flex};
`;

//삭제 예정, 백엔드 데이터
const mockData = {
  title: "저녁 수업 냉난방 가동 요청",
  category: ["시설", "설비", "냉난방"],
  content:
    "안녕하세요, 저는 저녁 시간대에 수업을 듣고 있는 학생입니다. 최근 들어 강의실 내부가 너무 덥거나 추운 경우가 많아 학습 환경이 다소 불편한데, 저녁 수업시간에도 냉난방을 틀어주실 수 있을까요?",
};

const ContentBox = ({ type = "small" }: ContenteBoxProps) => {
  const boxStyle = boxType[type];

  return (
    <Container width={boxStyle.width} height={boxStyle.height}>
      <StatusContainer flex={boxStyle.flex}>
        <StatusDisplay type="inProgress" />
      </StatusContainer>
      <CategoryTagGroup tagArray={mockData.category} />
      <Title>{mockData.title}</Title>
      <Article line={boxStyle.line}>{mockData.content}</Article>
    </Container>
  );
};

export default ContentBox;
