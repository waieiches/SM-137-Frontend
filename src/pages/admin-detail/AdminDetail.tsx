import { useState } from "react";
import styled from "@emotion/styled";
import ContentGrid from "./ContentGrid";
import StatusBar from "./StatusBar";
import { StatusType } from "../../types/Type";
import Button from "../../components/button/Button";
import BackButton from "./BackButton";
import AdminModalContents from "../../components/modal/contents/AdminModalContents";
import Modal from "../../components/modal/Modal";
import { useModal } from "../../hooks/useModal";

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

const InputTitle = styled.span``;

const InputField = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  height: 200px;
  border-radius: 8px;
  background-color: var(--white);
  padding: 1rem; /* 내부 여백 추가 */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  line-height: 1.5;

`;

const BackButtonStyled = styled(BackButton)`
  position: absolute;
  left: 1rem;
  right: 1rem;
`;

const AdminDetail = () => {
  const [selectedStatus, setSelectedStatus] = useState<StatusType>("inProgress");
  const [inputValue, setInputValue] = useState(""); // InputField 값 상태
  const [error, setError] = useState(""); // 에러 메시지 상태
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  const handleStatusChange = (status: StatusType) => {
    setSelectedStatus(status);
  };

  const handleNextClick = () => {
    if (!inputValue.trim()) {
      setError("내용을 입력해주세요."); 
      return;
    }

    if (inputValue.length < 50) {
      setError("내용은 최소 50자 이상이어야 합니다.");
      return;
    }

    setError(""); 
    handleModalOpen();
  };

  return (
    <>
      <Background>
        <Title>상세 조회</Title>
        <BackButtonStyled />
        <ContentGrid />
      </Background>
      <StatusBarContainer>
        <StatusBar onStatusChange={handleStatusChange} />
      </StatusBarContainer>
      <HomeArea></HomeArea>

      {selectedStatus === "rejected" || selectedStatus === "completed" ? (
        <Container>
          <InputTitle>상세 민원 답변</InputTitle>
          <InputField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // 입력 값 업데이트
          />
          {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>} {/* 에러 메시지 */}
        </Container>
      ) : null}

      <ButtonContainer>
        <Button content="다음" type={"_120x40_Primary"} onClick={handleNextClick} />
      </ButtonContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        contents={<AdminModalContents handleClose={handleModalClose} />}
      />
    </>
  );
};

export default AdminDetail;
