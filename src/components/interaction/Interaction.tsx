import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import { useState } from "react";

interface InteractionProps {
  type: "thumbUp" | "scrap";
  count: number;
}
const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;
const UnClickIcon = styled(SvgIcon)<SvgIconProps>`
  width: 24px;
  height: 24px;
  fill: var(--gray5-lowText);
  cursor: pointer;
  &:hover {
    fill: var(--gray6-header);
  }
`;
const ClickIcon = styled(SvgIcon)<SvgIconProps>`
  width: 24px;
  height: 24px;
  fill: ${(props) => props.fill};
`;
const Value = styled.pre`
  color: var(--gray5-lowText);
`;

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

const Interaction = ({ type, count }: InteractionProps) => {
  const [isClick, setIsClick] = useState(false);
  //초기값 : 백엔드에서 가져온 likes, bookmarks 값
  const [value, setValue] = useState(count);

  const handleClick = () => {
    setIsClick((prev) => !prev);
    setValue((prev: number) => (isClick ? prev - 1 : prev + 1));
  };

  return (
    <Container>
      {isClick ? (
        <ClickIcon
          component={getClickIcon(type)}
          onClick={handleClick}
          sx={{ fill: getFill(type) }}
        />
      ) : (
        <UnClickIcon component={getIcon(type)} onClick={handleClick} />
      )}
      <Value>{value}</Value> {/* count 대신 상태 값 표시 */}
    </Container>
  );
};

export default Interaction;
