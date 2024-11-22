import styled from "@emotion/styled";
import { categoryName } from "../../utils/SubCategoryContent";

interface SubCategoryProps {
  category: keyof typeof categoryName;
}

const Background = styled.div`
  max-width: 490px;
  justify-content: center;
  padding: 1rem 0.75rem;
  background-color: var(--gray1-background);
  border-radius: 8px;
`;
const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SubCategoryButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: var(--white);
  color: var(--gray5-lowText);
  border-radius: 8px;
  &:focus {
    border: 2px solid var(--light-primary);
    color: var(--light-primary);
  }
`;

const SubCategory = ({ category }: SubCategoryProps) => {
  const subCategory = categoryName[category];
  return (
    <Background>
      <Container>
        {subCategory.map((item, index) => (
          <SubCategoryButton key={index}>{item}</SubCategoryButton>
        ))}
      </Container>
    </Background>
  );
};

export default SubCategory;
