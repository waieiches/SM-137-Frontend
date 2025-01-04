import styled from "@emotion/styled";
import ContentGrid from "./ContentGrid";
import StatusBar from "./StatusBar";
import Button from "../../components/button/Button";

const Background = styled.div`
  width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

const HomeArea = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const Title = styled.h2`
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: var(--white);
`;

const StatusBarContainer = styled.div`
  position: relative;
  transform: translateY(-50%);
`;

const Container = styled.div`
  gap: 1rem;
  width: 800px;
  margin: 0 auto;
`;

const InputTitle = styled.span``

const InputField = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  height: 300px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: var(--white);
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`

const AdminDetail = () => {
  return (
    <>
      <Background>
        <Title>상세 조회</Title>
        <ContentGrid />
      </Background>
       <StatusBarContainer><StatusBar/></StatusBarContainer>
      <HomeArea></HomeArea>

      <Container>
      <InputTitle>상세 민원 답변</InputTitle>
      <InputField></InputField>
      </Container>

      <ButtonContainer><Button content="다음" type={"_120x40_Primary"} /></ButtonContainer>

    </>
  );
};

export default AdminDetail;
