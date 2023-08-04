import UserProfile from "./UserProfile";
import * as S from "./SideUserRecommend.style";

function SideUserRecommend() {
  return (
    <S.Wrapper>
      {/* 내 프로필 */}
      <UserProfile type="my" />
      {/* 다른 유저 추천 */}
      <S.UserProfileBox>
        <S.TextBox>
          <S.Span>회원님을 위한 추천</S.Span>
          <S.ViewAll to="/home">모두 보기</S.ViewAll>
        </S.TextBox>
        <S.UserProfiles>
          <UserProfile />
          <UserProfile />
        </S.UserProfiles>
      </S.UserProfileBox>
    </S.Wrapper>
  );
}

export default SideUserRecommend;
