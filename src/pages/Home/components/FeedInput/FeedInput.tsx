import React, { useRef, useState } from "react";
import * as S from "./FeedInput.style";

function FeedInput() {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>("");
  const [rows, setRows] = useState<number>(1);
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  // 줄 늘어남 조정
  const rowsHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const key = e.key;

    console.log(key);
    if (e.shiftKey && key === "Enter" && rows < 4) {
      setRows(rows + 1);
    } else if (key === "Backspace") {
      removeLine();
    } else if (key === "Enter") {
      e.preventDefault();
    }
  };
  // 줄 줄어듬 조정
  const removeLine = () => {
    const textarea = ref.current!;
    const lines = textarea.value.split("\n");
    const currentLine = textarea.selectionStart;
    const lineIndex = textarea.value.substr(0, currentLine).split("\n").length - 1;

    if (lines[lineIndex] === "" && lineIndex > 0) {
      setRows(rows - 1);
    }
  };

  //댓글 게시
  const commentHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("댓글 게시 요청");
  };

  return (
    <S.Form>
      <S.TextArea
        id="comment"
        ref={ref}
        rows={rows}
        placeholder="댓글 달기..."
        value={value}
        onChange={changeHandler}
        onKeyDown={rowsHandler}
      ></S.TextArea>
      <S.Button textvalue={value} onClick={commentHandler}>
        게시
      </S.Button>
    </S.Form>
  );
}

export default FeedInput;
