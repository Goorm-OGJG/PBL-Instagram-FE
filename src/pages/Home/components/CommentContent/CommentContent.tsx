import * as S from "./CommentContent.style";
import * as Icon from "../../../../components/Icon";
import * as T from "../../../../types/client/feed.client";
import { useLikeCalculate } from "../../../../hooks/useLikeCalcultate";
import { useTimeCalculate } from "../../../../hooks/useTimeCalculate";
import React from "react";
import { useHashTag } from "../../../../hooks/useHashTag";

interface PropsType {
  comment: T.CommentType;
}

function CommentContent({ comment }: PropsType) {
  const {
    commentId,
    userId,
    nickname,
    userImg,
    content,
    createdAt,
    likeCount,
    likeStatus,
  } = comment;

  // 좋아요 계산
  const likeCalculator = useLikeCalculate();
  const likeNum = likeCalculator(likeCount);

  // 날짜 계산
  const timeCalculator = useTimeCalculate();
  const diff_date = timeCalculator(createdAt);

  const { extractHashTagsElement } = useHashTag();
  const extractContent = extractHashTagsElement(content);
  console.log(extractContent);
  return (
    <S.ProfileWrapper id={commentId}>
      <S.ProfileImgBox id={userId}>
        <S.ProfileImg src={userImg} />
      </S.ProfileImgBox>
      {/* 유저 이름 댓글 내용 */}
      <S.TextWrapper>
        <S.UserName to="/home">{nickname}</S.UserName>
        <S.CommentText>
          {extractContent.map((content) => {
            if (content.type === "tag") {
              return <a>{content.text}&nbsp;</a>;
            } else {
              return <span>{content.text}&nbsp;</span>;
            }
          })}
        </S.CommentText>
        <S.CommentInfoWrapper>
          <S.UploadText>{`${diff_date}`}</S.UploadText>
          {commentId !== "feed_desc" && (
            <React.Fragment>
              <S.InfoText>{`좋아요 ${likeNum}`}</S.InfoText>
              <S.InfoText>답글 달기</S.InfoText>
            </React.Fragment>
          )}

          <S.SettingBox>
            <Icon.Horizontal size={16} />
          </S.SettingBox>
        </S.CommentInfoWrapper>
      </S.TextWrapper>
      {/* 좋아요 */}
      <React.Fragment>
        {commentId !== "feed_desc" && (
          <S.IconWrapper>
            <S.IconBox isClick={likeStatus}>
              <Icon.Heart size={14} />
            </S.IconBox>
            <S.IconBoxFill isClick={likeStatus}>
              <Icon.HeartFill size={14} />
            </S.IconBoxFill>
          </S.IconWrapper>
        )}
      </React.Fragment>
    </S.ProfileWrapper>
  );
}

export default CommentContent;
