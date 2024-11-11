import styled from "@emotion/styled";
import CategoryTag from "./components/category-tag/CategoryTag";
import "./reset.css";
import CategoryTagGroup from "./components/category-tag/CategoryTagGroup";

const Wrap = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function App() {
  const mockTagArray = ["시설", "설비", "냉난방"];
  return (
    <Wrap>
      <CategoryTag contents="예시" />
      <CategoryTagGroup tagArray={mockTagArray} />
    </Wrap>
  );
}

export default App;
