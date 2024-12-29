import styled from "@emotion/styled";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import { SvgIcon, SvgIconProps } from "@mui/material";

interface SortStandardProps {
  type: "latest" | "scrap" | "likes";
}
const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    color: var(--gray6-black);
    fill: var(--gray6-black);
    & > svg {
      fill: var(--gray6-black);
    }
    & > pre {
      color: var(--gray6-black);
    }
  }
`;
const Icon = styled(SvgIcon)<SvgIconProps>`
  fill: var(--gray5-lowText);
  width: 24px;
  height: 24px;
`;
const String = styled.pre`
  color: var(--gray5-lowText);
`;

const SortStandard = ({ type }: SortStandardProps) => {
  const match = {
    latest: {
      string: "최신순",
      icon: TimelineRoundedIcon,
    },
    scrap: {
      string: "스크랩순",
      icon: BookmarkRoundedIcon,
    },
    likes: {
      string: "좋아요순",
      icon: ThumbUpOffAltRoundedIcon,
    },
  };

  return (
    <Container>
      <Icon component={match[type].icon}></Icon>
      <String>{match[type].string}</String>
    </Container>
  );
};

export default SortStandard;
