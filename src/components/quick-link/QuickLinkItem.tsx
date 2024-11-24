import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

interface QuickLinkItemProps {
  icon: React.ComponentType<SvgIconProps>;
  text: string;
}

const QuickLinkIconTextItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 4.5rem;
  gap: 1rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  flex: 1;
  width: 25%;
  @media screen and (max-width: 768px) {
    padding: 1rem 3rem;
    width: 100%;
  }
  @media screen and (max-width: 400px) {
  }
`;

const QuickLinkIcon = styled(SvgIcon)<SvgIconProps>`
  color: var(--gray5-lowText);
  width: 25px;
  height: 25px;
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const QuickLinkText = styled.span`
  color: var(--gray5-lowText);
  display: inline-block;
  text-align: center;
  line-height: 0;
  white-space: nowrap;
`;

const QuickLinkItem = ({ icon: IconComponent, text }: QuickLinkItemProps) => (
  <QuickLinkIconTextItem>
    <QuickLinkIcon component={IconComponent} />
    <QuickLinkText>{text}</QuickLinkText>
  </QuickLinkIconTextItem>
);

export default QuickLinkItem;
