import styled from "@emotion/styled";
import { buttonType } from "./ButtonType";

const DEFAULT_CONTENT = "버튼 내용";
const DEFAULT_TYPE = "default";

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
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius || "4px"}; 
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverBackGround};
  }
`;

const ButtonContents = styled.div<StyleProps>`
  display: flex;
  color: ${(props) => props.color};
  text-align: center;
`;

const ButtonTemp = ({
  content = DEFAULT_CONTENT,
  type = DEFAULT_TYPE,
}: ContentProps) => {
  const buttonStyle = buttonType[type];

  return (
    <ButtonContainer
      width={buttonStyle.width}
      height={buttonStyle.height}
      padding={buttonStyle.padding}
      backGround={buttonStyle.backGround}
      hoverBackGround={buttonStyle.hoverBackGround}
      borderRadius={buttonStyle.borderRadius}
    >
      <ButtonContents color={buttonStyle.color}>{content}</ButtonContents>
    </ButtonContainer>
  );
};

export default ButtonTemp;

