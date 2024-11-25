import { useState } from "react";
import StatusButton from "./StatusButton";
import styled from "@emotion/styled";
import { StatusType } from "../../\btypes/StatusType";

const ButtonGroupContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 296px;
  height: 29px;
`;

const StatusButtonGroup = () => {
  const [selectedType, setSelectedType] = useState<StatusType>("inProgress"); // 초기 상태 설정

  const handleClick = (type: StatusType) => {
    setSelectedType(type);
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
