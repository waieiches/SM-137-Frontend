import styled from "@emotion/styled";

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.7rem;
  background-color: var(--gray2-subbtn);
  color: var(--gray5-lowText);
  border-radius: 20px;
  min-width: 45px;
`;
const Contents = styled.p`
  /* line-height: 0; */
`;

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
