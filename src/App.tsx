import Button from "./components/button/Button";
import ContentBox from "./components/content/ContentBox";
import InitialInfo from "./components/modal/contents/InitialInfo";
import "./reset.css";
import Modal from "./components/modal/Modal";

function App() {
  function setModalOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <Button
        type="_120x40_Primary"
        content="모달창열기"
        onClick={() => setModalOpen(true)}
      />
    </div>
  );
}

export default App;
