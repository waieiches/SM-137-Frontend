import styled from "@emotion/styled";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white);
  border-radius: 500px;
  padding: 0.5rem 1rem;
  width: 400px;
  height: 35px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchBar = () => {
  return (
    <BarContainer>
      <SearchInput />
      <SearchButton />
    </BarContainer>
  );
};

export default SearchBar;
