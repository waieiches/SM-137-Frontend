import styled from "@emotion/styled";
import StatusButtonGroup from "../../components/status-button/StatusButtonGroup";

const Title = styled.span`
  margin-right: 20px;
`

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


const StatusBar = () => {
  return (
    <Container>
        <ContentBox>
            <Title>상태변경</Title>
            <StatusButtonGroup/>
        </ContentBox>
    </Container>
  );
};

export default StatusBar;
