import styled from "@emotion/styled";
import { HeaderIcons } from "../../../styles/HeaderIconStyle";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useHeaderContext } from "../../../contexts/HeaderOpenContext";
import SideNavigator from "../../side-navigator/SideNavigator";
import { useEffect } from "react";

const NotifyIconContainer = styled.div`
  display: inline-flex;
  position: relative;
`;
const NotifyContainer = styled.div`
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
  const { isDark, isOpen, handleOpen, refs, handleClose } = useHeaderContext();
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      handleClose(e, refs.sideNavRef, "isSideNavOpen");
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refs.sideNavRef]);

  return (
    <NotifyIconContainer ref={refs.sideNavRef}>
      <HeaderIcons
        data-isdark={isDark}
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
