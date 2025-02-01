import styled from "@emotion/styled";
import StatusButtonGroup from "../../components/status-button/StatusButtonGroup";
import { StatusType } from "../../types/Type";

interface Props {
  currentStatus: StatusType | null;
  onStatusChange: (status: StatusType) => void;
}

const Title = styled.span`
  margin-right: 20px;
`;

const Container = styled.div`
  gap: 1rem;
  width: 800px;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 8px;
  background-color: var(--gray1-background);
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StatusBar: React.FC<Props> = ({ onStatusChange, currentStatus }) => {
  return (
    <Container>
      <ContentBox>
        <Title>상태변경</Title>
        <StatusButtonGroup onStatusChange={onStatusChange} currentStatus={currentStatus} />
      </ContentBox>
    </Container>
  );
};

export default StatusBar;
