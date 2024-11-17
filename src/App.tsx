import styled from "@emotion/styled";
import HeaderProvider from "./components/header/HeaderProvider";
import "./reset.css";
const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;
function App() {
  return (
    <Wrap>
      <HeaderProvider />
    </Wrap>
  );
}

export default App;
