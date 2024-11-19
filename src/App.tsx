import styled from "@emotion/styled";
import ContentList from "./components/content/ContentList";
import Header from "./components/header/Header";
import "./reset.css";
import { StatusType } from "./components/status-button/StatusButton";
import ContentBox from "./components/content/ContentBox";
import Interaction from "./components/interaction/Interaction";
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
interface DataType {
  title: string;
  status: StatusType;
  category: string[];
  content: string;
}

const mockData: DataType[] = [
  {
    title: "강의실 의자 교체 요청",
    status: "inProgress",
    category: ["시설", "가구", "의자"],
    content:
      "안녕하세요. 강의실에서 사용하는 의자가 불편하고 일부가 파손된 상태입니다. 학습 효율을 위해 의자 교체를 요청드립니다.안녕하세요. 강의실에서 사용하는 의자가 불편하고 일부가 파손된 상태입니다. 학습 효율을 위해 의자 교체를 요청드립니다.안녕하세요. 강의실에서 사용하는 의자가 불편하고 일부가 파손된 상태입니다. 학습 효율을 위해 의자 교체를 요청드립니다.",
  },
  {
    title: "냉난방 장치 고장 신고",
    status: "pending",
    category: ["시설", "냉난방"],
    content:
      "강의실 내 냉난방 장치가 작동하지 않고 있습니다. 조속히 점검 및 수리를 부탁드립니다.강의실 내 냉난방 장치가 작동하지 않고 있습니다. 조속히 점검 및 수리를 부탁드립니다.강의실 내 냉난방 장치가 작동하지 않고 있습니다. 조속히 점검 및 수리를 부탁드립니다.강의실 내 냉난방 장치가 작동하지 않고 있습니다. 조속히 점검 및 수리를 부탁드립니다.",
  },
  {
    title: "강의 자료 배포 요청",
    status: "completed",
    category: ["교육", "자료"],
    content:
      "지난주 강의 자료가 아직 업로드되지 않았습니다. 자료를 공유해 주시면 감사하겠습니다.",
  },
  {
    title: "조명 개선 요청",
    status: "rejected",
    category: ["시설", "조명"],
    content:
      "강의실 조명이 너무 어두워서 학습에 방해가 됩니다. 밝기를 조절하거나 조명을 추가 설치해 주시면 좋겠습니다.",
  },
  {
    title: "주차 공간 부족 문제",
    status: "inProgress",
    category: ["시설", "주차"],
    content:
      "출근 시간대에 주차 공간이 부족합니다. 주차 구역 확장이나 대안을 마련해 주시길 요청드립니다.",
  },
  {
    title: "강의 시간 변경 요청",
    status: "pending",
    category: ["교육", "시간표"],
    content:
      "현재 강의 시간이 너무 늦어서 참여가 어렵습니다. 시간 변경 가능성을 검토 부탁드립니다.",
  },
  {
    title: "컴퓨터실 인터넷 연결 문제",
    status: "completed",
    category: ["시설", "인터넷"],
    content:
      "컴퓨터실 내 인터넷 연결 상태가 불안정합니다. 원활한 학습을 위해 네트워크 점검을 요청드립니다.",
  },
  {
    title: "화장실 위생 상태 개선 요청",
    status: "rejected",
    category: ["시설", "위생"],
    content:
      "화장실 청소가 제대로 이루어지지 않아 위생 상태가 좋지 않습니다. 청소 주기를 늘려 주셨으면 합니다.",
  },
  {
    title: "강의 녹화 서비스 문의",
    status: "inProgress",
    category: ["교육", "서비스"],
    content:
      "업무로 인해 강의 참석이 어려운 경우가 많습니다. 강의를 녹화하여 공유하는 서비스가 가능할지 문의드립니다.",
  },
  {
    title: "비상구 안전 점검 요청",
    status: "pending",
    category: ["시설", "안전"],
    content:
      "강의실 비상구가 막혀 있는 경우가 있어 위험합니다. 정기적으로 비상구 점검을 진행해 주시길 바랍니다.",
  },
];

function App() {
  return (
    <Wrap>
      <Header />
      <ContentBox type="small" />
      <ContentBox type="large" />
      {mockData.map((i) => (
        <ContentList data={i} />
      ))}
    </Wrap>
  );
}

export default App;
