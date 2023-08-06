import * as S from "./CommentContent.style";
import * as Icon from "../../../../components/Icon";

function CommentContent() {
  return (
    <S.ProfileWrapper>
      <S.ProfileImgBox>
        <S.ProfileImg src="https://cdn.pixabay.com/photo/2023/07/30/00/12/cat-8157889_1280.png" />
      </S.ProfileImgBox>
      {/* 유저 이름 댓글 내용 */}
      <S.TextWrapper>
        <S.UserName to="/home">username</S.UserName>
        <S.CommentText>sdfsdf dsadas sdasdad adasdasdsssss asdas sdasd </S.CommentText>
        <S.CommentInfoWrapper>
          <S.UploadText>2일</S.UploadText>
          <S.InfoText>좋아요 264개</S.InfoText>
          <S.InfoText>답글 달기</S.InfoText>

          <S.SettingBox>
            <Icon.Horizontal size={16} />
          </S.SettingBox>
        </S.CommentInfoWrapper>
      </S.TextWrapper>
      {/* 좋아요 */}
      <S.IconWrapper>
        <S.IconBox>
          <Icon.Heart size={14} />
        </S.IconBox>
        <S.IconBoxFill>
          <Icon.HeartFill size={14} />
        </S.IconBoxFill>
      </S.IconWrapper>
    </S.ProfileWrapper>
  );
}

export default CommentContent;
