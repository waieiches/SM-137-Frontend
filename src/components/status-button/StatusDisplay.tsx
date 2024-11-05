import styled from "@emotion/styled";
import { StatusType } from "./StatusButton"; // StatusType 타입 import
import { buttonStyles } from "./StatusButton"; // buttonStyles 객체 import

interface StatusDisplayProps {
  type: StatusType;
}

const StatusDisplay = ({ type }: StatusDisplayProps) => {
  const { color, Icon, text } = buttonStyles[type];

  return (
    <DisplayContainer>
      <Icon />
      <DisplayText color={color}>{text}</DisplayText>
    </DisplayContainer>
  );
};

const DisplayContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

const DisplayText = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
`;

export default StatusDisplay;