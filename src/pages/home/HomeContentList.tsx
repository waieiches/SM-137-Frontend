import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ContentBox from "../../components/content/ContentBox";
import { useState } from "react";
import { mockData } from "../../mockData";

const Title = styled.h2`
  width: 100%;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const ContentBoxContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  position: relative;
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
  //최근 주목받은 민원
  const [currentIndex, setCurrentIndex] = useState(FIRST_PAGE_INDEX);
  const data = mockData.slice(currentIndex, currentIndex + 2);
  const nextPage = () => {
    if (currentIndex + 2 < mockData.length) {
      setCurrentIndex(currentIndex + 2);
      return;
    }
    setCurrentIndex(FIRST_PAGE_INDEX);
  };
  const prevPage = () => {
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
        {data.map((i, index) => (
          <ContentBox key={index} type="large" data={i} />
        ))}
      </ContentBoxContainer>
    </ContentContainer>
  );
};

export default HomeContentList;
