import CommentContent from "../CommentContent/CommentContent";
import * as S from "./Comment.style";
import * as T from "../../../../types/client/feed.client";
import React from "react";
import { useFeedAPI } from "../../../../api/useFeedAPI";
import { InnerCommentType } from "../../../../recoil/homeState";
import InnerCommentContent from "../InnerCommentContent/InnerCommentContent";
import { useState, useEffect } from "react";

interface PropsType {
  comment: T.CommentType;
  innerPost: boolean;
  setInnerPost: React.Dispatch<React.SetStateAction<boolean>>;
}

function Comment({ comment, innerPost, setInnerPost }: PropsType) {
  const [innerComments, setInnerComments] = useState<InnerCommentType[]>([]);
  const { requestInnerComment } = useFeedAPI();
  const [showInner, setShowInner] = useState(false);
  useEffect(() => {
    requestInnerComment(comment.commentId, setInnerComments);
    setInnerPost(false);
  }, [innerPost]);

  const showInnerCommentHandler = () => {
    if (innerComments.length === 0) {
      requestInnerComment(comment.commentId, setInnerComments);
      setShowInner(true);
    } else {
      setInnerComments([]);
      setShowInner(false);
    }
  };
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
                {!showInner ? `답글 보기(${comment.innerCommentCount}개)` : "답글 접기"}
              </S.ReplyText>
            </S.ReplyHeader>
            {/* 답글 */}
            {showInner &&
              innerComments.map((innerComment) => (
                <InnerCommentContent
                  innerComment={innerComment}
                  setInnerComments={setInnerComments}
                  commentId={comment.commentId}
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
