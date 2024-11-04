import styled from "@emotion/styled";
import play_circle_filled from "@mui/icons-material/PlayCircleFilled";
import pause_circle_filled from "@mui/icons-material/PauseCircleFilled";
import check_circle from "@mui/icons-material/CheckCircle";
import cancel from "@mui/icons-material/Cancel";

export type StatusType = "inProgress" | "pending" | "rejected" | "completed";

interface StatusButtonProps {
  type: StatusType;
  isSelected: boolean;
  onClick?: () => void;
}

// 상태별 스타일
const buttonStyles = {
  inProgress: {
    color: "var(--light-primary)",
    Icon: play_circle_filled,
    text: "진행",
  },
  pending: {
    color: "var(--info-dark)",
    Icon: pause_circle_filled,
    text: "대기",
  },
  rejected: {
    color: "var(--error-light)",
    Icon: cancel,
    text: "반려",
  },
  completed: {
    color: "var(--succeess)",
    Icon: check_circle,
    text: "완료",
  },
};

interface ButtonContainerProps {
  isSelected: boolean;
  borderColor: string;
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.4rem;
  border-radius: 20px;
  background-color: var(--white);
  cursor: pointer;
  border: ${(props) =>
    props.isSelected ? `2px solid ${props.borderColor}` : "none"};
`;

const ButtonText = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
`;

// 단일 버튼 컴포넌트
const StatusButton = ({ type, isSelected, onClick }: StatusButtonProps) => {
  const { color, Icon, text } = buttonStyles[type];

  return (
    <ButtonContainer isSelected={isSelected} borderColor={color} onClick={onClick}>
      <Icon style={{ width: "20px", height: "20px", color }} />
      <ButtonText color={color}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default StatusButton;
