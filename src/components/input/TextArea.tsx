import styled from "@emotion/styled";

interface InfoTextAreaProps {
  width: string;
  height: string;
}

interface TextAreaProps extends InfoTextAreaProps {
  label: string;
  placeholder: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%; /* 부모 컨테이너 너비 고정 */
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const FieldLabel = styled.label`
  color: var(--gray5-lowText);
  font-size: 14px;
  text-align: right;
`;

const RequiredMark = styled.span`
  color: var(--error);
  font-size: 14px;
  margin-right: 4px;
`;

const StyledTextArea = styled.textarea<InfoTextAreaProps>`
  width: 100%; /* 부모 컨테이너에 맞춰 확장 */
  max-width: ${(props) => props.width}; /* 최대 너비 설정 */
  height: ${(props) => props.height};
  padding: 5px 16px;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  font-size: 14px;
  resize: none;
`;

const TextArea = (props: TextAreaProps) => {
  const { label, placeholder, width, height, required, onChange } = props;
  return (
    <TextAreaContainer>
      <LabelContainer>
        {required && <RequiredMark>*</RequiredMark>}
        <FieldLabel>{label}</FieldLabel>
      </LabelContainer>
      <StyledTextArea
        placeholder={placeholder}
        width={width}
        height={height}
        onChange={onChange}
      />
    </TextAreaContainer>
  );
};

TextArea.defaultProps = {
  required: false,
  label: "labelText",
  placeholder: "placeholder",
  width: "508px",
  height: "119px",
};

export default TextArea;
