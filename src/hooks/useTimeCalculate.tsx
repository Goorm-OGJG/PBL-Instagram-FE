import dayjs from "dayjs";

export const useTimeCalculate = () => {
  const timeCalculator = (date: string) => {
    const now = dayjs(new Date());
    const uploadDate = dayjs(date);

    const diff_y = now.diff(uploadDate, "y");
    const diff_M = now.diff(uploadDate, "M");
    const diff_d = now.diff(uploadDate, "d");
    const diff_h = now.diff(uploadDate, "h");
    const diff_m = now.diff(uploadDate, "m");
    const diff_s = now.diff(uploadDate, "s");

    if (diff_y > 0) {
      return `${diff_y}년 전`;
    } else if (diff_M > 0) {
      return `${diff_M}달 전`;
    } else if (diff_d > 0) {
      return `${diff_d}일 전`;
    } else if (diff_h > 0) {
      return `${diff_h}시간 전`;
    } else if (diff_m > 0) {
      return `${diff_m}분 전`;
    } else if (diff_s > 0) {
      return `${diff_s}초 전`;
    } else {
      return "방금";
    }
  };

  return timeCalculator;
};
