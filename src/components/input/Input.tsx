import styled from "@emotion/styled";

interface InfoInputProps {
  width: string;
  height: string;
}
interface InputProps extends InfoInputProps {
  label: string;
  placeholder: string;
  type: string;
}
const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: start;
  gap: 0.5rem;
  width: 100%;
`;
const InfoLabel = styled.body`
  color: var(--gray5-lowText);
  min-width: 60px;
  text-align: right;
  display: inline;
`;
const InfoInput = styled.input<InfoInputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 5px 16px;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  font-size: 14px;
  &:valid,
  &:invalid {
    border-color: var(--gray3-border);
    box-shadow: none;
  }
  &:focus {
    border-color: #000;
  }
`;

const Input = (inputProps: InputProps) => {
  const { label, placeholder, type, width, height } = inputProps;
  return (
    <Container>
      <InfoLabel>{label}</InfoLabel>
      <InfoInput
        type={type}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </Container>
  );
};
Input.defaultProps = {
  label: "labelText",
  placeholder: "placeholder",
  type: "text",
  width: "180px",
  height: "35px",
};
export default Input;
