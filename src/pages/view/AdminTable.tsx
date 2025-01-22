import styled from "@emotion/styled";
// import { DataType } from "../../types/Type";
import StatusDisplay from "../../components/status-button/StatusDisplay";
import { ContentType } from "../../types/Type";
import { useNavigate } from "react-router-dom";

interface ContentListProps {
  data: ContentType[];
}

const AdminContentList = ({ data }: ContentListProps) => {
  const pageSize = 10;
  const currentPage = 1;

  const displayedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  //complaintId를 넣으면 해당 게시글에 해당하는 상세 조회로 이동
  const navigate = useNavigate();
  const handleNavigate = (complaintId: number) => {
    navigate(`/admin/home/${complaintId}`);
  };

  return (
    <Container>
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>민원번호</HeaderCell>
            <HeaderCell>제목</HeaderCell>
            <HeaderCell>개인/공개</HeaderCell>
            <HeaderCell>카테고리</HeaderCell>
            <HeaderCell>진행상태</HeaderCell>
            <HeaderCell>신청일</HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          {displayedData.map((item, index) => (
            <DataRow
              key={index}
              onClick={() => handleNavigate(item.complaintId)}
            >
              <Cell>{item.complaintId}</Cell>
              <TitleCell>{item.complaintTitle}</TitleCell>
              <Cell>공개</Cell>
              <Cell>
                <div>{item.category}</div>
              </Cell>
              <Cell>
                <StatusDisplay type={item.complaintStatus} />
              </Cell>
              {/* <Cell>{item.date}</Cell> */}
            </DataRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminContentList;

// Styled Components
const Container = styled.div`
  max-width: 1114px;
  width: 100%;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderRow = styled.tr`
  background-color: var(--gray1-background);
`;

const HeaderCell = styled.th`
  text-align: center;
  font-weight: bold;
  padding: 0.7rem;
  color: var(--gray5-lowText); /* 헤더 텍스트 색상 */
  vertical-align: middle;

  &:first-of-type {
    border-top-left-radius: 20px; /* 왼쪽 상단 둥글게 */
  }

  &:last-of-type {
    border-top-right-radius: 20px; /* 오른쪽 상단 둥글게 */
  }
`;

const DataRow = styled.tr`
  border-bottom: 1px solid var(--gray3-border); /* 데이터 행 구분선 */
  cursor: pointer;
`;

const Cell = styled.td`
  text-align: center;
  vertical-align: middle;
  padding: 0.7rem;
  color: var(--gray5-lowText); /* 데이터 텍스트 색상 */
`;

const TitleCell = styled(Cell)`
  text-align: center;
  vertical-align: middle;
  padding: 0.7rem;
  color: black; /* 검정색 폰트 */
`;
