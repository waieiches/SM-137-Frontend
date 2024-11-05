import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

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

const ProgressBarIcon = styled(SvgIcon)<SvgIconProps>`
  color: white;
`;

const ProgressBarText = styled.div`
  display: inline-block;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const ProgressBarIconText = styled.div`
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

  // Dynamically set icon size based on screen width
  const [iconSize, setIconSize] = useState(20);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth <= 480) {
        setIconSize(14);
      } else if (window.innerWidth <= 768) {
        setIconSize(16);
      } else {
        setIconSize(20);
      }
    };

    updateIconSize();
    window.addEventListener("resize", updateIconSize);
    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  return (
    <ProgressBarIconText>
      <ProgressCircleIcon style={{ backgroundColor: circleBackgroundColor }}>
        <ProgressBarIcon
          component={IconComponent}
          style={{ width: iconSize, height: iconSize }}
        />
      </ProgressCircleIcon>
      <ProgressBarText style={{ color: textColor }}>{text}</ProgressBarText>
    </ProgressBarIconText>
  );
};

export default IconWithText;
