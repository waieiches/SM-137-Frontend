import styled from "@emotion/styled";
import Logo from "../../assets/icons/logo/logo.svg?react";
import LogoLight from "../../assets/icons/logo/logo-light.svg?react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import { useState } from "react";

interface HeaderProps {
  onSideNavOpen: () => void;
  onNotificationOpen: () => void;
  onMenuOpen: () => void;
  notificationIconRef: React.RefObject<SVGSVGElement>;
  menuIconRef: React.RefObject<SVGSVGElement>;
}

const Background = styled.div<BackgroundProps>`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  //라우팅 구현 후 삭제 예정
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.$isDark ? "var(--primary)" : "var(--white)"};
`;
const HeaderContainer = styled.div`
  width: 90%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavigatorSet = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
`;
const HeaderIcons = styled(SvgIcon)<HeaderIconsProps>`
  width: 35px;
  height: 35px;
  color: ${(props) =>
    props.$isDark ? "var(--white)" : "var(--gray5-lowText)"};
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;

interface HeaderIconsProps extends SvgIconProps {
  $isDark: boolean;
}
interface BackgroundProps {
  $isDark: boolean;
}

//헤더의 색상변경 기능을 위한 임시 버튼
const TempButton = styled.button`
  width: 150px;
  height: 100px;
  background-color: var(--error-light);
  color: var(--white);
  border: none;
`;

const Header = ({
  onSideNavOpen,
  onNotificationOpen,
  onMenuOpen,
  notificationIconRef,
  menuIconRef,
}: HeaderProps) => {
  const [isDark, setIsDark] = useState(false);
  //라우터 연결 뒤, useLocation으로 위치를 파악하여 헤더 색상 변경 예정
  const handleTempDark = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Background $isDark={isDark}>
      <HeaderContainer>
        {/*메뉴바 / 로고 */}
        <NavigatorSet>
          <HeaderIcons
            $isDark={isDark}
            component={MenuRoundedIcon}
            onClick={onSideNavOpen}
          />
          {isDark ? <LogoLight /> : <Logo />}
        </NavigatorSet>
        {/*알람 / 마이페이지 */}
        <NavigatorSet>
          <HeaderIcons
            $isDark={isDark}
            component={NotificationsNoneRoundedIcon}
            onClick={onNotificationOpen}
            ref={notificationIconRef}
          />
          <HeaderIcons
            $isDark={isDark}
            component={PermIdentityRoundedIcon}
            onClick={onMenuOpen}
            ref={menuIconRef}
          />
        </NavigatorSet>
      </HeaderContainer>
      {/*라우터 구현 후 삭제 예정*/}
      <TempButton onClick={handleTempDark}>헤더 색상 변경</TempButton>
    </Background>
  );
};

export default Header;
