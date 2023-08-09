import * as S from "./Feedmodal.style";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import Comment from "../Comment/Comment";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { isModalOpenState } from "../../../../recoil/homeState";
import * as T from "../../../../types/client/feed.client";
import { useTimeCalculate } from "../../../../hooks/useTimeCalculate";
import { useLikeCalculate } from "../../../../hooks/useLikeCalcultate";
import { useHashTag } from "../../../../hooks/useHashTag";

function FeedModal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const imgboxRef = useRef<HTMLDivElement | null>(null);

  // 이미지 이동 관련 state
  const [pos, setPos] = useState(0);

  // 댓글 입력 값
  const [value, setValue] = useState("");
  const tmpData: T.FeedDetailType = {
    feedId: "feed123",
    userId: "user456",
    nickname: "Alice",
    userImg: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
    content: "오늘의 풍경 너무 아름다워요! 😍",
    likeCount: 25,
    likeStatus: true,
    collectionStatus: true,
    createdAt: "2023-08-08T12:34:56",
    feedMedia: [
      {
        mediaId: "media789",
        mediaType: "image",
        mediaUrl: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
      },
      {
        mediaId: "media999",
        mediaType: "video",
        mediaUrl:
          "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/videos/people_-_84973+(720p).mp4",
      },
    ],
    comments: [
      {
        commentId: "comment001",
        userId: "user789",
        nickname: "Bob",
        userImg: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
        content: "정말 멋진 사진이에요!",
        likeCount: 12,
        likeStatus: false,
        createdAt: "2023-08-08 10:30:00",
        innerCommentCount: 2,
      },
      {
        commentId: "comment002",
        userId: "user101",
        nickname: "Charlie",
        userImg: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
        content: "저도 이 풍경 구경하고 싶어요!",
        likeCount: 8,
        likeStatus: true,
        createdAt: "2023-08-08 11:15:00",
        innerCommentCount: 0,
      },
    ],
  };

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
    comments,
  } = tmpData;

  const feedDescription = {
    userId,
    userImg,
    nickname,
    content,
    createdAt,
    likeCount,
    commentId: "feed_desc",
    innerCommentCount: 0,
    likeStatus,
  };
  // 날짜 계산
  const timeCalculate = useTimeCalculate();
  const diff_date = timeCalculate(createdAt);

  // 좋아요 개수 계산
  const likeCalculator = useLikeCalculate();
  const likeNum = likeCalculator(likeCount);

  const extractHashtags = useHashTag();

  // 이미지 이동 관련
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const rightHandler = () => {
    const current = imgboxRef.current;
    if (pos < feedMedia.length - 1) {
      current?.scrollBy(800, 0);
      setPos(pos + 1);
    }
  };

  const leftHandler = () => {
    const current = imgboxRef.current;
    current?.scrollBy(-800, 0);
    if (pos > 0) {
      current?.scrollBy(-800, 0);
      setPos(pos - 1);
    }
  };

  // 좋아요, 좋아요 취소
  const likeHandler = () => {
    // 좋아요 요청 보내기
    alert("좋아요 요청!");
  };

  //좋아요 취소
  const likeCancelHandler = () => {
    // 좋아요 취소 요청 보내기
    alert("좋아요 취소 요청!");
  };

  const moreCommentHandler = () => {
    alert("댓글 추가 요청");
  };

  const bookmarkHandler = () => {
    alert("보관함 요청");
  };

  const bookmarkCancelHandler = () => {
    alert("보관함 취소 요청");
  };

  const likeModalHandler = () => {
    alert("좋아요 모달 요청");
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const postHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const hashTags = extractHashtags(value);
    console.log(hashTags);
  };
  // console.log(comments);
  console.log(feedMedia);
  return (
    <S.Overlay>
      <S.CloseBox onClick={() => setIsModalOpen(false)}>
        <Icon.Close size={32} />
      </S.CloseBox>
      <S.Wrapper id={feedId}>
        <S.ImgBox>
          <S.Images ref={imgboxRef}>
            {feedMedia.map(({ mediaType, mediaId, mediaUrl }) => {
              if (mediaType === "video") {
                return (
                  <S.Img as="video" src={mediaUrl} id={mediaId} autoPlay loop muted />
                );
              } else if (mediaType === "image") {
                return <S.Img src={mediaUrl} id={mediaId} />;
              }
            })}
          </S.Images>
          {feedMedia.length > 1 && pos > 0 && (
            <S.LeftArrow onClick={leftHandler}>
              <Icon.Left />
            </S.LeftArrow>
          )}
          {feedMedia.length > 1 && (
            <S.RightArrow onClick={rightHandler}>
              <Icon.Right />
            </S.RightArrow>
          )}

          <S.PosBox>
            {feedMedia.length > 1 && feedMedia.map(() => <S.PosDot pos={pos} />)}
          </S.PosBox>
        </S.ImgBox>

        {/* 피드 모달 우측 정보들 */}
        <S.RightWrapper>
          {/* 피드 상단 게시한 유저 정보 */}
          <S.FeedHeader>
            <S.ProfileWrapper>
              <S.ProfileImgBox>
                <S.ProfileImg src={userImg} />
              </S.ProfileImgBox>
              <S.UserName to="/home">{nickname}</S.UserName>
            </S.ProfileWrapper>
            <S.IconBox>
              <Icon.Horizontal size={24} />
            </S.IconBox>
          </S.FeedHeader>
          {/* 댓글 */}
          <S.Comments>
            <Comment comment={feedDescription} />
            {comments.map((comment) => (
              <Comment comment={comment} />
            ))}
            {/* 댓글 더보기 */}
            <S.AddCircleBox>
              <S.AddCircle onClick={moreCommentHandler}>
                <Icon.AddCircle size={32} />
              </S.AddCircle>
            </S.AddCircleBox>
          </S.Comments>
          {/* 좋아요 보관함 아이콘 */}
          <S.Icons>
            {/* 좋아요 */}
            <S.IconWrapper>
              <S.IconBox onClick={likeHandler}>
                <Icon.Heart size={28} />
              </S.IconBox>
              <S.IconFillBox onClick={likeCancelHandler} isClick={likeStatus}>
                <Icon.HeartFill size={28} color={COLOR.Red1} />
              </S.IconFillBox>
            </S.IconWrapper>
            {/* 보관함 */}
            <S.IconWrapper>
              <S.IconBox onClick={bookmarkHandler}>
                <Icon.Bookmark size={24} />
              </S.IconBox>
              <S.IconFillBox onClick={bookmarkCancelHandler} isClick={collectionStatus}>
                <Icon.BookmarkFill size={24} />
              </S.IconFillBox>
            </S.IconWrapper>
          </S.Icons>
          {/* 좋아요 개수, 게시일*/}
          <S.LikeUploadWrapper>
            <S.LikeText onClick={likeModalHandler}>{`좋아요 ${likeNum}`}</S.LikeText>
            <S.UploadText>{diff_date}</S.UploadText>
          </S.LikeUploadWrapper>
          {/* 댓글입력 */}
          <S.CommentWrapper>
            <S.CommentInput placeholder="댓글 달기..." onChange={inputHandler} />
            <S.Button onClick={postHandler}>게시</S.Button>
          </S.CommentWrapper>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Overlay>
  );
}

export default FeedModal;
