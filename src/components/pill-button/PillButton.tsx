import styled from "@emotion/styled";
import { useState } from "react";

interface PillButtonProps {
  contents: string;
}
interface ContainerProps {
  isClick: boolean;
}
const Container = styled.button<ContainerProps>`
  display: inline-flex;
  padding: 0 1rem;
  background-color: var(--white);
  border-radius: 3rem;
  border: ${(props) => props.isClick && "2px solid var(--light-primary)"};
  color: ${(props) =>
    props.isClick ? "var(--light-primary)" : "var(--gray5-lowText)"};
  &:hover {
    color: ${(props) => !props.isClick && "var(--gray5-header)"};
  }
  @media (max-width: 768px) {
    padding: 0 0.8rem;
    font-size: 0.875rem;
  }
  @media (max-width: 480px) {
    padding: 0 0.5rem;
    font-size: 0.75rem;
  }
`;
const Contents = styled.div``;

const PillButton = ({ contents = "예시" }: PillButtonProps) => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick((prev) => !prev);
  };
  return (
    <Container isClick={isClick} onClick={handleClick}>
      <Contents>{contents}</Contents>
    </Container>
  );
};

export default PillButton;
