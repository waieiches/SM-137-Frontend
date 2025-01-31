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
  const [selectedType, setSelectedType] = useState<StatusType>("IN_PROGRESS");

  const handleClick = (type: StatusType) => {
    setSelectedType(type);
    onStatusChange(type); 
  };

  return (
    <ButtonGroupContainer>
      <StatusButton
        type="IN_PROGRESS"
        isSelected={selectedType === "IN_PROGRESS"}
        onClick={() => handleClick("IN_PROGRESS")}
      />
      <StatusButton
        type="WAITING"
        isSelected={selectedType === "WAITING"}
        onClick={() => handleClick("WAITING")}
      />
      <StatusButton
        type="RETURN"
        isSelected={selectedType === "RETURN"}
        onClick={() => handleClick("RETURN")}
      />
      <StatusButton
        type="DONE"
        isSelected={selectedType === "DONE"}
        onClick={() => handleClick("DONE")}
      />
    </ButtonGroupContainer>
  );
};

export default StatusButtonGroup;
