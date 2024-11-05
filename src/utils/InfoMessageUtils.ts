import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";

const smallType = {
  width: "20px",
  height: "20px",
};
const largeType = {
  width: "24px",
  height: "24px",
};

export const getIconType = (messageType: string) => {
  if (messageType === "info") {
    return InfoRoundedIcon;
  }
  if (messageType == "message") {
    return SmsRoundedIcon;
  }
  return undefined;
};
export const getSizeType = (sizeType: string) => {
  if (sizeType === "small") {
    return smallType;
  }
  if (sizeType === "large") {
    return largeType;
  }
  return smallType;
};
export const getColor = (messageType: string) => {
  if (messageType === "info") {
    return "var(--primary)";
  }
  if (messageType === "message") {
    return "var(--gray5-lowText)";
  }
  return "var(--primary)";
};
