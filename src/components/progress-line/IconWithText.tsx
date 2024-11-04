// IconWithText.tsx
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styled from "@emotion/styled";

interface IconWithTextProps {
  icon: typeof SvgIcon;
  text: string;
  isActive?: boolean;
}

const ProgressCircleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 1;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

const ProgressLineIcon = styled(SvgIcon)<SvgIconProps>`
  color: white;
`;

const ProgressLineText = styled.div`
  display: inline-block;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const ProgressLineIconText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  position: relative;

  @media (max-width: 768px) {
    gap: 0.15rem;
  }

  @media (max-width: 480px) {
    gap: 0.1rem;
  }
`;

const IconWithText = ({
  icon: IconComponent,
  text,
  isActive = false,
}: IconWithTextProps) => {
  const circleBackgroundColor = isActive
    ? "var(--light-primary)"
    : "var(--gray4-placeholder-low)";
  const textColor = isActive ? "var(--light-primary)" : "var(--gray5-lowText)";
  const iconSize = IconComponent === SendRoundedIcon ? 16 : 20;

  return (
    <ProgressLineIconText>
      <ProgressCircleIcon style={{ backgroundColor: circleBackgroundColor }}>
        <ProgressLineIcon
          component={IconComponent}
          style={{ width: iconSize, height: iconSize }}
        />
      </ProgressCircleIcon>
      <ProgressLineText style={{ color: textColor }}>{text}</ProgressLineText>
    </ProgressLineIconText>
  );
};

export default IconWithText;
