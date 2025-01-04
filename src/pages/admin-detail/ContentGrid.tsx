import styled from "@emotion/styled";
import { Title } from "../../styles/ContentStyle";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 1rem;
  width: 800px;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 91px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

const BContentBox = styled(ContentBox)`
  grid-column: span 2;
  height: 400px;
  border-radius: 8px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 주 축(가로 방향) 시작 부분에 정렬 */
  align-items: flex-start; /* 교차 축(세로 방향) 시작 부분에 정렬 */
  padding: 30px;
`;

const Text = styled.div`
  color: var(--gray5-lowText);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  justify-content: center;
`;
const ContentGrid = () => {
  return (
    <Container>
      <ContentBox>
        <Title>민원 정보</Title>
        <Text>민원번호 카테고리 개인/공개</Text>
      </ContentBox>

      <ContentBox>
        <Title>민원인 정보</Title>
        <Text>학과 학번 이름</Text>
      </ContentBox>

      <BContentBox>
        <Title>민원 내용</Title>
        <Text>현황 및 문제점 / 개선 방향 / 기대 효과</Text>
      </BContentBox>
    </Container>
  );
};

export default ContentGrid;
