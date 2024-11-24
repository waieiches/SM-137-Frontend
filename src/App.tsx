import ContentBox from "./components/content/ContentBox";
import Interaction from "./components/interaction/Interaction";

function App() {
  return (
    <>
      <Interaction type="thumbUp" />
      <Interaction type="scrap" />
      <ContentBox type="small" />
    </>
  );
}

export default App;
