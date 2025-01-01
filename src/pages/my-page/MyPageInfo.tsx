import styled from "@emotion/styled";
import { MyPageProps } from "../../types/Type";
import Gmail from "../../assets/icons/gmail.png";
import CategoryTag from "../../components/category-tag/CategoryTag";

interface MyPageInfoProps {
  data: MyPageProps;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  padding: 4rem 4rem;
  border-radius: 8px;
  white-space: nowrap;
  gap: 0.5rem;
`;
const Name = styled.h2``;
const Sid = styled.div`
  color: var(--gray4-placeholder-low);
`;
const Major = styled.div`
  color: var(--gray5-lowText);
`;
const Email = styled.p`
  background-color: var(--gray1-background);
  border-radius: 500px;
  padding: 0.2rem 1.5rem;
  color: var(--gray4-placeholder-low);
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;
const EmailIcon = styled.img`
  width: 20px;
`;

const MyPageInfo = ({ data }: MyPageInfoProps) => {
  return (
    <Container>
      <CategoryTag
        contents="재학생"
        background="var(--primary)"
        color="var(--white)"
      />
      <Name>{data.name}</Name>
      <Sid>{data.sid}</Sid>
      <Major>{data.major}</Major>
      <Email>
        <EmailIcon src={Gmail} alt="gmail icon" />
        {data.email}
      </Email>
    </Container>
  );
};

export default MyPageInfo;
