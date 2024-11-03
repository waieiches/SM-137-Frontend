import styled from "@emotion/styled";
import InfoMessage from "../../InfoMessage/InfoMessage";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

//mock data (백엔드)
//백엔드 데이터 slice 5개
const mockData = [
  {
    type: "info",
    message: "[저녁 수업 냉난방 가동 요청] 민원에 답변이 달렸습니다.",
  },
  {
    type: "message",
    message: "[저녁 수업 냉난방 가동 요청] 민원에 댓글이 달렸습니다.",
  },
  {
    type: "message",
    message: "[저녁 수업 냉난방 가동 요청] 민원에 댓글이 달렸습니다.",
  },
];

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
`;
const InfoMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ViewMoreButton = styled.button`
  display: flex;
  justify-content: right;
  align-items: center;
  &:hover {
    color: var(--light-primary);
  }
`;
const ViewMoreIcon = styled(SvgIcon)<SvgIconProps>`
  width: 12px;
  height: 12px;
`;
const ViewMoreText = styled.p``;

const Notification = () => {
  return (
    <NotificationContainer>
      <InfoMessageContainer>
        {mockData.map((content, index) => (
          <InfoMessage
            key={index}
            sizeType="small"
            messageType={content.type}
            content={content.message}
          />
        ))}
      </InfoMessageContainer>
      {/*더보기 버튼*/}
      <ViewMoreButton>
        <ViewMoreIcon component={AddRoundedIcon} />
        <ViewMoreText>더보기</ViewMoreText>
      </ViewMoreButton>
    </NotificationContainer>
  );
};

export default Notification;
