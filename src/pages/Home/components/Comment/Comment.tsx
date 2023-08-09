import CommentContent from "../CommentContent/CommentContent";
import * as S from "./Comment.style";
import * as T from "../../../../types/client/feed.client";
import React from "react";

interface PropsType {
  comment: T.CommentType;
}

function Comment({ comment }: PropsType) {
  // console.log(comment);
  return (
    <S.Wrapper>
      {/* 댓글 */}
      <CommentContent comment={comment} />
      <S.ReplyWrapper>
        {comment.innerCommentCount > 1 && (
          <React.Fragment>
            <S.ReplyHeader>
              <S.Line></S.Line>
              <S.ReplyText>{`답글 보기(${comment.innerCommentCount}개)`}</S.ReplyText>
            </S.ReplyHeader>
            {/* 답글 */}
            {/* <CommentContent /> */}
          </React.Fragment>
        )}
      </S.ReplyWrapper>
    </S.Wrapper>
  );
}

export default Comment;
