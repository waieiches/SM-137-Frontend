import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import HeaderProvider from "../components/header/HeaderProvider";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OutletLayout = styled.div`
  width: 80%;
  /*삭제 예정, 가이드라인 */
  border: 1px solid #000;
`;
const ColoredLayout = styled.div<{ bgc: string }>`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgc};
`;

const Layout = () => {
  const path = useLocation().pathname;
  const backgroundColor = path === "/" ? "var(--primary)" : "none";
  return (
    <Wrap>
      <ColoredLayout bgc={backgroundColor}>
        <HeaderProvider />
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </ColoredLayout>
    </Wrap>
  );
};

export default Layout;
