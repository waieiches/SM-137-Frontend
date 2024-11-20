import styled from "@emotion/styled";
import Interaction from "./Interaction";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const InteractionGroup = () => {
  return (
    <Container>
      <Interaction type="thumbUp" />
      <Interaction type="scrap" />
    </Container>
  );
};

export default InteractionGroup;
