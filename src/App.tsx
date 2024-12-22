import Modal, { useModal } from "./components/modal/Modal";
import InitialInfo from "./components/modal/contents/InitialInfo";
import Button from "./components/button/Button";
import "./reset.css";

function App() {
  const { isModalOpen, handleModal } = useModal();

  return (
    <div>
      <Button
        type="_120x40_Primary"
        content="모달 열기"
        onClick={() => handleModal(true)}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => handleModal(false)}
        contents={<InitialInfo onClose={() => handleModal(false)} />}
      />
    </div>
  );
}

export default App;
