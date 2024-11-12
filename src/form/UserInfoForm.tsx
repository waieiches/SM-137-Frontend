import styled from "@emotion/styled";

const InfoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const InfoFormRow = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const InfoLabel = styled.div`
  color: var(--gray5-lowText);
  min-width: 60px;
  text-align: right;
  display: inline;
`;

const InfoInput = styled.input`
  width: 180px;
  height: 35px;
  padding: 5px 16px;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  font-size: 14px;

  &:valid,
  &:invalid {
    border-color: var(--gray3-border);
    box-shadow: none;
  }
`;

const UserInfoForm = () => {
  return (
    <InfoForm>
      <InfoFormRow>
        <InfoLabel>학번</InfoLabel>
        <InfoInput type="text" placeholder="2012345" />
      </InfoFormRow>
      <InfoFormRow>
        <InfoLabel>학과/학부</InfoLabel>
        <InfoInput type="text" placeholder="컴퓨터과학전공" />
      </InfoFormRow>
    </InfoForm>
  );
};

export default UserInfoForm;
