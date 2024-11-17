import { useHeaderContext } from "../../../contexts/HeaderOpenContext";
import { HeaderIcons } from "../../../styles/HeaderIconStyle";
import ContentBubble from "../../content-bubble/ContentBubble";
import HeaderNavigator from "../../content-bubble/contents/HeaderNavigator";
import { NotifyContainer, NotifyIconContainer } from "./HeaderNotify";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";

const HeaderMyPage = () => {
  const { isDark, isOpen, handleOpen } = useHeaderContext();
  return (
    <NotifyIconContainer>
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
