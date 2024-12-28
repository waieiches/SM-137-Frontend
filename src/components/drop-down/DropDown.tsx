import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

interface DropDownProps {
  options: string[];
}
interface OptionProps {
  isOpen: boolean;
}
const DropBox = styled.ul<OptionProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.2rem 0.4rem;
  min-width: 120px;
  min-height: 30px;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  gap: 0.5rem;
  color: var(--gray5-lowText);
  background-color: var(--white);
  z-index: 10;
  transform: 0.3 ease;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  position: relative;
`;
const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.3rem;
  position: absolute;
`;
const Options = styled.li`
  color: var(--gray5-lowText);
  width: 100%;
`;
const DropDownIcon = styled(SvgIcon)<SvgIconProps>`
  fill: var(--gray5-lowText);
  position: absolute;
  right: 0;
`;

const DropDown = ({ options }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(options[0]);

  const handleOpenClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleClick = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setData(option);
    setIsOpen(false);
  };

  const dropDownRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropBox isOpen={isOpen} onClick={handleOpenClose} ref={dropDownRef}>
      <OptionContainer>
        {isOpen
          ? options.map((i, index) => (
              <Options key={index} onClick={(e) => handleClick(i, e)}>
                {i}
              </Options>
            ))
          : data}
      </OptionContainer>
      <DropDownIcon
        onClick={handleOpenClose}
        component={KeyboardArrowDownRoundedIcon}
      />
    </DropBox>
  );
};

export default DropDown;
