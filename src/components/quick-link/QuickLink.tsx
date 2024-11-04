import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import styled from "@emotion/styled";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

// 아이콘
const QuickLinkIcon = styled(SvgIcon)<SvgIconProps>`
  color: var(--gray5-lowText);
  width: 25px;
  height: 25px;
`;

// 텍스트
const QuickLinkText = styled.span`
  color: var(--gray5-lowText);
  display: inline-block;
  text-align: center;
`;

// 아이콘+텍스트
const QuickLinkIconTextItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 279px;
  height: 80px;
  border-right: 1px solid var(--gray1-background);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex: 1;
`;

// 전체 래퍼
const QuickLinkWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  width: 90%;
  max-width: 1116px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

interface QuickLinkItemProps {
  icon: React.ComponentType<SvgIconProps>;
  text: string;
}

const QuickLinkItem = ({ icon: IconComponent, text }: QuickLinkItemProps) => (
  <QuickLinkIconTextItem>
    <QuickLinkIcon component={IconComponent} />
    <QuickLinkText>{text}</QuickLinkText>
  </QuickLinkIconTextItem>
);

// 최종 컴포넌트
const QuickLink = () => (
  <QuickLinkWrapper>
    <QuickLinkItem icon={LibraryBooksRoundedIcon} text="전체 민원 조회" />
    <QuickLinkItem icon={AccountBoxRoundedIcon} text="내 민원" />
    <QuickLinkItem icon={SmsRoundedIcon} text="결과 조회" />
    <QuickLinkItem icon={CreateRoundedIcon} text="민원 신청" />
  </QuickLinkWrapper>
);

export default QuickLink;
