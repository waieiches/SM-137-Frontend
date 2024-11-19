import HeaderOpenProvider from "../../contexts/HeaderOpenContext";
import Header from "./Header";

const HeaderProvider = () => {
  return (
    <HeaderOpenProvider>
      <Header />
    </HeaderOpenProvider>
  );
};

export default HeaderProvider;
