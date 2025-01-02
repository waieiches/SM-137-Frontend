import styled from "@emotion/styled";
import StatusButtonGroup from "../../components/status-button/StatusButtonGroup";
import React from "react";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 4.5rem;
  background-color: var(--gray1-background);
  border-radius: 50rem;
  padding: 1rem 2rem;
  margin: 1rem auto 1.5rem;
  transform: translateY(-5rem);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PublicPrivateButton = styled.button<{ isSelected: boolean }>`
  padding: 0.8rem 2rem;
  border: 2px solid
    ${(props) => (props.isSelected ? "var(--primary)" : "var(--gray3-border)")};
  background-color: ${(props) =>
    props.isSelected ? "var(--white)" : "var(--gray1-background)"};
  color: ${(props) =>
    props.isSelected ? "var(--primary)" : "var(--gray5-text)"};
  border-radius: 20px;

  &:hover {
    border: 2px solid var(--primary);
  }
`;

interface FilterBarProps {
  isPublic: boolean;
  setIsPublic: (isPublic: boolean) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ isPublic, setIsPublic }) => {
  return (
    <FilterContainer>
      <ButtonGroup>
        <PublicPrivateButton
          isSelected={isPublic}
          onClick={() => setIsPublic(true)}
        >
          공개 민원
        </PublicPrivateButton>
        <PublicPrivateButton
          isSelected={!isPublic}
          onClick={() => setIsPublic(false)}
        >
          개인 민원
        </PublicPrivateButton>
      </ButtonGroup>
      <StatusButtonGroup />
    </FilterContainer>
  );
};

export default FilterBar;
