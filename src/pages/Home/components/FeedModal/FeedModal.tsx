import * as S from "./Feedmodal.style";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import Comment from "../Comment/Comment";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  commentIdState,
  commentState,
  commentTypeState,
  feedDetailState,
  innerCommentsState,
  isLikeModalOpenState,
  isModalOpenState,
} from "../../../../recoil/homeState";
import { useTimeCalculate } from "../../../../hooks/useTimeCalculate";
import { useLikeCalculate } from "../../../../hooks/useLikeCalcultate";
import { useFeedAPI } from "../../../../api/useFeedAPI";
import { useNavigate } from "react-router";

function FeedModal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const imgboxRef = useRef<HTMLDivElement | null>(null);
  // 이미지 이동 관련 state
  const [pos, setPos] = useState(0);
  const navigate = useNavigate();
  // console.log(isModalOpen);

  // API 관련
  const {
    requestFeedDetail,
    requestFeedCollection,
    requestDeleteFeedCollection,
    requestComment,
    requestFeedLike,
    requestDeleteFeedLike,
    requestDeleteFeed,
    requestPostInnerComment,
    // requestDeleteInnerComment,
    // requestInnerCommentLike,
    // requestDeleteInnerCommentLike,
  } = useFeedAPI();
  const [data, setData] = useRecoilState(feedDetailState);
  // 댓글 입력 값
  const [value, setValue] = useRecoilState(commentState);
  const [commentType, setCommentType] = useRecoilState(commentTypeState);
  const setInnerComments = useSetRecoilState(innerCommentsState);
  const setCommentId = useSetRecoilState(commentIdState);

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
    feedMedias,
    comments,
  } = data;

  const feedDescription = {
    userId,
    userImg,
    nickname,
    content,
    createdAt,
    likeCount,
    commentId: -1,
    innerCommentCount: 0,
    likeStatus,
  };
  // 날짜 계산
  const timeCalculate = useTimeCalculate();
  const diff_date = timeCalculate(createdAt);

  // 좋아요 개수 계산
  const likeCalculator = useLikeCalculate();
  const likeNum = likeCalculator(likeCount);

  const [isSettingClick, setIsSettingClick] = useState(false);

  const setIsLikeModal = useSetRecoilState(isLikeModalOpenState);

  // 렌더링 시 요청 보내기
  useEffect(() => {
    requestFeedDetail(isModalOpen, setData);
  }, []);

  // 이미지 이동 관련
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const rightHandler = () => {
    const current = imgboxRef.current;
    if (pos < feedMedias.length - 1) {
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
    requestFeedLike(feedId, setData);
  };

  //좋아요 취소
  const likeCancelHandler = () => {
    // 좋아요 취소 요청 보내기
    requestDeleteFeedLike(feedId, setData);
  };

  const moreCommentHandler = () => {
    alert("댓글 추가 요청");
  };

  const bookmarkHandler = () => {
    requestFeedCollection(feedId, setData);
  };

  const bookmarkCancelHandler = () => {
    requestDeleteFeedCollection(feedId, setData);
  };

  const likeModalHandler = () => {
    setIsLikeModal({ id: feedId, type: "feed" });
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!value.includes(`@${commentType.nickname}`)) {
      setCommentType({ id: -1, type: "comment", nickname: "" });
    }
  };

  const postHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const content = value;

    if (commentType.type === "comment") {
      requestComment(feedId, { content }, setData);
    } else if (commentType.type === "innerComment") {
      requestPostInnerComment(commentType.id, content);
    }
    setCommentType({ id: -1, type: "comment", nickname: "" });
    setValue("");
  };

  const profileClickHandler = () => {
    navigate(`/accounts/${nickname}`);
    setIsModalOpen(0);
  };

  const feedDeleteHandler = () => {
    requestDeleteFeed(feedId);
  };

  return (
    <S.Overlay>
      <S.CloseBox onClick={() => setIsModalOpen(0)}>
        <Icon.Close size={32} />
      </S.CloseBox>
      <S.Wrapper>
        <S.ImgBox>
          <S.Images ref={imgboxRef}>
            {feedMedias.map(({ mediaType, mediaId, mediaUrl }) => {
              if (mediaType === "video") {
                return (
                  <S.Img as="video" src={mediaUrl} key={mediaId} autoPlay loop muted />
                );
              } else if (mediaType === "img") {
                return <S.Img src={mediaUrl} key={mediaId} />;
              }
            })}
          </S.Images>
          {feedMedias.length > 1 && pos > 0 && (
            <S.LeftArrow onClick={leftHandler}>
              <Icon.Left />
            </S.LeftArrow>
          )}
          {feedMedias.length > 1 && (
            <S.RightArrow onClick={rightHandler}>
              <Icon.Right />
            </S.RightArrow>
          )}

          <S.PosBox>
            {feedMedias.length > 1 && feedMedias.map(() => <S.PosDot pos={pos} />)}
          </S.PosBox>
        </S.ImgBox>

        {/* 피드 모달 우측 정보들 */}
        <S.RightWrapper>
          {/* 피드 상단 게시한 유저 정보 */}
          <S.FeedHeader>
            <S.ProfileWrapper>
              <S.ProfileImgBox onClick={profileClickHandler}>
                <S.ProfileImg src={userImg} />
              </S.ProfileImgBox>
              <S.UserName onClick={profileClickHandler}>{nickname}</S.UserName>
            </S.ProfileWrapper>
            <S.IconBox onClick={() => setIsSettingClick(!isSettingClick)}>
              <Icon.Horizontal size={24} />
            </S.IconBox>
            {isSettingClick && <S.Delete onClick={feedDeleteHandler}>피드 삭제</S.Delete>}
          </S.FeedHeader>
          {/* 댓글 */}
          <S.Comments>
            <Comment comment={feedDescription} />
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.commentId} />
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
            <S.CommentInput
              placeholder="댓글 달기..."
              value={value}
              onChange={inputHandler}
            />
            <S.Button onClick={postHandler}>게시</S.Button>
          </S.CommentWrapper>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Overlay>
  );
}

export default FeedModal;
