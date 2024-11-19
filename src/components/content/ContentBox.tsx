import styled from "@emotion/styled";
import StatusDisplay from "../status-button/StatusDisplay";

interface ContenteBoxProps {
  type: keyof typeof boxType;
}

const boxType = {
  small: {
    width: "287px",
    height: "255px",
  },
  large: {
    width: "537px",
    height: "207px",
  },
};

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  background-color: var(--white);
  border: 1px solid #000;
`;
//진행상태 + 좋아요/스크랩
const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
`;
const Title = styled.span``;

//삭제 예정, 백엔드 데이터
const mockData = {
  title: "저녁 수업 냉난방 가동 요청",
  category: ["시설", "설비", "냉난방"],
  content:
    "안녕하세요, 저는 저녁 시간대에 수업을 듣고 있는 학생입니다. 최근 들어 강의실 내부가 너무 덥거나 추운 경우가 많아 학습 환경이 다소 불편한데, 저녁 수업시간에도 냉난방을 틀어주실 수 있을까요?",
};

const ContentBox = ({ type = "small" }: ContenteBoxProps) => {
  return (
    <Container>
      <StatusContainer>
        <StatusDisplay type="inProgress" />
      </StatusContainer>
      <Title>{mockData.title}</Title>
    </Container>
  );
};

export default ContentBox;
