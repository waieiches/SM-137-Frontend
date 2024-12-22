import React, { useState } from "react";
import styled from "@emotion/styled";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";

const FormContainer = styled.form`
  min-width: 80%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem;
  border: 1px solid var(--gray3-border);
  border-radius: 8px;
  background-color: #fff;
`;

/*Title + info 메세지 */
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  color: var(--gray6-header);
  text-align: center;
`;

const Info = styled.p`
  font-size: 14px;
  color: var(--error);
  text-align: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const FileInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const FileInputLabel = styled.label`
  font-size: 14px;
  color: var(--gray5-lowText);
`;

const FileInput = styled.input`
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  padding: 5px 8px;
`;

const FileName = styled.span`
  font-size: 14px;
  color: var(--gray5-lowText);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
interface FormProps {
  title: string;
  description: string;
  improvements: string;
  effect: string;
  file: File | null;
}

const ComplaintsForm = () => {
  const [formData, setFormData] = useState<FormProps>({
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData((prev) => ({
        ...prev,
        file: files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //폼 submit 용 콘솔, 삭제 예정
    console.log("Form Submitted", formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TitleContainer>
        <Title>민원의 세부내용을 작성해 주세요</Title>
        <Info>* 표시는 필수항목입니다</Info>
      </TitleContainer>

      <InputGroup>
        <Input
          label="제목"
          placeholder="내용을 입력해주세요"
          type="text"
          isRequired={true}
          height="40px"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <TextArea
          label="현황 및 문제점"
          placeholder="내용을 입력해주세요"
          required={true}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <TextArea
          label="개선 방향"
          placeholder="내용을 입력해주세요"
          required={true}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <TextArea
          label="기대효과"
          placeholder="내용을 입력해주세요"
          onChange={handleChange}
        />
      </InputGroup>

      {/* 첨부파일 */}
      <FileInputContainer>
        <FileInputLabel htmlFor="file">첨부파일</FileInputLabel>
        <FileInput type="file" id="file" onChange={handleFileChange} />
        {formData.file && (
          <FileName>선택된 파일: {formData.file.name}</FileName>
        )}
      </FileInputContainer>

      {/* 버튼 */}
      <ButtonGroup>
        <Button content="취소" type="_120x40_Gray2" />
        <Button content="다음" type="_120x40_Primary" />
      </ButtonGroup>
    </FormContainer>
  );
};

export default ComplaintsForm;
