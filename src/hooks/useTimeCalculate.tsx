import dayjs from "dayjs";

export const useTimeCalculate = () => {
  const timeCalculator = (date: string) => {
    // const now = dayjs(new Date());
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
    const utcNow = dayjs(utc);
    const uploadDate = dayjs(date);
    console.log(now, uploadDate);
    const diff_y = utcNow.diff(uploadDate, "y");
    const diff_M = utcNow.diff(uploadDate, "M");
    const diff_d = utcNow.diff(uploadDate, "d");
    const diff_h = utcNow.diff(uploadDate, "h");
    const diff_m = utcNow.diff(uploadDate, "m");
    const diff_s = utcNow.diff(uploadDate, "s");

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
