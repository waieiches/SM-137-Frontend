import styled from "@emotion/styled";
import { categoryName } from "../../utils/CategoryName";

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
//button 컴포넌트로 대체 예정
const ButtonTemp = styled.button`
  width: 150px;
  height: 45px;
  background-color: var(--white);
  color: var(--gray5-lowText);
  border-radius: 4px;
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
          <ButtonTemp key={index}>{item}</ButtonTemp>
        ))}
      </Container>
    </Background>
  );
};

export default SubCategory;
