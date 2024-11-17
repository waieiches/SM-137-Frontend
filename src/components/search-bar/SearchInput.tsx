import styled from "@emotion/styled";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const FixedText = styled.div`
  font-size: 1rem;
  color: var(--gray6-header);
  font-weight: 500;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
`;

const SearchInput = () => {
  return (
    <InputWrapper>
      <FixedText>민원 검색</FixedText>
      <Input type="text" />
    </InputWrapper>
  );
};

export default SearchInput;
