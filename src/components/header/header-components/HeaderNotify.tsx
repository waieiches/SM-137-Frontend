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
`;
const NotifyContainer = styled.div`
  position: absolute;
  top: 3.4rem;
  right: -1.4rem;
  @media screen and (max-width: 768px) {
    top: 3.3rem;
    right: -1.7rem;
  }
  @media screen and (max-width: 480px) {
    position: fixed;
    right: 0;
  }
`;

const HeaderNotify = () => {
  const { isOpen, isDark, handleOpen, refs, handleClose } = useHeaderContext();
  useEffect(() => {
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
        data-isdark={isDark}
        component={NotificationsNoneRoundedIcon}
        onClick={() => handleOpen("isNotifyOpen")}
      />
      <NotifyContainer>
        {isOpen.isNotifyOpen && (
          <ContentBubble content={<Notification />} tailType="edge" />
        )}
      </NotifyContainer>
    </NotifyIconContainer>
  );
};

export default HeaderNotify;
