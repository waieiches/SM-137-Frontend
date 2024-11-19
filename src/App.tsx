import styled from "@emotion/styled";
import PillButton from "./components/pill-button/PillButton";
import "./reset.css";
const Wrap = styled.div`
  background-color: #797979;
  display: flex;
  gap: 2rem;
`;

function App() {
  return (
    <Wrap>
      <PillButton contents="도서관" />
      <PillButton contents="도서관" />
      <PillButton contents="도서관" />
    </Wrap>
  );
}

export default App;
