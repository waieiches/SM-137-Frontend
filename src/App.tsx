import InitialInfo from "./components/modal/contents/InitialInfo";
import Modal from "./components/modal/Modal";
import "./reset.css";

function App() {
  return <Modal contents={<InitialInfo />} />;
}

export default App;
