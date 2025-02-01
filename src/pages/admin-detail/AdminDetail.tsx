import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";
import ContentGrid from "./ContentGrid";
import StatusBar from "./StatusBar";
import { ContentDetailProps, StatusType } from "../../types/Type";
import Button from "../../components/button/Button";
import BackButton from "./BackButton";
import AdminModalContents from "../../components/modal/contents/AdminModalContents";
import Modal from "../../components/modal/Modal";
import { useModal } from "../../hooks/useModal";
import { getComplaintDetail } from "../../services/managerServices";

const Background = styled.div`
  width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: var(--white);
`;

const StatusBarContainer = styled.div`
  position: relative;
  transform: translateY(-50%);
`;

const Container = styled.div`
  gap: 1rem;
  width: 800px;
  margin: 0 auto;
`;

const InputTitle = styled.span``;

const InputField = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  height: 200px;
  border-radius: 8px;
  background-color: var(--white);
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const BackButtonStyled = styled(BackButton)`
  position: absolute;
  left: 1rem;
  right: 1rem;
`;

const AdminDetail = () => {
  const [selectedStatus, setSelectedStatus] =
    useState<StatusType | null>(null);
  const [inputValue, setInputValue] = useState(""); // InputField 값 상태
  const [error, setError] = useState("");
  const [data, setData] = useState<ContentDetailProps | null>(null);
  const [loading, setLoading] = useState(true);
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      getComplaintDetail(id)
      .then((res) => {
        console.log("log: API 응답 데이터:", res.data);
        setData(res.data);
        
        if (res.data.status) {
          setSelectedStatus(res.data.status); // 상태 초기값 설정
          console.log("log: selectedStatus 설정:", res.data.status);
        } else {
          console.warn("log: API 응답에 status가 없습니다. 기본값 설정.");
          setSelectedStatus("IN_PROGRESS");
        }
      })
      .catch((error) => {
        console.error("log: API 호출 에러:", error);
        setSelectedStatus("IN_PROGRESS"); // 에러 발생 시 기본값 설정
      })
      .finally(() => setLoading(false));
  }
}, [id]);

  const handleStatusChange = (status: StatusType) => {
    setSelectedStatus(status);
  };

  const handleNextClick = () => {
    if (!inputValue.trim()) {
      setError("내용을 입력해주세요.");
      return;
    }

    if (inputValue.length < 50) {
      setError("내용은 최소 50자 이상이어야 합니다.");
      return;
    }

    setError("");
    handleModalOpen();
  };

  if (loading) {
    return <div>로딩 중</div>;
  }

  if (!data) {
    return <div>데이터를 불러올 수 없습니다</div>;
  }

  return (
    <>
      <Background>
        <Title>상세 조회</Title>
        <BackButtonStyled />
        <ContentGrid data={data} />
      </Background>
      <StatusBarContainer>
        <StatusBar onStatusChange={handleStatusChange} currentStatus={selectedStatus} />
      </StatusBarContainer>

      {selectedStatus === "RETURN" || selectedStatus === "DONE" ? (
        <Container>
          <InputTitle>상세 민원 답변</InputTitle>
          <InputField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // 입력 값 업데이트
          />
          {error && (
            <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>
          )}{" "}
          {/* 에러 메시지 */}
        </Container>
      ) : null}

      <ButtonContainer>
        <Button
          content="다음"
          type={"_120x40_Primary"}
          onClick={handleNextClick}
        />
      </ButtonContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        contents={<AdminModalContents handleClose={handleModalClose} />}
      />
    </>
  );
};

export default AdminDetail;
