import styled from "@emotion/styled";
import CategoryTag from "./components/category-tag/CategoryTag";
import "./reset.css";

const Wrap = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function App() {
  return (
    <Wrap>
      <CategoryTag contents="시설" />
      <CategoryTag contents="설비" />
      <CategoryTag contents="냉난방" />
    </Wrap>
  );
}

export default App;
