import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import {
  getColor,
  getIconType,
  getSizeType,
} from "../../utils/InfoMessageUtils";

const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.color};
  align-items: center;
`;
const MessageIcon = styled(SvgIcon)<MessageIconProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
const MessageContent = styled.div``;

interface MessageContainerProps {
  color: string;
}
interface MessageIconProps extends SvgIconProps {
  width: string;
  height: string;
}
interface MessageTypeProps {
  sizeType: string;
  messageType: string;
  content: string;
}

const InfoMessage = ({
  sizeType = "small",
  messageType = "info",
  content = "내용을 입력해 주세요",
}: MessageTypeProps) => {
  const iconComponent = getIconType(messageType);
  const size = getSizeType(sizeType);
  const color = getColor(messageType);

  return (
    <MessageContainer color={color}>
      <MessageIcon
        component={iconComponent}
        width={size.width}
        height={size.height}
      />
      <MessageContent>{content}</MessageContent>
    </MessageContainer>
  );
};

export default InfoMessage;
