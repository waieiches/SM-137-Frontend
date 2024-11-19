import React from "react";
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
  display: flex;
  color: ${(props) => props.color};
  text-align: center;
`;

const Button = ({
  content = DEFAULT_CONTENT,
  type = DEFAULT_TYPE,
}: ContentProps) => {
  const buttonStyle = buttonType[type];
  console.log(buttonStyle);

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
=======
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

interface ButtonProps {
  width?: string;
  type?: "default" | "attach" | "previous" | "library" | "login" | "register";
  content?: string; // New prop for external text content
}

interface ButtonContainerProps {
  width?: string;
}

const ButtonContainer = styled.div<ButtonContainerProps & ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.type === "library" ? "0.5rem" : "1rem")};
  width: ${(props) => props.width};
  height: ${(props) => (props.type === "login" ? "123px" : "40px")};
  border-radius: 4px;
  background-color: ${({ type }) =>
    type === "attach" || type === "library"
      ? "var(--gray2-subbtn)"
      : "var(--primary)"};
  cursor: pointer;
  font-family: "pretendardM";
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
`;

const ButtonContents = styled.span<ButtonProps>`
  color: ${({ type }) =>
    type === "attach" || type === "library"
      ? "var(--gray5-lowtext)"
      : "var(--white)"};
  font-family: inherit;
`;

const LibraryIcon = styled(SvgIcon)<SvgIconProps>`
  color: var(--primary);
  width: 24px;
  height: 24px;
`;

const Button: React.FC<ButtonProps> = ({
  width,
  type = "default",
  content,
}) => {
  const label =
    content ||
    (() => {
      switch (type) {
        case "attach":
          return "첨부파일";
        case "previous":
          return "이전";
        case "library":
          return "도서관";
        case "login":
          return "로그인";
        case "register":
          return "등록";
        default:
          return "다음";
      }
    })();

  return (
    <ButtonContainer width={width} type={type}>
      {type === "library" && <LibraryIcon component={MenuBookRoundedIcon} />}
      <ButtonContents type={type}>{label}</ButtonContents>
    </ButtonContainer>
  );
};

export default Button;
