import styled from "@emotion/styled";
import Button from "./components/button/Button";

const Wrap = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--gray5-contents);
`;

const Title = styled.span`
  color: var(--primary);
`;

function App() {
  return (
    <Wrap>
      <h1>hi</h1>
      <Title>This is font</Title>
      <Button width="100px" />
    </Wrap>
  );
}

export default App;
