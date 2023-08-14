export const useHashTag = () => {
  const extractHashtags = (text: string): string[] => {
    const regex = /#[^\s#]+/g; // 정규표현식: #으로 시작하고 글자나 숫자가 연속으로 나오는 패턴
    const matches = text.match(regex);

    if (matches) {
      // 중복 제거를 위해 Set을 사용하고 다시 배열로 변환
      const result = Array.from(new Set(matches)).map((str) => str.replace("#", ""));
      return result;
    }
    return [];
  };

  const extractHashTagsElement = (text: string) => {
    const result = [];
    const textSplit = text.split(" ");
    const regex = /#[^\s#]+/g; // 정규표현식: #으로 시작하고 글자나 숫자가 연속으로 나오는 패턴
    for (let i = 0; i < textSplit.length; i++) {
      const test = regex.test(textSplit[i]);
      if (test) {
        result.push({ text: textSplit[i], type: "tag" });
      } else {
        result.push({ text: textSplit[i], type: "text" });
      }
    }

    return result;
  };

  return { extractHashtags, extractHashTagsElement };
};
