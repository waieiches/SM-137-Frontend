import Modal, { useModal } from "./components/modal/Modal";
import Button from "./components/button/Button";
import "./reset.css";

function App() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <Button type="_120x40_Primary" content="모달 열기" onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
