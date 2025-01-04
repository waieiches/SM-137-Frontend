import { useState } from "react";
import styled from "@emotion/styled";
import StatusButton from "./StatusButton";
import { StatusType } from "../../types/Type";

interface Props {
  onStatusChange: (status: StatusType) => void;
}

const ButtonGroupContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 296px;
  height: 29px;
`;

const StatusButtonGroup: React.FC<Props> = ({ onStatusChange }) => {
  const [selectedType, setSelectedType] = useState<StatusType>("inProgress");

  const handleClick = (type: StatusType) => {
    setSelectedType(type);
    onStatusChange(type); 
  };

  return (
    <ButtonGroupContainer>
      <StatusButton
        type="inProgress"
        isSelected={selectedType === "inProgress"}
        onClick={() => handleClick("inProgress")}
      />
      <StatusButton
        type="pending"
        isSelected={selectedType === "pending"}
        onClick={() => handleClick("pending")}
      />
      <StatusButton
        type="rejected"
        isSelected={selectedType === "rejected"}
        onClick={() => handleClick("rejected")}
      />
      <StatusButton
        type="completed"
        isSelected={selectedType === "completed"}
        onClick={() => handleClick("completed")}
      />
    </ButtonGroupContainer>
  );
};

export default StatusButtonGroup;
