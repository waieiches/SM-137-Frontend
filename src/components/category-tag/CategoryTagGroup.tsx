import styled from "@emotion/styled";
import CategoryTag from "./CategoryTag";

interface CategoryTagGroupProps {
  tagArray: string[];
}
const GroupContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const CategoryTagGroup = ({ tagArray }: CategoryTagGroupProps) => {
  return (
    <GroupContainer>
      {tagArray.map((tagItem, index) => (
        <CategoryTag key={index} contents={tagItem} />
      ))}
    </GroupContainer>
  );
};

export default CategoryTagGroup;
