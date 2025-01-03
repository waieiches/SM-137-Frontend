import styled from "@emotion/styled";
import { useHeaderContext } from "../../../contexts/HeaderOpenContext";
import { HeaderIcons } from "../../../styles/HeaderIconStyle";
import ContentBubble from "../../content-bubble/ContentBubble";
import HeaderNavigator from "../../content-bubble/contents/HeaderNavigator";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import { useEffect } from "react";

const NotifyIconContainer = styled.div`
  display: flex;
  position: relative;
  border-radius: 100px;
  padding: 0.1rem;
  transition: 0.1s ease;
  &:hover {
    background-color: var(--disabled-primary);
  }
`;
const NotifyContainer = styled.div`
  position: absolute;
  top: 3.4rem;
  right: -2.6rem;
  @media screen and (max-width: 768px) {
    top: 3.3rem;
    right: -2.5rem;
  }
  @media screen and (max-width: 480px) {
    position: fixed;
    right: 0;
  }
`;

const HeaderMyPage = () => {
  const { isDark, isOpen, handleOpen, refs, handleClose } = useHeaderContext();
  useEffect(() => {
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
        data-isdark={isDark}
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
