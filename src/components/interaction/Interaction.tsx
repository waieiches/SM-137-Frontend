import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import { useState } from "react";
import { motion } from "framer-motion";

interface InteractionProps {
  type: string;
}
const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const IconWrapper = styled(motion.div)`
  display: inline-block;
  width: 22px;
  height: 22px;
`;
const UnClickIcon = styled(SvgIcon)<SvgIconProps>`
  width: 22px;
  height: 22px;
  fill: var(--gray5-lowText);
  cursor: pointer;
  &:hover {
    fill: var(--gray6-header);
  }
`;
const ClickIcon = styled(SvgIcon)<SvgIconProps>`
  width: 22px;
  height: 22px;
  fill: ${(props) => props.fill};
  cursor: pointer;
`;
const Value = styled.pre`
  color: var(--gray5-lowText);
`;

const clickVariants = {
  start: { scale: 0.8 },
  clicking: {
    scale: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

const getIcon = (type: string) => {
  if (type === "thumbUp") {
    return ThumbUpAltOutlinedIcon;
  }
  if (type === "scrap") {
    return BookmarkBorderRoundedIcon;
  }
};
const getClickIcon = (type: string) => {
  if (type === "thumbUp") {
    return ThumbUpAltRoundedIcon;
  }
  if (type === "scrap") {
    return BookmarkRoundedIcon;
  }
};
const getFill = (type: string) => {
  if (type === "thumbUp") {
    return "var(--succeess)";
  }
  if (type === "scrap") {
    return "var(--info-dark)";
  }
};

const Interaction = ({ type }: InteractionProps) => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick((prev) => !prev);
  };
  return (
    <Container>
      {isClick ? (
        <IconWrapper
          variants={clickVariants}
          initial="start"
          animate="clicking"
        >
          <ClickIcon
            component={getClickIcon(type)}
            onClick={handleClick}
            sx={{ fill: getFill(type) }}
          />
        </IconWrapper>
      ) : (
        <UnClickIcon component={getIcon(type)} onClick={handleClick} />
      )}
      <Value>24</Value>
    </Container>
  );
};

export default Interaction;
