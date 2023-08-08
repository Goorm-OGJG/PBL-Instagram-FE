import * as S from "./Feedmodal.style";
import * as Icon from "../../../../components/Icon";
import * as COLOR from "../../../../constants/color";
import Comment from "../Comment/Comment";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { isModalOpenState } from "../../../../recoil/homeState";
// import { FeedData } from "../Feeds/Feeds";

function FeedModal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const imgboxRef = useRef<HTMLDivElement | null>(null);
  // 이미지 이동 관련 state
  const [pos, setPos] = useState(0);

  // 이미지 이동 관련
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const rightHandler = () => {
    const current = imgboxRef.current;
    if (pos < 2) {
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

  return (
    <S.Overlay>
      <S.CloseBox onClick={() => setIsModalOpen(false)}>
        <Icon.Close size={32} />
      </S.CloseBox>
      <S.Wrapper>
        <S.ImgBox>
          <S.Images ref={imgboxRef}>
            <S.Img src="https://images.pexels.com/photos/17836360/pexels-photo-17836360.jpeg"></S.Img>
            <S.Img src="https://images.pexels.com/photos/17836360/pexels-photo-17836360.jpeg"></S.Img>
            <S.Img src="https://images.pexels.com/photos/17836360/pexels-photo-17836360.jpeg"></S.Img>
          </S.Images>
          <S.LeftArrow onClick={leftHandler}>
            <Icon.Left />
          </S.LeftArrow>
          <S.RightArrow onClick={rightHandler}>
            <Icon.Right />
          </S.RightArrow>
          <S.PosBox>
            <S.PosDot pos={pos} />
            <S.PosDot pos={pos} />
            <S.PosDot pos={pos} />
          </S.PosBox>
        </S.ImgBox>

        {/* 피드 모달 우측 정보들 */}
        <S.RightWrapper>
          {/* 피드 상단 게시한 유저 정보 */}
          <S.FeedHeader>
            <S.ProfileWrapper>
              <S.ProfileImgBox>
                <S.ProfileImg src="https://cdn.pixabay.com/photo/2023/07/30/00/12/cat-8157889_1280.png" />
              </S.ProfileImgBox>
              <S.UserName to="/home">username</S.UserName>
            </S.ProfileWrapper>
            <S.IconBox>
              <Icon.Horizontal size={24} />
            </S.IconBox>
          </S.FeedHeader>
          {/* 댓글 */}
          <S.Comments>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <S.AddCircleBox>
              <S.AddCircle>
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
              <S.IconFillBox onClick={likeCancelHandler}>
                <Icon.HeartFill size={28} color={COLOR.Red1} />
              </S.IconFillBox>
            </S.IconWrapper>
            {/* 보관함 */}
            <S.IconWrapper>
              <S.IconBox>
                <Icon.Bookmark size={24} />
              </S.IconBox>
              <S.IconFillBox>
                <Icon.BookmarkFill size={24} />
              </S.IconFillBox>
            </S.IconWrapper>
          </S.Icons>
          {/* 좋아요 개수, 게시일*/}
          <S.LikeUploadWrapper>
            <S.LikeText>좋아요 18.9만개</S.LikeText>
            <S.UploadText>2일 전</S.UploadText>
          </S.LikeUploadWrapper>
          {/* 댓글입력 */}
          <S.CommentWrapper>
            <S.CommentInput placeholder="댓글 달기..." />
            <S.Button>게시</S.Button>
          </S.CommentWrapper>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Overlay>
  );
}

export default FeedModal;
