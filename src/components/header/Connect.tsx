import { useRef, useState, useEffect, CSSProperties } from "react";
import Header from "./Header";
import SideNavigator from "../side-navigator/SideNavigator";
import ContentBubble from "../content-bubble/ContentBubble";

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

  const handleOpenSideNav = () => {
    setIsOpen((prev) => ({ ...prev, isSideNavOpen: !prev.isSideNavOpen }));
  };

  const handleOpenContentBubble = (isMenu: boolean) => {
    setIsOpen((prev) => ({
      ...prev,
      contentBubble: !prev.contentBubble,
      isMenu,
    }));
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
      {isOpen.contentBubble && <ContentBubble />}
    </div>
  );
};

export default Connect;
