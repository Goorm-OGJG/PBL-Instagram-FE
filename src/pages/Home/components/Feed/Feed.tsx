import { useState } from "react";
import * as S from "./Feed.style";
import * as Icon from "../../../../components/Icon";
// import { useState } from "react";
import FeedInput from "../FeedInput/FeedInput";
import FeedImages from "../FeedImages/FeedImages";
import { useSetRecoilState } from "recoil";
import { isLikeModalOpenState, isModalOpenState } from "../../../../recoil/homeState";
import { useTimeCalculate } from "../../../../hooks/useTimeCalculate";
import * as T from "../../../../types/client/feed.client";
import { useLikeCalculate } from "../../../../hooks/useLikeCalcultate";
import FeedMenu from "../FeedMenu/FeedMenu";
import { useNavigate } from "react-router";

interface PropsType {
  data: T.FeedDataType;
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

  const [isFeedMenuOpen, setIsFeedMenuOpen] = useState(false);
  const navigate = useNavigate();

  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const timeCalculator = useTimeCalculate();
  const diff_date = timeCalculator(createdAt);
  const likeCalculate = useLikeCalculate();
  const likeNum = likeCalculate(likeCount);
  const setIsLikeModalOpen = useSetRecoilState(isLikeModalOpenState);
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

  const likeModalHandler = () => {
    // alert("좋아요 모달 띄우기");
    setIsLikeModalOpen(true);
  };

  return (
    <S.FeedWrapper id={feedId}>
      <S.InfoBox>
        {isFeedMenuOpen && <FeedMenu />}
        <S.ProfileBox>
          <S.ProfileImg src={userImg} onClick={() => navigate(`/accounts/${nickname}`)} />
          <S.UserName id={userId} onClick={() => navigate(`/accounts/${nickname}`)}>
            {nickname}
          </S.UserName>
          <S.UploadDate>{diff_date}</S.UploadDate>
        </S.ProfileBox>
        <S.HorizontalIconBox onClick={() => setIsFeedMenuOpen(!isFeedMenuOpen)}>
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
        <S.LikeSpan onClick={likeModalHandler}>
          {`좋아요 ${likeNum}`}
          {/* <S.UserName>ohvely22</S.UserName>님 <S.UserName>여러 명</S.UserName>이
          좋아합니다 */}
        </S.LikeSpan>
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
