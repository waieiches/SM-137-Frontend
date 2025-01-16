import React, { useState } from "react";
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

const InputField = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  height: 200px;
  border-radius: 8px;
  background-color: var(--white);
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const BackButtonStyled = styled(BackButton)`
  position: absolute;
  left: 1rem;
  right: 1rem;
  `;

const AdminDetail = () => {
  const [selectedStatus, setSelectedStatus] = useState<StatusType>("inProgress");
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  const handleStatusChange = (status: StatusType) => {
    setSelectedStatus(status);
  };

  return (
    <>
      <Background>
        <Title>상세 조회</Title>
        <BackButtonStyled />
        <ContentGrid />
      </Background>
      {/* StatusBar에 상태 변경 함수를 props로 전달 */}
      <StatusBarContainer>
        <StatusBar onStatusChange={handleStatusChange} />
      </StatusBarContainer>
      <HomeArea></HomeArea>

      {/* 선택된 상태에 따라 조건부 렌더링 */}
      {selectedStatus === "rejected" || selectedStatus === "completed" ? (
        <Container>
          <InputTitle>상세 민원 답변</InputTitle>
          <InputField />
        </Container>
      ) : null}

      <ButtonContainer>
        <Button content="다음" type={"_120x40_Primary"} onClick={handleModalOpen} />
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
