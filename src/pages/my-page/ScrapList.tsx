import styled from "@emotion/styled";
import ContentBox from "../../components/content/ContentBox";
import { mockData } from "../../mockData";
import { motion } from "framer-motion";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const ScrapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const ScrapIcon = styled(SvgIcon)<SvgIconProps>`
  color: var(--disabled-primary);
  width: 2rem;
  height: 2rem;
  margin-top: 7rem;
`;

const Title = styled.h2`
  text-align: center;
  margin: 2rem 0;
`;

const ScrapLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--gray3-border);
  margin: 5% 0 1.5rem;
`;

const ScrapList = () => {
  const scrapData = mockData.filter((item) => item.bookmarks > 0);

  return (
    <>
      <ScrapIcon component={BookmarkRoundedIcon} />
      <Title>스크랩한 민원</Title>
      <ScrapLine />
      <ScrapContainer>
        {scrapData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContentBox data={item} type={"small"} />
          </motion.div>
        ))}
      </ScrapContainer>
    </>
  );
};

export default ScrapList;
