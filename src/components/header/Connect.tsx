import { useRef, useState, useEffect, CSSProperties } from "react";
import Header from "./Header";
import SideNavigator from "../side-navigator/SideNavigator";
import ContentBubble from "../content-bubble/ContentBubble";
import InfoMessage from "../info-message/InfoMessage";
import { getColor } from "../../utils/InfoMessageUtils"; 

const Connect = () => {
  const [isOpen, setIsOpen] = useState({
    isSideNavOpen: false,
    contentBubble: false,
    isMenu: false,
  });

  const sideNavRef = useRef<HTMLDivElement>(null);
  const notificationIconRef = useRef<SVGSVGElement>(null);
  const menuIconRef = useRef<SVGSVGElement>(null);
  const contentBubbleRef = useRef<HTMLDivElement>(null);

  // 알림 내용을 위한 임시 알림 데이터
  const notifications = [
    {
      sizeType: "small",
      messageType: "info",
      content: "[저녁 수업 냉난방 가동 요청] 민원에 답변이 달렸습니다.",
    },
    {
      sizeType: "small",
      messageType: "message",
      content: "[저녁 수업 냉난방 가동 요청] 민원에 댓글이 달렸습니다.",
    },
  ];

  // 메뉴 항목
  const menuItems = [
    "마이페이지",
    "내 민원",
    "결과 조회",
    "스크랩한 민원",
    "개인정보 수정",
  ];
// infoMessage와 동일한 스타일 적용
const menuItemStyle: CSSProperties = {
  fontSize: "1rem",
  color: getColor("message"),
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
};
  const handleOpenSideNav = () => {
    setIsOpen((prev) => ({ ...prev, isSideNavOpen: !prev.isSideNavOpen }));
  };

  const handleOpenContentBubble = (isMenu: boolean) => {
    setIsOpen((prev) => ({ ...prev, contentBubble: !prev.contentBubble, isMenu }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        isOpen.isSideNavOpen &&
        sideNavRef.current &&
        !sideNavRef.current.contains(target) &&
        !notificationIconRef.current?.contains(target)
      ) {
        setIsOpen((prev) => ({ ...prev, isSideNavOpen: false }));
      }

      if (
        isOpen.contentBubble &&
        contentBubbleRef.current &&
        !contentBubbleRef.current.contains(target) &&
        !notificationIconRef.current?.contains(target)
      ) {
        setIsOpen((prev) => ({ ...prev, contentBubble: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <Header
        onSideNavOpen={handleOpenSideNav}
        onNotificationOpen={() => handleOpenContentBubble(false)}
        onMenuOpen={() => handleOpenContentBubble(true)}
        notificationIconRef={notificationIconRef}
        menuIconRef={menuIconRef}
      />
      {isOpen.isSideNavOpen && <SideNavigator ref={sideNavRef} />}
      {isOpen.contentBubble && (
        <ContentBubble
          ref={contentBubbleRef}
          tailType={isOpen.isMenu ? "middle" : "edge"} //메뉴는 가운데, 알림은 가장자리쪽
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem", // 추가적인 padding을 주어 중앙 정렬 보장
          }}
        >
          <div>
            {isOpen.isMenu
              ? menuItems.map((item, index) => (
                  <div key={index} style={menuItemStyle}>
                    {item}
                  </div>
                ))
              : notifications.map((notification, index) => (
                  <InfoMessage
                    key={index}
                    sizeType={notification.sizeType}
                    messageType={notification.messageType}
                    content={notification.content}
                  />
                ))}
          </div>
        </ContentBubble>
      )}
    </div>
  );
};

export default Connect;
