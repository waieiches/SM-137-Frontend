import styled from "@emotion/styled";
import StatusDisplay from "../status-button/StatusDisplay";
import CategoryTagGroup from "../category-tag/CategoryTagGroup";
import { Article, Title } from "../../styles/ContentStyle";
import { StatusType } from "../../types/Type";

interface DataType {
  data: {
    title: string;
    status: StatusType;
    category: string[];
    content: string;
  };
}
const Container = styled.div`
  width: 1114px;
  height: 173px;
  padding: 1.5rem 3rem;
  border-bottom: 1px solid var(--gray3-border);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
  &:hover {
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
//진행상태 + 배열 버튼
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;
//InfoContainer + 좋아요/스크랩/공유
const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentList = ({ data }: DataType) => {
  const ARTICLE_LINE = 2;
  return (
    <Container>
      <StatusContainer>
        <InfoContainer>
          <StatusDisplay type={data.status} />
          <CategoryTagGroup tagArray={data.category} />
        </InfoContainer>
        {/*Interaction */}
      </StatusContainer>
      <Title>{data.title}</Title>
      <Article line={ARTICLE_LINE}>{data.content}</Article>
    </Container>
  );
};

export default ContentList;
