import CommentContent from "../CommentContent/CommentContent";
import * as S from "./Comment.style";
import * as T from "../../../../types/client/feed.client";
import React from "react";
import { useFeedAPI } from "../../../../api/useFeedAPI";
import { commentIdState, innerCommentsState } from "../../../../recoil/homeState";
import InnerCommentContent from "../InnerCommentContent/InnerCommentContent";
import { useRecoilState, useSetRecoilState } from "recoil";

interface PropsType {
  comment: T.CommentType;
}

function Comment({ comment }: PropsType) {
  const [innerComments, setInnerComments] = useRecoilState(innerCommentsState);
  const setCommentId = useSetRecoilState(commentIdState);
  const { requestInnerComment } = useFeedAPI();
  const showInnerCommentHandler = () => {
    if (innerComments.length === 0) {
      requestInnerComment(comment.commentId, setInnerComments, setCommentId);
    } else {
      setInnerComments([]);
    }
  };
  console.log(innerComments);
  return (
    <S.Wrapper>
      {/* 댓글 */}
      <CommentContent comment={comment} />
      <S.ReplyWrapper>
        {comment.innerCommentCount > 0 && (
          <React.Fragment>
            <S.ReplyHeader>
              <S.Line></S.Line>
              <S.ReplyText onClick={showInnerCommentHandler}>
                {innerComments.length <= 0
                  ? `답글 보기(${comment.innerCommentCount}개)`
                  : "답글 접기"}
              </S.ReplyText>
            </S.ReplyHeader>
            {/* 답글 */}
            {innerComments.length > 0 &&
              innerComments.map((innerComment) => (
                <InnerCommentContent
                  innerComment={innerComment}
                  key={innerComment.innerCommentId}
                />
              ))}
          </React.Fragment>
        )}
      </S.ReplyWrapper>
    </S.Wrapper>
  );
}

export default Comment;
