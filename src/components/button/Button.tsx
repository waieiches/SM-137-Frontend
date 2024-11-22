import styled from "@emotion/styled";
import { buttonType } from "./ButtonType";

const DEFAULT_CONTENT = "버튼 내용";
const DEFAULT_TYPE = "_120x40_Primary";

interface ContentProps {
  content?: string;
  type: keyof typeof buttonType;
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
    >
      <ButtonContents color={color}>{content}</ButtonContents>
    </ButtonContainer>
  );
};

export default Button;
