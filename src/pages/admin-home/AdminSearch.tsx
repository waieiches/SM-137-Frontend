import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";
import { AdminContentContext } from "./AdminHome";
import { StatusType } from "../../types/Type";

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  margin-top: 1.5rem;
`;

const SearchBox = styled.div`
  display: block;
  flex-direction: row;
  gap: 1rem;
`;

const SearchItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const ItemTitle = styled.div`
  text-align: right;
  width: 60px;
  color: var(--white);
`;

const ItemInput = styled.input`
  width: 140px;
  height: 2rem;
  border: 1px solid var(--gray3-border);
  border-radius: 5px;
  background-color: var(--white);
`;

const WideItemInput = styled(ItemInput)`
  width: 200px;
`;

const StatusContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SelectLabel = styled.label<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) =>
    props.active ? "var(--succeess)" : "var(--disabled-primary)"};
  cursor: pointer;
`;

const statusMapping: Record<string, StatusType> = {
  진행: "inProgress",
  대기: "pending",
  반려: "rejected",
  완료: "completed",
};

const SearchComponent: React.FC = () => {
  const [isPrivate, setIsPrivate] = useState(true);
  const [status, setStatus] = useState<StatusType[]>([]);

  const [inputId, setInputId] = useState("");
  const [inputTitle, setInputTitle] = useState("");

 const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const context = useContext(AdminContentContext);

  useEffect(() => {
    const numberId = Number(inputId);
    context?.handleFilterOptions("id", numberId);
  }, [inputId]);

  useEffect(() => {
    const titleKeywords = inputTitle.split(" ").filter((word) => word.trim());
    context?.handleFilterOptions("title", titleKeywords);
  }, [inputTitle]);

  useEffect(() => {
    context?.handleFilterOptions("status", status);
  }, [status]);

  const toggleStatus = (statusLabel: string) => {
    const mappedStatus = statusMapping[statusLabel]; 
    if (!mappedStatus) return; // 매핑되지 않는 값 무시

    setStatus((prevStatus) =>
      prevStatus.includes(mappedStatus)
        ? prevStatus.filter((s) => s !== mappedStatus) 
        : [...prevStatus, mappedStatus] 
    );
  };

  return (
    <>
      <SearchContainer>
        <SearchBox>
          <SearchItem>
            <ItemTitle>민원번호</ItemTitle>
            <ItemInput onChange={handleChangeId} />
          </SearchItem>
          <SearchItem>
            <ItemTitle>개인/공개</ItemTitle>
            <SelectLabel active={isPrivate} onClick={() => setIsPrivate(true)}>
              {isPrivate && <CheckIcon />} 개인
            </SelectLabel>
            <SelectLabel
              active={!isPrivate}
              onClick={() => setIsPrivate(false)}
            >
              {!isPrivate && <CheckIcon />} 공개
            </SelectLabel>
          </SearchItem>
        </SearchBox>

        <SearchBox>
          <SearchItem>
            <ItemTitle>제목</ItemTitle>
            <WideItemInput onChange={handleChangeTitle} />
          </SearchItem>
          <SearchItem>
            <ItemTitle>신청일</ItemTitle>
            <WideItemInput type="date" />
          </SearchItem>
        </SearchBox>
      </SearchContainer>

      <StatusContainer>
        <ItemTitle>진행상태</ItemTitle>
        <SelectLabel
          active={status.includes("inProgress")}
          onClick={() => toggleStatus("진행")}
        >
          {status.includes("inProgress") && <CheckIcon />} 진행
        </SelectLabel>
        <SelectLabel
          active={status.includes("pending")}
          onClick={() => toggleStatus("대기")}
        >
          {status.includes("pending") && <CheckIcon />} 대기
        </SelectLabel>
        <SelectLabel
          active={status.includes("rejected")}
          onClick={() => toggleStatus("반려")}
        >
          {status.includes("rejected") && <CheckIcon />} 반려
        </SelectLabel>
        <SelectLabel
          active={status.includes("completed")}
          onClick={() => toggleStatus("완료")}
        >
          {status.includes("completed") && <CheckIcon />} 완료
        </SelectLabel>
      </StatusContainer>
    </>
  );
};

export default SearchComponent;