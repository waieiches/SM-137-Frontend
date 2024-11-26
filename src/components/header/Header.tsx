import styled from "@emotion/styled";
import Logo from "../../assets/icons/logo/logo.svg?react";
import LogoLight from "../../assets/icons/logo/logo-light.svg?react";
import HeaderNotify from "./header-components/HeaderNotify";
import { useHeaderContext } from "../../contexts/HeaderOpenContext";
import HeaderMyPage from "./header-components/HeaderMyPage";
import HeaderSideNav from "./header-components/HeaderSideNav";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface BackgroundProps {
  $isDark: boolean;
}
export interface IsOpenProps {
  isSideNavOpen: boolean;
  isNotifyOpen: boolean;
  isMyPageOpen: boolean;
}

const Background = styled.div<BackgroundProps>`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  z-index: 200;
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

const Header = () => {
  const { isDark, handleDark } = useHeaderContext();
  const path = useLocation().pathname;

  useEffect(() => {
    if (path === "/") {
      handleDark();
    }
  }, []);
  return (
    <Background $isDark={isDark}>
      <HeaderContainer>
        {/*메뉴바 / 로고 */}
        <NavigatorSet>
          <HeaderSideNav />
          {isDark ? <LogoLight /> : <Logo />}
        </NavigatorSet>

        {/*알람 / 마이페이지 */}
        <NavigatorSet>
          <HeaderNotify />
          <HeaderMyPage />
        </NavigatorSet>
      </HeaderContainer>
    </Background>
  );
};

export default Header;
