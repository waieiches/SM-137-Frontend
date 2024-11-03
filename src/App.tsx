import styled from "@emotion/styled";
import "./reset.css";
import ContentBubble from "./components/contentBubble/ContentBubble";

const Wrap = styled.div`
  width: 100%;
  background-color: var(--gray5-contents);
`;

function App() {
  return (
    <Wrap>
      <ContentBubble type="notification" />
    </Wrap>
  );
}

export default App;
