import styled from "@emotion/styled";
import ComplaintContent from "../../components/content/ComplaintContent";
import { commentMockData, mockData } from "../../mockData";
import Comment from "../../components/comment/Comment";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import {
  CommentTitle,
  CommentTitleContainer,
  Icon,
} from "../../styles/CommentTitleStyle";
import CommentInput from "../../components/comment/CommentInput";

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const Background = styled.div`
  width: 100%;
  background-color: var(--gray1-background);
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  flex: 1;
`;
const CommentContainer = styled.div`
  width: 782px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 782px;
`;

const Detail = () => {
  //임시 데이터
  const MOCK_DATA = mockData[0];
  //length로 data의 개수를 계산하여 삽입 예정
  const COUNT = 2;

  const TITLE_COLOR = "var(--gray6-black)";
  const ICON_WIDTH = "24px";
  const INDEX_OFFSET = 1;
  return (
    <Container>
      <ComplaintContent data={MOCK_DATA} />

      <Background>
        <CommentContainer>
          <CommentTitleContainer>
            <Icon
              sx={{ fill: TITLE_COLOR, width: ICON_WIDTH }}
              component={CommentRoundedIcon}
            />
            <CommentTitle>댓글 {COUNT}</CommentTitle>
          </CommentTitleContainer>
          {commentMockData.map((i, index) => (
            <Comment data={i} index={index + INDEX_OFFSET} key={index} />
          ))}
        </CommentContainer>
      </Background>

      <InputContainer>
        <CommentInput />
      </InputContainer>
    </Container>
  );
};

export default Detail;
