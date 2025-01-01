import styled from "@emotion/styled";
import MyPageInfo from "./MyPageInfo";
import { myPageInfo } from "../../mockData";

const Container = styled.div``;
const BackGround = styled.div`
  width: 100%;
  background-color: var(--primary);
  position: absolute;
  left: 0;
  height: 420px;
  padding: 3rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
const BackgroundContents = styled.div`
  width: 1114px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 0.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
const MyPage = () => {
  return (
    <Container>
      <BackGround>
        <BackgroundContents>
          <MyPageInfo data={myPageInfo} />
        </BackgroundContents>
      </BackGround>
    </Container>
  );
};

export default MyPage;
