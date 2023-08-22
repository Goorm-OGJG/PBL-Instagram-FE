import * as S from "./CommentContent.style";
import * as Icon from "../../../../components/Icon";
import * as T from "../../../../types/client/feed.client";
import { useLikeCalculate } from "../../../../hooks/useLikeCalcultate";
import { useTimeCalculate } from "../../../../hooks/useTimeCalculate";
import React, { useState } from "react";
import { useHashTag } from "../../../../hooks/useHashTag";
import { useNavigate } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  commentState,
  commentTypeState,
  feedDetailState,
  isLikeModalOpenState,
  isModalOpenState,
} from "../../../../recoil/homeState";
import { useFeedAPI } from "../../../../api/useFeedAPI";

interface PropsType {
  comment: T.CommentType;
}

function CommentContent({ comment }: PropsType) {
  const { commentId, nickname, userImg, content, createdAt, likeCount, likeStatus } =
    comment;

  // 좋아요 계산
  const likeCalculator = useLikeCalculate();
  const likeNum = likeCalculator(likeCount);

  // 날짜 계산
  const timeCalculator = useTimeCalculate();
  const diff_date = timeCalculator(createdAt);

  const { extractHashTagsElement } = useHashTag();
  const extractContent = extractHashTagsElement(content);

  const [isSettingClick, setIsSettingClick] = useState(false);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const setIsLikeModalOpen = useSetRecoilState(isLikeModalOpenState);
  const setData = useSetRecoilState(feedDetailState);

  // 답글 관련
  const [value, setValue] = useRecoilState(commentState);
  const setCommentType = useSetRecoilState(commentTypeState);

  const { requestDeleteComment, requestCommentLike, requestDeleteCommentLike } =
    useFeedAPI();
  const profileClickHandler = () => {
    navigate(`/accounts/${nickname}`);
    setIsModalOpen(0);
  };

  const deleteHandler = () => {
    requestDeleteComment(commentId, isModalOpen, setData);
  };

  const likeHandler = () => {
    requestCommentLike(commentId, isModalOpen, setData);
  };

  const likeCancelHandler = () => {
    requestDeleteCommentLike(commentId, isModalOpen, setData);
  };

  const likeModalhandler = () => {
    setIsLikeModalOpen({ id: commentId, type: "comment" });
  };

  // 답글 달기 버튼
  const replyHandler = () => {
    setValue(`${value}@${nickname}`);
    setCommentType({ id: commentId, type: "innerComment", nickname: nickname });
  };
  const myNickname = localStorage.getItem("nickname");
  return (
    <S.ProfileWrapper>
      <S.ProfileImgBox onClick={profileClickHandler}>
        <S.ProfileImg src={userImg} />
      </S.ProfileImgBox>
      {/* 유저 이름 댓글 내용 */}
      <S.TextWrapper>
        <S.UserName onClick={profileClickHandler}>{nickname}</S.UserName>
        <S.CommentText>
          {extractContent.map((content) => {
            if (content.type === "tag") {
              return <a>{content.text}&nbsp;</a>;
            } else {
              return <span>{content.text}&nbsp;</span>;
            }
          })}
        </S.CommentText>
        {commentId !== -1 && (
          <S.CommentInfoWrapper>
            <S.UploadText>{`${diff_date}`}</S.UploadText>
            <React.Fragment>
              <S.InfoText onClick={likeModalhandler}>{`좋아요 ${likeNum}`}</S.InfoText>
              <S.InfoText onClick={replyHandler}>답글 달기</S.InfoText>
            </React.Fragment>
            <S.SettingWrapper>
              <S.SettingBox onClick={() => setIsSettingClick(!isSettingClick)}>
                <Icon.Horizontal size={16} />
              </S.SettingBox>
              {nickname == myNickname && isSettingClick && (
                <S.Delete onClick={deleteHandler}>삭제</S.Delete>
              )}
            </S.SettingWrapper>
          </S.CommentInfoWrapper>
        )}
      </S.TextWrapper>
      {/* 좋아요 */}
      {commentId !== -1 && (
        <React.Fragment>
          <S.IconWrapper>
            <S.IconBox onClick={likeHandler} isClick={likeStatus}>
              <Icon.Heart size={14} />
            </S.IconBox>
            <S.IconBoxFill onClick={likeCancelHandler} isClick={likeStatus}>
              <Icon.HeartFill size={14} />
            </S.IconBoxFill>
          </S.IconWrapper>
        </React.Fragment>
      )}
    </S.ProfileWrapper>
  );
}

export default CommentContent;
