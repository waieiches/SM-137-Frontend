import Modal from "./components/modal/Modal";
import InitialInfo from "./components/modal/contents/InitialInfo";
import Button from "./components/button/Button";
import "./reset.css";
import { useModal } from "./hooks/useModal";

function App() {
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

  return (
    <div>
      <Button
        type="_120x40_Primary"
        content="모달 열기"
        onClick={handleModalOpen}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        contents={<InitialInfo handleClose={handleModalClose} />}
      />
    </div>
  );
}

export default App;
