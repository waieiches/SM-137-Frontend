import styled from "@emotion/styled";
import { buttonType } from "./ButtonType";

const DEFAULT_CONTENT = "버튼 내용";
const DEFAULT_TYPE = "_120x40_Primary";

interface ContentProps {
  content?: string;
  type: keyof typeof buttonType;
  onClick?: () => void; // onClick 이벤트 추가
}

interface StyleProps {
  width?: string;
  height?: string;
  padding?: string;
  backGround?: string;
  hoverBackGround?: string;
  color?: string;
  borderRadius?: string;
}

const ButtonContainer = styled.button<StyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backGround};
  border-radius: ${(props) => props.borderRadius || "4px"};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer; // 버튼에 클릭 커서 추가
  &:hover {
    background-color: ${(props) => props.hoverBackGround};
  }
`;

const ButtonContents = styled.div<StyleProps>`
  color: ${(props) => props.color};
  text-align: center;
`;

const Button = ({
  content = DEFAULT_CONTENT,
  type = DEFAULT_TYPE,
  onClick, // onClick props 추가
}: ContentProps) => {
  const buttonStyle = buttonType[type];

  const {
    width,
    height,
    padding,
    backGround,
    color,
    hoverBackGround,
    borderRadius,
  } = buttonStyle;

  return (
    <ButtonContainer
      width={width}
      height={height}
      padding={padding}
      backGround={backGround}
      hoverBackGround={hoverBackGround}
      borderRadius={borderRadius}
      onClick={onClick} // onClick 이벤트 핸들러 추가
    >
      <ButtonContents color={color}>{content}</ButtonContents>
    </ButtonContainer>
  );
};

export default Button;
