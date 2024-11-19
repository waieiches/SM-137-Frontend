import { useState, useRef } from "react";
import styled from "@emotion/styled";
import Header from "../components/header/Header";
import SideNavigator from "../components/side-navigator/SideNavigator";

const AppContainer = styled.div`
  display: flex;
  position: relative;
`;

const SideNavWrapper = styled.div<{ isFullScreen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.isFullScreen ? "100%" : "200px")};
  background-color: white;
  z-index: 1000;
  transition: width 0.3s;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  color: black;
  @media (min-width: 480px) {
    display: none;
  }
`;

const SideNavConnect = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const isMobileScreen = window.innerWidth <= 480;

  // notificationIconRef를 useRef로 생성
  const notificationIconRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppContainer>
      <Header
        onMenuClick={() => setIsSideNavOpen(true)}
        onNotificationClick={() => console.log("Notification clicked")}
        notificationIconRef={notificationIconRef} // 유효한 ref 전달
      />

      {isSideNavOpen && (
        <SideNavWrapper isFullScreen={isMobileScreen}>
          <CloseButton onClick={() => setIsSideNavOpen(false)}>×</CloseButton>
          <SideNavigator />
        </SideNavWrapper>
      )}
    </AppContainer>
  );
};

export default SideNavConnect;