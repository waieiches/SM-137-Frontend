import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import {
  getColor,
  getIconType,
  getSizeType,
} from "../../utils/InfoMessageUtils";

const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  color: ${(props) => props.color};
`;
const MessageIcon = styled(SvgIcon)<MessageIconProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
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
}

const InfoMessage = ({
  sizeType = "small",
  messageType = "info",
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
    </MessageContainer>
  );
};

export default InfoMessage;
