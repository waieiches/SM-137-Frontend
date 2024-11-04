import styled from "@emotion/styled";
import ProgressBar from "./components/progress-line/ProgressBar";

const Wrap = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--gray5-contents);
`;

const Title = styled.span`
  color: #918298;
`;

function App() {
  return <ProgressBar />;
}

export default App;
