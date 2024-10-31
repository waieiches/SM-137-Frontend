import styled from "@emotion/styled";
import Button from "./components/button/Button";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Logo from "./assets/logo.svg?react";

const Wrap = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--gray5-contents);
`;

const Title = styled.span`
  color: var(--primary);
`;

const StyledIcon = styled(SvgIcon)<SvgIconProps>`
  color: var(--primary);
  width: 50px;
  height: 50px;
`;

function App() {
  return (
    <Wrap>
      <h1>hi</h1>
      <Title>This is font</Title>
      <Button width="100px" />
      <StyledIcon component={CheckCircleRoundedIcon} />
      <Logo />
    </Wrap>
  );
}

export default App;
