import React, { useState, useRef } from "react";
import * as S from "./CommentInput.style";
import {
  commentState,
  commentTypeState,
  feedDetailState,
} from "../../../../recoil/homeState";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useFeedAPI } from "../../../../api/useFeedAPI";

interface Props {
  feedId: number;
  setInnerPost: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentInput({ feedId, setInnerPost }: Props) {
  const [value, setValue] = useRecoilState(commentState);
  const [commentType, setCommentType] = useRecoilState(commentTypeState);
  const { requestComment, requestPostInnerComment } = useFeedAPI();
  const setData = useSetRecoilState(feedDetailState);
  const [rows, setRows] = useState(1);
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (!value.includes(`@${commentType.nickname}`)) {
      setCommentType((prev) => ({ ...prev, type: "comment" }));
    } else {
      setCommentType((prev) => ({ ...prev, type: "innerComment" }));
    }
  };

  const postHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const content = value;

    if (commentType.type === "comment") {
      requestComment(feedId, { content }, setData);
    } else if (commentType.type === "innerComment") {
      requestPostInnerComment(commentType.id, content, feedId, setData);
      setInnerPost(true);
    }
    setCommentType({ id: -1, type: "comment", nickname: "" });
    setValue("");
  };

  const rowsHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const key = e.key;

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
  return (
    <S.CommentWrapper>
      <S.CommentInput
        placeholder="댓글 달기..."
        value={value}
        onChange={inputHandler}
        onKeyDown={rowsHandler}
        rows={rows}
        ref={ref}
      />
      <S.Button onClick={postHandler}>게시</S.Button>
    </S.CommentWrapper>
  );
}

export default CommentInput;
