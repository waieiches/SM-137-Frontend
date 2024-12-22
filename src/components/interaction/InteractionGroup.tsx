import styled from "@emotion/styled";
import Interaction from "./Interaction";

interface InteractionGroupProps {
  likes: number;      // props 추가
  bookmarks: number;  // props 추가
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const InteractionGroup = ({ likes, bookmarks }: InteractionGroupProps) => {
  return (
    <Container>
      <Interaction type="thumbUp" count={likes} />
      <Interaction type="scrap" count={bookmarks} />
    </Container>
  );
};

export default InteractionGroup;
