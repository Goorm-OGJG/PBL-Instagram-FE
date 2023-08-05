import * as S from "./Feed.style";
import * as Icon from "../../../../components/Icon";
import { useState } from "react";
import FeedInput from "../FeedInput/FeedInput";
import FeedImage from "../FeedImages/FeedImage";

function Feed() {
  const [tmpHeart, setTmpHeart] = useState<boolean>(false);
  const likeHandler = () => {
    setTmpHeart(true);
  };

  const likeCancelHandler = () => {
    setTmpHeart(false);
  };

  return (
    <S.FeedWrapper>
      <S.InfoBox>
        <S.ProfileBox>
          <S.ProfileImg src="https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg" />
          <S.UserName>tmp_username</S.UserName>
          <S.UploadDate>2일</S.UploadDate>
        </S.ProfileBox>
        <S.HorizontalIconBox>
          <Icon.HorizontalBold size={16} />
        </S.HorizontalIconBox>
      </S.InfoBox>
      <FeedImage />
      <S.FeedIconWrapper>
        <S.FeedIconLeftBox>
          <S.IconBox type="heart" onClick={likeHandler}>
            <Icon.Heart size={28} />
          </S.IconBox>
          <S.IconBox type="heart-fill" onClick={likeCancelHandler} isClick={tmpHeart}>
            <Icon.HeartFill size={28} />
          </S.IconBox>
          <S.IconBox type="comment">
            <Icon.Comment size={28} />
          </S.IconBox>
        </S.FeedIconLeftBox>
        <S.FeedIconRightBox>
          <S.IconBox type="bookmark">
            <Icon.Bookmark size={24} />
          </S.IconBox>
          <S.IconBox type="bookmark-fill">
            <Icon.BookmarkFill size={24} />
          </S.IconBox>
        </S.FeedIconRightBox>
      </S.FeedIconWrapper>
      <S.Div>
        <S.Span>
          <S.UserName>ohvely22</S.UserName>님 <S.UserName>여러 명</S.UserName>이
          좋아합니다
        </S.Span>
      </S.Div>
      <S.Span>
        <S.Div>
          <S.UserName>tmp_username</S.UserName>
          <S.Span>asdfsadfsadfsadf</S.Span>
        </S.Div>
      </S.Span>
      <S.Div>
        <S.Desc>댓글 123개 모두 보기</S.Desc>
      </S.Div>
      <FeedInput />
    </S.FeedWrapper>
  );
}

export default Feed;
