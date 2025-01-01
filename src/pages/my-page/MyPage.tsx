import styled from "@emotion/styled";
import MyPageInfo from "./MyPageInfo";
import { myPageInfo } from "../../mockData";
import MyPageAlarm from "./MyPageAlarm";
import MyComplaints from "./MyComplaints";
import ScrapComplaints from "./ScrapComplaints";

const Container = styled.div`
  display: flex;
  justify-content: start;
`;
const BackGround = styled.div`
  width: 100%;
  background-color: var(--primary);
  position: absolute;
  left: 0;
  height: 420px;
  padding: 3rem;
  display: flex;
  justify-content: center;
`;
const BackgroundContents = styled.div`
  width: 100%;
  max-width: 1114px;
  display: grid;
  grid-template-columns: 3.5fr 8fr;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
const BackgroundOutside = styled.div`
  width: 100%;
  margin-top: 440px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const MyPage = () => {
  return (
    <Container>
      <BackGround>
        <BackgroundContents>
          <MyPageInfo data={myPageInfo} />
          <MyPageAlarm />
        </BackgroundContents>
      </BackGround>

      <BackgroundOutside>
        <MyComplaints />
        <ScrapComplaints />
      </BackgroundOutside>
    </Container>
  );
};

export default MyPage;
