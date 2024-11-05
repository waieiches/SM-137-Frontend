import styled from "@emotion/styled";
import SchoolLogo from "../../assets/symbol_Color.png";

const Logo = styled.img`
  width: 70px;
  border-radius: 500px;
`;
const Info = styled.div`
  width: 100%;
  height: 20%;
  min-height: 140px;
  max-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background-color: var(--gray1-background);
`;
const Name = styled.span``;

const UserInfo = () => {
  return (
    <Info>
      <Logo src={SchoolLogo} />
      <Name>user1234</Name>
    </Info>
  );
};

export default UserInfo;
