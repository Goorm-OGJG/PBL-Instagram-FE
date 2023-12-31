import * as S from "./InnerCommentContent.style";
import * as Icon from "../../../../components/Icon";
import { useLikeCalculate } from "../../../../hooks/useLikeCalcultate";
import { useTimeCalculate } from "../../../../hooks/useTimeCalculate";
import React, { useState } from "react";
import { useHashTag } from "../../../../hooks/useHashTag";
import { useNavigate } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  InnerCommentType,
  commentState,
  commentTypeState,
  isLikeModalOpenState,
  isModalOpenState,
} from "../../../../recoil/homeState";
import { useFeedAPI } from "../../../../api/useFeedAPI";

interface PropsType {
  innerComment: InnerCommentType;
  setInnerComments: React.Dispatch<React.SetStateAction<InnerCommentType[]>>;
  commentId: number;
}

function InnerCommentContent({ innerComment, setInnerComments, commentId }: PropsType) {
  const {
    innerCommentId,
    content,
    likeStatus,
    likeCount,
    createdAt,
    innerCommentWriter: { nickname, userImg },
  } = innerComment;
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
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setIsLikeModalOpen = useSetRecoilState(isLikeModalOpenState);

  const setCommentType = useSetRecoilState(commentTypeState);
  const [value, setValue] = useRecoilState(commentState);

  const {
    requestDeleteInnerComment,
    requestInnerCommentLike,
    requestDeleteInnerCommentLike,
  } = useFeedAPI();

  const profileClickHandler = () => {
    navigate(`/accounts/${nickname}`);
    setIsModalOpen(0);
  };

  const deleteHandler = () => {
    requestDeleteInnerComment(innerCommentId, setInnerComments, commentId);
  };

  const likeHandler = () => {
    requestInnerCommentLike(innerCommentId, setInnerComments, commentId);
  };

  const likeCancelHandler = () => {
    requestDeleteInnerCommentLike(innerCommentId, setInnerComments, commentId);
  };

  const likeModalhandler = () => {
    setIsLikeModalOpen({ id: innerCommentId, type: "innerComment" });
  };

  const replyHandler = () => {
    setValue(`${value}@${nickname}`);
    setCommentType({ id: commentId, type: "innerComment", nickname: nickname });
  };

  const myNickname = localStorage.getItem("nickname");
  const tagHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof HTMLSpanElement) {
      const tag = e.target.getAttribute("tag");
      // console.log(tag);
      navigate(`/explore/tags/${tag}`);
    }
  };

  return (
    <S.ProfileWrapper>
      <S.ProfileImgBox onClick={profileClickHandler}>
        <S.ProfileImg src={userImg} />
      </S.ProfileImgBox>
      {/* 유저 이름 댓글 내용 */}
      <S.TextWrapper>
        <S.UserName onClick={profileClickHandler}>{nickname}</S.UserName>
        <S.CommentText
          onClick={tagHandler}
          dangerouslySetInnerHTML={{ __html: extractContent }}
        ></S.CommentText>
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
      </S.TextWrapper>
      {/* 좋아요 */}
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
    </S.ProfileWrapper>
  );
}

export default InnerCommentContent;
