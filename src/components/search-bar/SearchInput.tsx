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
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 1rem;

  &::placeholder {
    color: var(--gray4-placeholder-low);
  }
`;

interface SearchInputProps {
  placeholder?: string;
}

const SearchInput = ({
  placeholder = "디즈니 인턴십 학점 인정",
}: SearchInputProps) => {
  return (
    <InputWrapper>
      <FixedText>민원 검색</FixedText>
      <Input type="text" placeholder={placeholder} />
    </InputWrapper>
  );
};

export default SearchInput;
