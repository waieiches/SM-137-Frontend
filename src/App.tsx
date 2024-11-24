import ContentBox from "./components/content/ContentBox";
import Interaction from "./components/interaction/Interaction";
import "./reset.css";

function App() {
  return (
    <>
      <Interaction type="thumbUp" />
      <Interaction type="scrap" />
      <ContentBox type="small" />
      <ContentBox type="large" />
    </>
  );
}

export default App;
