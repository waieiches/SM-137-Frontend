import styled from "@emotion/styled";
import { Title } from "../../styles/ContentStyle";
import { ContentDetailProps } from "../../types/Type";

interface ContentProps {
  data: ContentDetailProps;
}

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

const TextContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Text = styled.div`
  display: flex;
  color: var(--gray5-lowText);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  justify-content: center;
`;

const Data = styled(Text)`
  color: var(--gray6-header);
`;

const AttachmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
`;

const AttachmentItem = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

const ContentGrid = ({ data }: ContentProps) => {
  if (!data) {
    return <text>데이터가 없습니다</text>;
  }

  return (
    <Container>
      <ContentBox>
        <Title>민원 정보</Title>
        <TextContainer>
          <Text>
            민원번호 | <Data>{data.complaintId}</Data>
          </Text>
          <Text>
            카테고리 | <Data>{data.category}</Data>
          </Text>
        </TextContainer>
      </ContentBox>

      <ContentBox>
        <Title>민원인 정보</Title>
        <TextContainer>
          <Text>
            학과 : <Data>{data.user[0].depaartment}</Data>
          </Text>
          <Text>
            학번 : <Data>{data.user[0].number}</Data>
          </Text>
          <Text>
            이름 : <Data>{data.user[0].name}</Data>
          </Text>
        </TextContainer>
      </ContentBox>

      <BContentBox>
        <Title>민원 내용</Title>
        <Text>{data.complaintTitle}</Text>
        <Text>{data.contentProb}</Text>
        <AttachmentsContainer>
        {data.attachmentUrls?.map((url, index) => (
          <AttachmentItem key={index} href={url} target="_blank" rel="noopener noreferrer">
          첨부파일 {index + 1}
          </AttachmentItem>
        ))}
        </AttachmentsContainer>
      </BContentBox>
    </Container>
  );
};

export default ContentGrid;
