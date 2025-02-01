import styled from "@emotion/styled";
import { Title } from "../../styles/ContentStyle";
import { ContentDetailProps } from "../../types/Type";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { SvgIcon, SvgIconProps } from "@mui/material";
import ContentImage from "./ContentImage";

interface ContentProps {
  data: ContentDetailProps;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 1rem;
  width: 800px;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 91px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

const BContentBox = styled(ContentBox)`
  grid-column: span 2;
  height: auto;
  border-radius: 8px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
  gap: 1rem;
`;


const Text = styled.div`
  display: inline-flex;
  align-items: center;
  color: var(--gray5-lowText);
`;

const TextContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: nowrap;
`;

const Data = styled.div`
  color: var(--gray6-header);
  font-weight: 600;
  margin-left: 0.5rem;
`;

const SubTitle = styled.span`
  color: var(--disabled-primary);
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Article = styled.div`
  display: block !important;
  visibility: visible !important;
  color: var(--gray5-lowText) !important;
  font-size: 16px !important;
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
  overflow: visible !important;
`;

const InfoIcon = styled(SvgIcon)<SvgIconProps>`
  width: 20px;
  height: 20px;
  fill: var(--disabled-primary);
`;

const Highlighted = styled.div`
  color: var(--light-primary);
  font-weight: 600;
  margin-left: 0.5rem;
`;

const ContentGrid = ({ data }: ContentProps) => {
  if (!data) {
    return <text>데이터가 없습니다</text>;
  }

  return (
    <Container>
      <ContentBox>
        <Title>민원 정보</Title>
        <TextContainer>
          <Text>민원번호 <Highlighted>{data.complaintId}</Highlighted></Text>
          <Text>카테고리 <Data>{data.category}</Data></Text>
        </TextContainer>
      </ContentBox>

      <ContentBox>
      <Title>민원인 정보</Title>
        <TextContainer>
          <Text>학과 <Data>{data.user[0].name}</Data> </Text>
          <Text>학번 <Data>{data.user[0].email}</Data> </Text>
          <Text>이름 <Data>{data.user[0].number}</Data></Text>
        </TextContainer>
      </ContentBox>

      <BContentBox>
        <Title>민원 내용</Title>
        <SubTitle>
          <InfoIcon component={InfoRoundedIcon} />
          현황 및 문제점
        </SubTitle>
        <Article>{data.complaintProb}</Article>

        <SubTitle>
          <InfoIcon component={InfoRoundedIcon} />
          개선방향
        </SubTitle>
        <Article>{data.complaintDir}</Article>

        {data.complaintExpect && (
          <>
            <SubTitle>
              <InfoIcon component={InfoRoundedIcon} />
              기대효과
            </SubTitle>
            <Article>{data.complaintExpect}</Article>
          </>
        )}

      {data.attachmentUrls && (
        <ContentImage attachmentUrls={data.attachmentUrls} />
      )}
      </BContentBox>
    </Container>
  );
};

export default ContentGrid;
