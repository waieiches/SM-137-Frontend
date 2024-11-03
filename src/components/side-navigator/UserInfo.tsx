import styled from "@emotion/styled";

const TempLogo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 500px;
  background-color: #797979;
`;
const Info = styled.div`
  width: 100%;
  height: 20%;
  max-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--gray1-background);
`;
const Name = styled.span``;

const UserInfo = () => {
  return (
    <Info>
      <TempLogo />
      <Name>user1234</Name>
    </Info>
  );
};

export default UserInfo;
