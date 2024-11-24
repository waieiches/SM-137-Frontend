import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

interface QuickLinkItemProps {
  icon: React.ComponentType<SvgIconProps>;
  text: string;
}

const QuickLinkIconTextItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 279px;
  height: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex: 1;
  &:hover {
    background-color: var(--gray2-subbtn);
  }
`;

const QuickLinkIcon = styled(SvgIcon)<SvgIconProps>`
  color: var(--gray5-lowText);
  width: 25px;
  height: 25px;
`;

const QuickLinkText = styled.span`
  color: var(--gray5-lowText);
  display: inline-block;
  text-align: center;
`;

const QuickLinkItem = ({ icon: IconComponent, text }: QuickLinkItemProps) => (
  <QuickLinkIconTextItem>
    <QuickLinkIcon component={IconComponent} />
    <QuickLinkText>{text}</QuickLinkText>
  </QuickLinkIconTextItem>
);

export default QuickLinkItem;
