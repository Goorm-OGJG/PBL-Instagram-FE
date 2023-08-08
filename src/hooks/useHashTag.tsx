export const useHashTag = () => {
  const extractHashtags = (text: string): string[] => {
    const regex = /#[^\s#]+/g; // 정규표현식: #으로 시작하고 글자나 숫자가 연속으로 나오는 패턴
    const matches = text.match(regex);

    if (matches) {
      // 중복 제거를 위해 Set을 사용하고 다시 배열로 변환
      return Array.from(new Set(matches));
    }
    return [];
  };

  return extractHashtags;
};
