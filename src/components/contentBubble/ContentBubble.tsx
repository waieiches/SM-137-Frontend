import styled from "@emotion/styled";
import Notification from "./contents/Notification";

const Layout = styled.div`
  //컴포넌트 확인용, 삭제 예정
  margin: 100px;

  padding: 1rem;
  max-width: 400px;
  min-width: 200px;
  min-height: 100px;
  border-radius: 8px;
  background-color: var(--white);
  border: 1px solid var(--gray3-border);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: -0.5px 0.5px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  &::after {
    content: "";
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--gray3-border);
    position: absolute;
    top: -10px;
    right: 10%;
  }
`;

interface TypeProps {
  type: string;
}

const ContentBubble = ({ type }: TypeProps) => {
  return (
    <Layout>
      <Notification />
    </Layout>
  );
};

export default ContentBubble;
