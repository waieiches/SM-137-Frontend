import styled from "@emotion/styled";
import "./reset.css";
import ContentBubble from "./components/content-bubble/ContentBubble";
import HeaderNavigator from "./components/content-bubble/contents/HeaderNavigator";
import Notification from "./components/content-bubble/contents/Notification";

const Wrap = styled.div`
  width: 100%;
  background-color: var(--gray5-contents);
`;

function App() {
  return (
    <Wrap>
      <ContentBubble tailType="middle" content={<HeaderNavigator />} />
      <ContentBubble tailType="edge" content={<Notification />} />
    </Wrap>
  );
}

export default App;
