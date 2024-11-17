import styled from "@emotion/styled";
import { HeaderIcons } from "../../../styles/HeaderIconStyle";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useHeaderContext } from "../../../contexts/HeaderOpenContext";
import SideNavigator from "../../side-navigator/SideNavigator";

export const NotifyIconContainer = styled.div`
  display: inline-flex;
  position: relative;
`;
export const NotifyContainer = styled.div`
  position: absolute;
  top: 55px;
  right: -95%;
  @media screen and (max-width: 768px) {
    top: 50px;
    right: -90%;
  }
  @media screen and (max-width: 480px) {
    top: 45px;
    right: -85%;
  }
`;
const HeaderSideNav = () => {
  const { isDark, isOpen, handleOpen } = useHeaderContext();
  return (
    <NotifyIconContainer>
      <HeaderIcons
        $isDark={isDark}
        component={MenuRoundedIcon}
        onClick={() => handleOpen("isSideNavOpen")}
      />
      <NotifyContainer>
        {isOpen.isSideNavOpen && <SideNavigator />}
      </NotifyContainer>
    </NotifyIconContainer>
  );
};
export default HeaderSideNav;
