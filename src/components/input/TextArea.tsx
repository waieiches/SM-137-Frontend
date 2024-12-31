import styled from "@emotion/styled";

interface InfoTextAreaProps {
  height: string;
}

interface TextAreaProps extends InfoTextAreaProps {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  gap: 1.5rem;
`;

const LabelContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 0.4rem;
`;

const FieldLabel = styled.label`
  color: var(--gray4-placeholder-low);
  text-align: right;
`;

const RequiredMark = styled.span`
  color: var(--error);
  font-size: 14px;
  margin-right: 4px;
`;

const StyledTextArea = styled.textarea<InfoTextAreaProps>`
  width: 85%;
  height: ${(props) => props.height};
  padding: 5px 16px;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  font-size: 14px;
  resize: none;
`;

const TextArea = (props: TextAreaProps) => {
  const { label, placeholder, height, isRequired, onChange } = props;
  return (
    <TextAreaContainer>
      <LabelContainer>
        {isRequired && <RequiredMark>*</RequiredMark>}
        <FieldLabel>{label}</FieldLabel>
      </LabelContainer>

      <StyledTextArea
        placeholder={placeholder}
        height={height}
        required={isRequired}
        onChange={onChange}
      />
    </TextAreaContainer>
  );
};

TextArea.defaultProps = {
  label: "labelText",
  placeholder: "placeholder",
  width: "508px",
  height: "119px",
  isRequired: false
};

export default TextArea;
