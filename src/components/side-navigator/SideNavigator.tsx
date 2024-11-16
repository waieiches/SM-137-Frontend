import styled from "@emotion/styled";
import UserInfo from "./UserInfo";
import { forwardRef } from "react";

const SideNavContainer = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid var(--gray3-border);
  background-color: var(--white);

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
`;
const MenuSubTitle = styled.h2``;
const MenuContent = styled.div`
  color: var(--gray5-lowText);
  cursor: pointer;
  &:hover {
    color: var(--light-primary);
  }
`;

const SideNavigator = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <SideNavContainer ref={ref}>
      <UserInfo />
      <Menu>
        <MenuSubTitle>조회 / 신청</MenuSubTitle>
        <MenuContent>전체 민원 조회</MenuContent>
        <MenuContent>민원 신청</MenuContent>
      </Menu>
      <Menu>
        <MenuSubTitle>마이페이지</MenuSubTitle>
        <MenuContent>마이페이지</MenuContent>
        <MenuContent>내 민원</MenuContent>
        <MenuContent>결과 조회</MenuContent>
        <MenuContent>스크랩한 민원</MenuContent>
        <MenuContent>개인정보 수정</MenuContent>
      </Menu>
    </SideNavContainer>
  );
});

export default SideNavigator;
