import styled from "@emotion/styled";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import QuickLinkItem from "./QuickLinkItem";

const QuickLinkWrapper = styled.div`
  display: inline-flex;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--gray1-background);
  width: 100%;
  cursor: pointer;
`;

const QuickLinkDisplay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const QuickLink = () => (
  <QuickLinkWrapper>
    <QuickLinkDisplay>
      <QuickLinkItem icon={LibraryBooksRoundedIcon} text="전체 민원 조회" />
      <QuickLinkItem icon={AccountBoxRoundedIcon} text="내 민원" />
    </QuickLinkDisplay>
    <QuickLinkDisplay>
      <QuickLinkItem icon={SmsRoundedIcon} text="결과 조회" />
      <QuickLinkItem icon={CreateRoundedIcon} text="민원 신청" />
    </QuickLinkDisplay>
  </QuickLinkWrapper>
);

export default QuickLink;
