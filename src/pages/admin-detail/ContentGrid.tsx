import styled from "@emotion/styled";
import { Title } from "../../styles/ContentStyle";
import { ContentType } from "../../types/Type";

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
  justify-content: flex-start; 
  align-items: flex-start; 
  padding: 30px;
`;

const Text = styled.div`
  color: var(--gray5-lowText);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  justify-content: center;
`;

interface ContentProps {
  data: ContentType;
}

const ContentGrid = ({ data }: ContentProps) => {
  if (!data) {
    return <text>데이터가 없습니다</text>;
  }

  return (
    <Container>
      <ContentBox>
        <Title>민원 정보</Title>
        민원번호 {data.complaintId} | 카테고리 {data.category}
      </ContentBox>

      <ContentBox>
        <Title>민원인 정보</Title>
        <Text>학과 학번 이름</Text>
      </ContentBox>

      <BContentBox>
        <Title>민원 내용</Title>
        <Text>{data.complaintTitle}</Text>
        <Text>{data.contentProb}</Text>
      </BContentBox>
    </Container>
  );
};

export default ContentGrid;
