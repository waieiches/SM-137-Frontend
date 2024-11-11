import styled from "@emotion/styled";

const Container = styled.div`
  padding: 0.7rem 0.2rem;
  background-color: var(--gray2-subbtn);
  display: inline-flex;
`;
const Contents = styled.div``;

interface CategoryTag {
  contents: string;
}
const CategoryTag = ({ contents = "내용" }: CategoryTag) => {
  return (
    <Container>
      <Contents>{contents}</Contents>
    </Container>
  );
};

export default CategoryTag;
