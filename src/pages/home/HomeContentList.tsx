import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ContentBox from "../../components/content/ContentBox";
import { useState } from "react";
import { mockData } from "../../mockData";
import { motion } from "framer-motion";

const Title = styled.h2`
  width: 100%;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const ContentBoxContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const AnimationContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ArrowIconLeft = styled(SvgIcon)<SvgIconProps>`
  width: 24px;
  height: 24px;
  fill: var(--gray5-lowText);
  position: absolute;
  left: -2.5rem;
  top: calc(50% - 12px);
  cursor: pointer;
  &:hover {
    background-color: var(--gray2-subbtn);
    border-radius: 100px;
    transition: 0.3s ease;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ArrowIconRight = styled(ArrowIconLeft)`
  left: auto;
  right: -2.5rem;
`;

const HomeContentList = () => {
  const FIRST_PAGE_INDEX = 0;
  const LAST_PAGE_INDEX = 4;
  //애니메이션 트리거
  const [animateKey, setAnimateKey] = useState(0);
  //최근 주목받은 민원
  const [currentIndex, setCurrentIndex] = useState(FIRST_PAGE_INDEX);
  const data = mockData.slice(currentIndex, currentIndex + 2);
  const nextPage = () => {
    setAnimateKey((prev) => prev + 1);
    if (currentIndex + 2 < mockData.length) {
      setCurrentIndex(currentIndex + 2);
      return;
    }
    setCurrentIndex(FIRST_PAGE_INDEX);
  };
  const prevPage = () => {
    setAnimateKey((prev) => prev - 1);
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
      return;
    }
    setCurrentIndex(LAST_PAGE_INDEX);
  };
  return (
    <ContentContainer>
      <Title>최근 주목받은 민원</Title>
      <ContentBoxContainer>
        <ArrowIconLeft
          component={ArrowBackIosNewRoundedIcon}
          onClick={prevPage}
        />
        <ArrowIconRight
          component={ArrowForwardIosRoundedIcon}
          onClick={nextPage}
        />
        <AnimationContainer
          key={animateKey}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          {data.map((i, index) => (
            <ContentBox key={index} type="large" data={i} />
          ))}
        </AnimationContainer>
      </ContentBoxContainer>
    </ContentContainer>
  );
};

export default HomeContentList;
