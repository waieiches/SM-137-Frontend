import styled from "@emotion/styled";

const getType = (tailType: string) => {
  if (tailType === "edge") {
    return "10%";
  }
  if (tailType === "center") {
    return "calc(50% - 10px)";
  }
};

const BubbleLayout = styled.div<TypeProps>`
  display: inline-flex;
  width: max-content;
  flex: 0 1 auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--white);
  border: 1px solid var(--gray3-border);
  justify-content: center;
  align-items: center;
  box-shadow: -0.5px 0.5px 1px rgba(0, 0, 0, 0.25);
  position: relative;

  /* 말풍선 꼬리 */
  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 10px 9px;
    border-color: #ffffff transparent;
    display: block;
    z-index: 1;
    top: -9px;
    right: ${(props) => getType(props.tailType)};
  }
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 10px 9px;
    border-color: #dee2e6 transparent;
    display: block;
    z-index: 0;
    top: -10px;
    right: ${(props) => getType(props.tailType)};
  }

  /* 미디어 쿼리 */
  @media screen and (max-width: 768px) {
    padding: 0.75rem;
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

interface TypeProps {
  tailType: string;
}
interface ContentProps extends TypeProps {
  content: React.ReactNode;
}

const ContentBubble = ({ content, tailType }: ContentProps) => {
  return <BubbleLayout tailType={tailType}>{content}</BubbleLayout>;
};
ContentBubble.defaultProps = {
  content: "내용 입력",
  tailType: "edge",
};

export default ContentBubble;
