import styled from "@emotion/styled"; 
import { buttonType } from "./ButtonType";

interface ButtonProps {
  content?: string;
  type: keyof typeof buttonType;
}

interface StyleProps {
  width: string;
  height: string;
  padding: string;
  backGround: string;
  hoverBackGround: string;
  color: string;
  borderRadius: string;
}

const ButtonContainer = styled.button<StyleProps>`
  width: ${(props: StyleProps) => props.width};
  height: ${(props: StyleProps) => props.height};
  background-color: ${(props: StyleProps) => props.backGround};
  padding: ${(props: StyleProps) => props.padding};
  border-radius: ${(props: StyleProps) => props.borderRadius};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: ${(props: StyleProps) => props.color};

  &:hover {
    background-color: ${(props: StyleProps) => props.hoverBackGround};
  }
`;

const Button = ({ content = "버튼 내용", type = "default" }: ButtonProps) => {
  const buttonStyle = buttonType[type];

  return (
    <ButtonContainer
      width={buttonStyle.width}
      height={buttonStyle.height}
      padding={buttonStyle.padding}
      backGround={buttonStyle.backGround}
      hoverBackGround={buttonStyle.hoverBackGround}
      borderRadius={buttonStyle.borderRadius}
      color={buttonStyle.color}
    >
      {content}
    </ButtonContainer>
  );
};

export default Button;
