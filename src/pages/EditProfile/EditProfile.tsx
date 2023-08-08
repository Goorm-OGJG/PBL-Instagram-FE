import * as S from "./EditProfile.style";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

interface Account {
  id: number;
  nickname: string;
  profileImg: string;
}
const accounts: Account = {
  id: 1,
  nickname: "JamesJoe",
  profileImg:
    "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
};

function EditProfile() {
  return (
    <S.EditProfileWrapper>
      <S.EditHeader>프로필 편집</S.EditHeader>
      <S.EditUserInfo fontSize={FONT.L}>
        <S.EditUserImgBox>
          <S.UserImg src={accounts.profileImg} alt="profileImg" />
        </S.EditUserImgBox>
        <S.EditUserTextBox>
          <S.UserNickname>{accounts.nickname}</S.UserNickname>
          <S.UserImgEditBtn>프로필 사진 바꾸기</S.UserImgEditBtn>
        </S.EditUserTextBox>
      </S.EditUserInfo>

        <S.EditEtcForm>
          <S.EditIntroBox>
          <S.EctTitle>소개</S.EctTitle>
          <S.IntroInput/>
          </S.EditIntroBox>
          <S.EditRecommendBox>
          <S.EctTitle fontSize={FONT.M} fontWeight={FONT.Bold}>프로필 계정 추천 표시</S.EctTitle> 
          <S.RecommendCheckBox type="checkbox"/>
            <S.RecommendExplain>
            사람들이 회원님의
            프로필에서 비슷한 계정 추천을 볼 수 있는지와 회원님의 계정이 다른 프로필에서
            추천될 수 있는지를 선택하세요.</S.RecommendExplain>
          </S.EditRecommendBox>
        </S.EditEtcForm>
    </S.EditProfileWrapper>
  );
}

export default EditProfile;
