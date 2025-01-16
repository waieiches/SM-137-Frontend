import styled from "@emotion/styled";
import Button from "../../button/Button";
import InfoMessage from "../../info-message/InfoMessage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
`
const MessageText = `민원 상태를 저장하고 답변을 게시하시겠습니까?`;

interface AdminModalContentsProps {
  handleClose: () => void;
}

const AdminModalContents = ({ handleClose }: AdminModalContentsProps) => {
  return (
    <Container>
      <InfoMessage
        sizeType="small"
        messageType="info"
        content={MessageText}
      />
      <ButtonContainer>
      <Button type="_120x40_Primary" content="취소" onClick={handleClose} />
      <Button type="_120x40_Primary" content="저장" onClick={handleClose} />
      </ButtonContainer>
    </Container>
  );
};

export default AdminModalContents;
