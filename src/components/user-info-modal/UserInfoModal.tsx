import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import InfoMessage from "../info-message/InfoMessage";
import UserInfoForm from "./UserInfoForm";
import Button from "../button/Button";

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UpAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalContent = styled.div`
  background: var(--white);
  padding: 3rem 6rem;
  border-radius: 8px;
  width: 562px;
  height: 348px;
  text-align: center;
  animation: ${UpAnimation} 0.8s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

const InfoMessageWrapper = styled.div`
  margin-bottom: 1rem;
  white-space: pre-line;
`;

const FormWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Enter = styled.div`
  height: 1.5rem;
`;

const UserInfoModal = () => {
  return (
    <ModalWrapper>
      <ModalContent>
        <InfoMessageWrapper>
          <InfoMessage
            sizeType="small"
            messageType="info"
            content={`회원가입 후 최초 1회, 원활한 서비스 이용을 위해
학번, 학과, 이름 등의 개인정보 설정이 필요합니다`}
          />
        </InfoMessageWrapper>
        <FormWrapper>
          <UserInfoForm />
        </FormWrapper>
        <Enter />
        <Button content="시작하기" />
      </ModalContent>
    </ModalWrapper>
  );
};

export default UserInfoModal;
