import "./reset.css";
import Button from "./components/button/Button";
import styled from "@emotion/styled";

const Wrap = styled.div`
  display: flex;
  gap: 1rem;
`;

function App() {
  return (
    <Wrap>
      <Button type="_120x40_Primary" content="버튼 내용" />
      <Button type="_100x123_Primary" content="내용" />
      <Button type="_120x40_Gray2" content="내용" />
      <Button type="_100x35_Gray2" content="내용" />
    </Wrap>
  );
}

export default App;
