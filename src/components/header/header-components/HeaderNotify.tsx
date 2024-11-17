import styled from "@emotion/styled";
import ContentBubble from "../../content-bubble/ContentBubble";
import Notification from "../../content-bubble/contents/Notification";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { useHeaderContext } from "../../../contexts/HeaderOpenContext";
import { HeaderIcons } from "../../../styles/HeaderIconStyle";
import { useEffect } from "react";

const NotifyIconContainer = styled.div`
  display: inline-flex;
  position: relative;
  background-color: #797979;
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

const HeaderNotify = () => {
  const { isOpen, isDark, handleOpen, refs, handleClose } = useHeaderContext();
  useEffect(() => {
    console.log("호출");
    const handleClickOutside = (e: MouseEvent) => {
      handleClose(e, refs.notifyRef, "isNotifyOpen");
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refs.notifyRef]);

  return (
    <NotifyIconContainer ref={refs.notifyRef}>
      <HeaderIcons
        $isDark={isDark}
        component={NotificationsNoneRoundedIcon}
        onClick={() => handleOpen("isNotifyOpen")}
      />
      <NotifyContainer>
        {isOpen.isNotifyOpen && <ContentBubble content={<Notification />} />}
      </NotifyContainer>
    </NotifyIconContainer>
  );
};

export default HeaderNotify;
