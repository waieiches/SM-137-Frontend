const DATE_INDEX = 0;
const ONE_HOUR = 3600000;
const ONE_DAY = 86400000;

export const getFormatTime = (date: Date | undefined | null) => {
  const now = new Date();
  if (!date || isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return formattingTime(date, now);
};

const calculateGap = (date: Date, now: Date) => {
  if (!date || isNaN(date.getTime()) || !now || isNaN(now.getTime())) {
  }

  const time = date.getTime();
  const nowTime = now.getTime();
  const millisecondGap = nowTime - time;
  const hourGap = Math.floor(millisecondGap / ONE_HOUR);
  return { millisecondGap, hourGap };
};

const formattingTime = (date: Date, now: Date) => {
  const { millisecondGap, hourGap } = calculateGap(date, now);
  const formatDate = date.toISOString().split("T")[DATE_INDEX];

  if (millisecondGap < ONE_DAY) {
    if (hourGap > 0) {
      return `${hourGap}시간 전`;
    }
    return "방금 전";
  }

  return formatDate;
};