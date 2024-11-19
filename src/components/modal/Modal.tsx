import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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
  max-width: 562px;
  max-height: 348px;
  text-align: center;
  animation: ${UpAnimation} 0.8s ease-out;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
interface ModalProps {
  contents: React.ReactNode;
}

const Modal = ({ contents }: ModalProps) => {
  return (
    <ModalWrapper>
      <ModalContent>{contents}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
