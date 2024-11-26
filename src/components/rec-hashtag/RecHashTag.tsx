import styled from "@emotion/styled";
import PillButton from "../pill-button/PillButton";

const HashTagContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem;
  background-color: var(--gray2-subbtn);
  border-radius: 500px;
  justify-content: center;
  align-items: center;
  max-width: 627.34px;
`;
const HashTagButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ListTitle = styled.span`
  width: 100%;
  text-align: center;
  color: var(--light-primary);
  margin-bottom: 0.5rem;
`;

// 삭제 예정
const hashTagMockData = {
  hashtags: [
    "교육대학원",
    "교육대학원",
    "교육대학원",
    "교육대학원",
    "교육대학원",
    "교육대학원",
    "교육대학원",
    "교육대학원",
    "교육대학원",
  ],
};

const RecHashTag = () => {
  return (
    <HashTagContainer>
      <ListTitle>추천 해시태그</ListTitle>
      <HashTagButton>
        {hashTagMockData.hashtags.map((tag, index) => (
          <PillButton key={index} contents={tag} />
        ))}
      </HashTagButton>
    </HashTagContainer>
  );
};

export default RecHashTag;
