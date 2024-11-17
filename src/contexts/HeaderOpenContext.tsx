import { createContext, ReactNode, useContext, useState } from "react";

interface IsOpenProps {
  isSideNavOpen: boolean;
  isNotifyOpen: boolean;
  isMyPageOpen: boolean;
}
interface HeaderOpenProviderProps {
  children: ReactNode;
}
interface HeaderOpenContextProps {
  isOpen: IsOpenProps;
  isDark: boolean;
  handleOpen: (menu: keyof IsOpenProps) => void;
  handleDark: () => void;
}
const defaultProps = {
  isOpen: {
    isSideNavOpen: false,
    isNotifyOpen: false,
    isMyPageOpen: false,
  },
  isDark: false,
  handleOpen: () => {},
  handleDark: () => {},
};

const HeaderOpenContext = createContext<HeaderOpenContextProps>(defaultProps);

const HeaderOpenProvider = ({ children }: HeaderOpenProviderProps) => {
  const [isDark, setIsDark] = useState(false);
  const handleDark = () => {
    setIsDark((prev) => !prev);
  };
  const [isOpen, setIsOpen] = useState<IsOpenProps>({
    isSideNavOpen: false,
    isNotifyOpen: false,
    isMyPageOpen: false,
  });
  const handleOpen = (menu: keyof typeof isOpen) => {
    setIsOpen((prev) => {
      for (let key in prev) {
        prev[key as keyof IsOpenProps] = false;
      }
      return prev;
    });
    setIsOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  return (
    <HeaderOpenContext.Provider
      value={{ isOpen, isDark, handleOpen, handleDark }}
    >
      {children}
    </HeaderOpenContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderOpenContext);
export default HeaderOpenProvider;
