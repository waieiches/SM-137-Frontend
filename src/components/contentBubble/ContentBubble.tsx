import styled from "@emotion/styled";
import Notification from "./contents/Notification";
import HeaderNavigator from "./contents/HeaderNavigator";

const BubbleLayout = styled.div<TypeProps>`
  //컴포넌트 확인용, 삭제 예정
  margin: 100px;

  padding: 1rem;
  max-width: 400px;
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
    position: absolute;
    border-style: solid;
    border-width: 0 10px 9px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -9px;
    right: ${(props) =>
      props.type === "notification" ? "10%" : "calc(50% - 10px)"};
  }
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 10px 9px;
    border-color: #dee2e6 transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -10px;
    right: ${(props) =>
      props.type === "notification" ? "10%" : "calc(50% - 10px)"};
  }
`;

interface TypeProps {
  type: string;
}

const ContentBubble = ({ type }: TypeProps) => {
  const getType = (type: string) => {
    if (type === "notification") {
      return Notification;
    }
    if (type === "navigator") {
      return HeaderNavigator;
    }
    return Notification;
  };

  const RenderComponent = getType(type);
  return (
    <BubbleLayout type={type}>
      <RenderComponent />
    </BubbleLayout>
  );
};

export default ContentBubble;
