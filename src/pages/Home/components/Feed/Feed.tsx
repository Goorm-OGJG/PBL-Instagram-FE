import * as S from "./Feed.style";
import * as Icon from "../../../../components/Icon";
// import { useState } from "react";
import FeedInput from "../FeedInput/FeedInput";
import FeedImages from "../FeedImages/FeedImages";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "../../../../recoil/homeState";
import { FeedData } from "../Feeds/Feeds";

interface PropsType {
  data: FeedData;
}

function Feed({ data }: PropsType) {
  const {
    userId,
    userImg,
    nickname,
    feedId,
    createdAt,
    content,
    likeCount,
    likeStatus,
    collectionStatus,
    feedMedia,
  } = { ...data };

  const setIsModalOpen = useSetRecoilState(isModalOpenState);

  // 좋아요
  const likeHandler = () => {
    // setTmpHeart(true);
    // 좋아요 요청 보내기
    alert("좋아요 요청!");
  };

  //좋아요 취소
  const likeCancelHandler = () => {
    // setTmpHeart(false);
    // 좋아요 취소 요청 보내기
    alert("좋아요 취소 요청!");
  };
  // console.log(content);

  // 댓글
  const commentHandler = () => {
    // alert("피드 상세모달 열기");
    setIsModalOpen(true);
  };

  const bookmarkHandler = () => {
    alert("보관함 요청");
  };

  const bookmarkCancelHandler = () => {
    alert("보관함 취소 요청");
  };

  return (
    <S.FeedWrapper id={feedId}>
      <S.InfoBox>
        <S.ProfileBox>
          <S.ProfileImg src={userImg} />
          <S.UserName id={userId}>{nickname}</S.UserName>
          <S.UploadDate>{createdAt}</S.UploadDate>
        </S.ProfileBox>
        <S.HorizontalIconBox>
          <Icon.HorizontalBold size={16} />
        </S.HorizontalIconBox>
      </S.InfoBox>
      <FeedImages feedMedia={feedMedia} />
      <S.FeedIconWrapper>
        <S.FeedIconLeftBox>
          <S.IconBox type="heart" onClick={likeHandler}>
            <Icon.Heart size={28} />
          </S.IconBox>
          <S.IconBox type="heart-fill" onClick={likeCancelHandler} isClick={likeStatus}>
            <Icon.HeartFill size={28} />
          </S.IconBox>
          <S.IconBox type="comment" onClick={commentHandler}>
            <Icon.Comment size={28} />
          </S.IconBox>
        </S.FeedIconLeftBox>
        <S.FeedIconRightBox>
          <S.IconBox type="bookmark" onClick={bookmarkHandler}>
            <Icon.Bookmark size={24} />
          </S.IconBox>
          <S.IconBox
            type="bookmark-fill"
            onClick={bookmarkCancelHandler}
            isClick={collectionStatus}
          >
            <Icon.BookmarkFill size={24} />
          </S.IconBox>
        </S.FeedIconRightBox>
      </S.FeedIconWrapper>
      <S.Div>
        <S.Span>
          {`좋아요 ${likeCount}`}개
          {/* <S.UserName>ohvely22</S.UserName>님 <S.UserName>여러 명</S.UserName>이
          좋아합니다 */}
        </S.Span>
      </S.Div>
      <S.Span>
        <S.Div>
          <S.UserName>{nickname}</S.UserName>
          <S.Span>{content}</S.Span>
        </S.Div>
      </S.Span>
      <S.Div>
        <S.Desc onClick={() => setIsModalOpen(true)}>댓글 123개 모두 보기</S.Desc>
      </S.Div>
      <FeedInput />
    </S.FeedWrapper>
  );
}

export default Feed;
