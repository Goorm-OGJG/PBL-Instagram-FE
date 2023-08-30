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
    const textSplit = text.split(" ").map((t) => t.split("\n"));
    // const element = document.createElement("pre");
    const regex = /#[^\s#]+/;
    for (let i = 0; i < textSplit.length; i++) {
      for (let j = 0; j < textSplit[i].length; j++) {
        if (j < textSplit[i].length - 1) {
          if (regex.test(textSplit[i][j])) {
            result.push({ text: textSplit[i][j], type: "tag", s: "\n" });
          } else {
            result.push({ text: textSplit[i][j], type: "text", s: "\n" });
          }
        } else {
          if (regex.test(textSplit[i][j])) {
            result.push({ text: textSplit[i][j], type: "tag", s: " " });
          } else {
            result.push({ text: textSplit[i][j], type: "text", s: "" });
          }
        }
      }
    }
    let str = "";
    for (const r of result) {
      if (r.type === "tag") {
        // const tagElement = document.createElement("a");
        // tagElement.innerHTML = `${r.text}${r.s}`;
        str += `<span tag=${r.text.slice(1)}>${r.text}</span>${
          r.s === "\n" ? "<br/>" : "&nbsp;"
        }`;
        // element.appendChild(tagElement)
      } else {
        // element.innerHTML += (`${r.text}${r.s}`);
        str += `${r.text}${r.s === "\n" ? "<br/>" : "&nbsp;"}`;
      }
    }

    return str;
  };

  return { extractHashtags, extractHashTagsElement };
};
