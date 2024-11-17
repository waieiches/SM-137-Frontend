import styled from "@emotion/styled";
import { useHeaderContext } from "../../../contexts/HeaderOpenContext";
import { HeaderIcons } from "../../../styles/HeaderIconStyle";
import ContentBubble from "../../content-bubble/ContentBubble";
import HeaderNavigator from "../../content-bubble/contents/HeaderNavigator";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
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
const HeaderMyPage = () => {
  const { isDark, isOpen, handleOpen, refs, handleClose } = useHeaderContext();
  useEffect(() => {
    console.log("호출2");
    const handleClickOutside = (e: MouseEvent) => {
      handleClose(e, refs.myPageRef, "isMyPageOpen");
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refs.myPageRef]);

  return (
    <NotifyIconContainer ref={refs.myPageRef}>
      <HeaderIcons
        $isDark={isDark}
        component={PermIdentityRoundedIcon}
        onClick={() => handleOpen("isMyPageOpen")}
      />
      <NotifyContainer>
        {isOpen.isMyPageOpen && (
          <ContentBubble content={<HeaderNavigator />} tailType="center" />
        )}
      </NotifyContainer>
    </NotifyIconContainer>
  );
};

export default HeaderMyPage;
