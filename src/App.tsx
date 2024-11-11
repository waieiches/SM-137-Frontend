import styled from "@emotion/styled";
import CategoryTag from "./components/category-tag/CategoryTag";
import "./reset.css";
import CategoryTagGroup from "./components/category-tag/CategoryTagGroup";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function App() {
  const mockTagArray = ["시설", "설비", "냉난방"];
  return (
    <Wrap>
      <CategoryTag contents="시설" />
      <CategoryTagGroup tagArray={mockTagArray} />
    </Wrap>
  );
}

export default App;
