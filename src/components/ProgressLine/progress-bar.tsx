import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styled from "styled-components";

interface IconWithTextProps {
  icon: typeof SvgIcon;
  text: string;
  active?: boolean;
}

//원형
const ProgressCircleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 1;
`;

// 아이콘
const ProgressLineIcon = styled(SvgIcon)<SvgIconProps>`
  color: white;
`;

// 텍스트
const ProgressLineText = styled.body`
  display: inline-block;
  text-align: center;
`;

//아이콘+텍스트
const ProgressLineIconText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  position: relative;
`;

const IconWithText = ({
  icon: IconComponent,
  text,
  active,
}: IconWithTextProps) => {
  const circleBackgroundColor = active
    ? "var(--light-primary)"
    : "var(--gray4-placeholder-low)";
  const textColor = active ? "var(--light-primary)" : "var(--gray5-lowText)";
  const iconSize = IconComponent === SendRoundedIcon ? 16 : 20; // SendRoundedIcon만 16x16으로 설정

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

//선
const ProgressLine = styled.div`
  position: absolute;
  top: 15px;
  left: 38px;
  right: 15px;
  width: 399px;
  height: 4px;
  background-color: #d9d9d9;
  z-index: 0;
  transform: translateY(-50%);
`;

//전체
const TotalProgressLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 467px;
`;

const ProgressBar = () => (
  <TotalProgressLine>
    <ProgressLine />
    <IconWithText icon={PermIdentityRoundedIcon} text="학적정보 확인" active />
    <IconWithText icon={CategoryRoundedIcon} text="카테고리 선택" />
    <IconWithText icon={EditRoundedIcon} text="민원 작성" />
    <IconWithText icon={SendRoundedIcon} text="제출 완료" />
  </TotalProgressLine>
);

export default ProgressBar;
