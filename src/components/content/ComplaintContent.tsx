import StatusDisplay from '../status-button/StatusDisplay';
import CategoryTagGroup from '../category-tag/CategoryTagGroup';
import InteractionGroup from '../interaction/InteractionGroup';
import { StatusType } from '../../types/Type';
import { Article, Title } from '../../styles/ContentStyle';
import styled from '@emotion/styled';

interface ComplaintContentProps {
  data: {
    title: string;
    status: StatusType;
    category: string[];
    content: string;
    likes: number;
    bookmarks: number;
    date: string;
  };
}

const Container = styled.div`
  width: 784px;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const DateSection = styled.div`
  font-size: 16px;
  color: #adb5bd;
  text-align: right;
`;

const Actions = styled.div`
  display: flex;
  gap: 16px;
  font-size: 16px;
  color: var(--gray4-placeholder-low);
  cursor: pointer;
`;

const ComplaintContent = ({ data }: ComplaintContentProps) => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <StatusDisplay type={data.status} />
          <CategoryContainer>
            {data.category.map((category, index) => (
              <CategoryTagGroup key={index} tagArray={[category]} />
            ))}
          </CategoryContainer>
        </div>
        <InteractionGroup likes={data.likes} bookmarks={data.bookmarks} />
      </Header>

      <div style={{ fontSize: '16px', color: '#385BBC', fontWeight: '600', marginTop: '8px' }}>민원번호 : 00910</div>

      {/* Content */}
      <div>
        <Title>{data.title}</Title>
        <Article line={0}>{data.content}</Article>
      </div>

      {/* Footer */}
      <Footer>
        <Actions>
          <span>수정</span>
          <span>삭제</span>
        </Actions>
        <DateSection>{data.date}</DateSection>
      </Footer>
    </Container>
  );
};

export default ComplaintContent;
