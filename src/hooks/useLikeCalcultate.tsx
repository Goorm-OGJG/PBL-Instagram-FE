export const useLikeCalculate = () => {
  const likeCalculator = (likeCount: number) => {
    if (likeCount >= 10000) {
      const number = Math.floor(likeCount / 10000);
      const rest = likeCount % 10000;
      let decimal = 0;
      if (rest >= 1000) {
        decimal = Math.floor(rest / 1000);

        return `${number}.${decimal}만개`;
      } else {
        return `${number}만개`;
      }
    } else if (likeCount >= 1000) {
      const number = Math.floor(likeCount / 1000);
      const rest = likeCount % 1000;
      let decimal = 0;
      if (rest >= 100) {
        decimal = Math.floor(rest / 100);

        return `${number}.${decimal}천개`;
      } else {
        return `${number}천개`;
      }
    } else if (likeCount !== 0) {
      return `${likeCount}개`;
    } else {
      return "";
    }
  };

  return likeCalculator;
};
