import CommentContent from "../CommentContent/CommentContent";
import * as S from "./Comment.style";

function Comment() {
  return (
    <S.Wrapper>
      {/* 댓글 */}
      <CommentContent />
      <S.ReplyWrapper>
        <S.ReplyHeader>
          <S.Line></S.Line>
          <S.ReplyText>답글 보기(n개)</S.ReplyText>
        </S.ReplyHeader>
        {/* 답글 */}
        <CommentContent />
      </S.ReplyWrapper>
    </S.Wrapper>
  );
}

export default Comment;
