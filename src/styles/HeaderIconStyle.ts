import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

interface HeaderIconsProps extends SvgIconProps {
  $isDark: boolean;
}

export const HeaderIcons = styled(SvgIcon)<HeaderIconsProps>`
  width: 35px;
  height: 35px;
  fill: ${(props) => (props.$isDark ? "var(--white)" : "var(--gray5-lowText)")};
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;
