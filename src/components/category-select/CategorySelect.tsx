import styled from "@emotion/styled";
import SubCategory from "./SubCategory";
import { useState } from "react";
import { categoryName } from "../../utils/CategoryName";

interface CategoryProps {
  isClick: boolean;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const CategoryContainer = styled.div`
  border: 1px solid var(--light-primary);
  border-radius: 4px;
  width: 100%;
  max-width: 480px;
  display: flex;
`;
const Category = styled.button<CategoryProps>`
  width: 25%;
  height: 40px;
  color: var(--light-primary);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${(props) => !props.isClick && "var(--primary)"};
  }
  background-color: ${(props) => props.isClick && "var(--light-primary)"};
  color: ${(props) => props.isClick && "var(--white)"};
  border-radius: ${(props) => props.isClick && "4px"};
`;

const CategorySelect = () => {
  const [category, setCategory] =
    useState<keyof typeof categoryName>("facility");
  const [isClick, setIsClick] = useState({
    facility: true,
    degree: false,
    career: false,
    school: false,
  });
  const handleCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.getAttribute("data-category")!;
    if (value) {
      setCategory(value as keyof typeof categoryName);
      setIsClick((prev) => {
        for (let key in prev) {
          prev[key as keyof typeof categoryName] = false;
        }
        const newPrev = { ...prev };
        newPrev[value as keyof typeof categoryName] = true;
        return newPrev;
      });
    }
  };
  return (
    <Wrap>
      <CategoryContainer>
        <Category
          data-category="facility"
          onClick={handleCategory}
          isClick={isClick.facility}
        >
          시설 / 설비
        </Category>
        <Category
          data-category="degree"
          onClick={handleCategory}
          isClick={isClick.degree}
        >
          대학원
        </Category>
        <Category
          data-category="career"
          onClick={handleCategory}
          isClick={isClick.career}
        >
          진로 / 취업
        </Category>
        <Category
          data-category="school"
          onClick={handleCategory}
          isClick={isClick.school}
        >
          학교 생활
        </Category>
      </CategoryContainer>
      <SubCategory category={category} />
    </Wrap>
  );
};

export default CategorySelect;
