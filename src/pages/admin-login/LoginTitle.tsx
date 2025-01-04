import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const UniversityText = styled.div`
  font-weight: 600;
  color: var(--light-primary);
  font-size: 5rem;
  line-height: 1.2;
`;

const SubTextContainer = styled.div`
  display: flex;
  align-items: baseline; 
  gap: 0.5rem;
`;

const SystemText = styled.div`
  font-weight: 600;
  color: var(--disabled-primary);
  font-size: 5rem;
  line-height: 1.2;
`;

const AdminText = styled.div`
  font-weight: 600;
  color: var(--disabled-primary);
  font-size: 3rem;
  line-height: 1.2;
`;

const LoginTitle = () => {
  return (
    <HeaderContainer>
      <UniversityText>숙명여자대학교</UniversityText>
      <SubTextContainer>
        <SystemText>민원 시스템</SystemText>
        <AdminText>관리자용</AdminText>
      </SubTextContainer>
    </HeaderContainer>
  );
};

export default LoginTitle;
