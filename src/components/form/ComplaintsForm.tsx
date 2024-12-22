import React, { useState } from "react";
import styled from "@emotion/styled";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border: 1px solid var(--gray3-border);
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  color: var(--primary);
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: var(--error);
  text-align: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%; /* 부모 컨테이너 너비 고정 */
`;

const FileInputContainer = styled.div`
  display: flex; /* Flexbox로 가로 정렬 */
  flex-direction: row; /* 가로 방향 배치 */
  align-items: center; /* 수직 가운데 정렬 */
  gap: 1rem; /* 요소 사이의 간격 */
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

const ComplaintsForm = () => {
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    improvements: string;
    effect: string;
    file: File | null;
  }>({
    title: "",
    description: "",
    improvements: "",
    effect: "",
    file: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData((prev) => ({
        ...prev,
        file: files[0], // 첫 번째 파일을 상태로 저장
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>민원의 세부내용을 작성해 주세요</Title>
      <SubTitle>* 표시는 필수항목입니다</SubTitle>

      <InputGroup>
        <Input
          label="제목"
          placeholder="내용을 입력해주세요"
          type="text"
          isRequired={true}
          width="508px"
          height="40px"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <TextArea
          label="현황 및 문제점"
          placeholder="내용을 입력해주세요"
          required={true}
          width="508px"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <TextArea
          label="개선 방향"
          placeholder="내용을 입력해주세요"
          required={true}
          width="508px"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <TextArea
          label="기대효과"
          placeholder="내용을 입력해주세요"
          width="508px"
          onChange={handleChange}
        />
      </InputGroup>

      {/* 첨부파일 */}
      <FileInputContainer>
        <FileInputLabel htmlFor="file">첨부파일</FileInputLabel>
        <FileInput type="file" id="file" onChange={handleFileChange} />
        {formData.file && <FileName>선택된 파일: {formData.file.name}</FileName>}
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
