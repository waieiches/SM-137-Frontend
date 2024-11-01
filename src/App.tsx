import styled from "@emotion/styled";
import Header from "./components/header/Header";
import "./reset.css";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Wrap>
      <Header />
    </Wrap>
  );
}

export default App;
