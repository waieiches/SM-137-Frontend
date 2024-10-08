import styled from "@emotion/styled";

const Wrap = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--gray5-contents);
`;

const Title = styled.span`
  color: var(--gray5-contents);
`;

function App() {
  return (
    <Wrap>
      <h1>hi</h1>
      <Title>This is font</Title>
    </Wrap>
  );
}

export default App;
