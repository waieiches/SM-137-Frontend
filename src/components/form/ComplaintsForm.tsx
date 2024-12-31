import React, { useState } from "react";
import styled from "@emotion/styled";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import FileUploadField from "../file-upload/FileUploadField";
import Button from "../button/Button"; 

const FormContainer = styled.form`
  min-width: 80%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem;
  border-radius: 8px;
`;

const FormTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.span`
  color: var(--gray6-header);
  text-align: center;
`;

const FormInfo = styled.p`
  font-size: 14px;
  color: var(--error);
  text-align: center;
`;

const FormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  gap: 1rem;
`;

interface FormDataProps {
  title: string;
  description: string;
  improvements: string;
  effect: string;
  file: File | null;
}

const ComplaintsForm = ({ onBack, onNext }: { onBack: () => void; onNext: () => void }) => {
  const [formData, setFormData] = useState<FormDataProps>({
    title: "",
    description: "",
    improvements: "",
    effect: "",
    file: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitleContainer>
        <FormTitle>민원의 세부내용을 작성해 주세요</FormTitle>
        <FormInfo>* 표시는 필수항목입니다</FormInfo>
      </FormTitleContainer>

      <FormInputGroup>
        <Input
          label="제목"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          height="40px"
          onChange={handleChange}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="현황 및 문제점"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          onChange={handleChange}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="개선 방향"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          onChange={handleChange}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="기대효과"
          placeholder="내용을 입력해주세요"
          onChange={handleChange}
        />
      </FormInputGroup>

      <FileUploadField onFileChange={handleFileChange} />

      <ButtonGroup>
        <Button content="이전" type="_120x40_Gray2" onClick={onBack} />
        <Button content="다음" type="_120x40_Primary" onClick={onNext} />
      </ButtonGroup>
    </FormContainer>
  );
};

export default ComplaintsForm;
