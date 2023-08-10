import * as S from "./EditProfile.style";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";
import { useState } from "react";
import Toggle from "./components/Toggle";
import { useParams } from "react-router";

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
  const {nickname} = useParams();
  const [text, setText] = useState("");
  const [countText, setCountText] = useState(0);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      // 폼 제출 기본 동작 막기
      e.preventDefault();
      setText(text + "\n");
      setCountText((prev) => prev + 1);
    }
  };

  return (
    <S.EditProfileWrapper>
      <S.EditHeader>프로필 편집</S.EditHeader>
      <S.EditUserInfo fontSize={FONT.L}>
        <S.EditUserImgBox>
          <S.UserImg src={accounts.profileImg} alt="profileImg" />
        </S.EditUserImgBox>
        <S.EditUserTextBox>
          <S.UserNickname>{nickname}</S.UserNickname>
          <S.UserImgEditBtn>프로필 사진 바꾸기</S.UserImgEditBtn>
        </S.EditUserTextBox>
      </S.EditUserInfo>

      <S.EditEtcForm>
        <S.EditIntroBox>
          <S.EctTitle>소개</S.EctTitle>
          <S.InputBox>
            <S.IntroInput
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setCountText(e.target.value.length);
              }}
              onKeyPress={handleKeyPress}
            />
            <S.InputCounter>{countText}/150</S.InputCounter>
          </S.InputBox>
        </S.EditIntroBox>
        <S.EditRecommendBox>
          <S.EctTitle>프로필 계정 추천 표시</S.EctTitle>
          <S.RecommendCheckBox type="checkbox" />
          <S.RecommendExplain>
            사람들이 회원님의 프로필에서 비슷한 계정 추천을 볼 수 있는지와 회원님의 계정이
            다른 프로필에서 추천될 수 있는지를 선택하세요.
          </S.RecommendExplain>
        </S.EditRecommendBox>
        <S.PrivateHeader>내 콘텐츠를 볼 수 있는 사람</S.PrivateHeader>

        <S.EditPrivateBox>
          <S.PrivateTitle>계정 공개 범위</S.PrivateTitle>
          <S.PrivateTitle>
            비공개 계정
            {/* <S.PrivateRable>
              <S.PrivateCheckBox type="checkbox"></S.PrivateCheckBox>
              </S.PrivateRable> */}
            <S.ToggleBox>
              <Toggle />
            </S.ToggleBox>
          </S.PrivateTitle>

          <S.PrivateExplain>
            계정이 공개 상태인 경우 Instagram 계정이 없는 사람을 포함해서 Instagram 안팎의
            모든 사람이 프로필과 게시물을 볼 수 있습니다. <br />
            계정이 비공개 상태인 경우 회원님이 승인한 팔로워만 회원님이 공유하는
            콘텐츠(해시태그 및 위치 페이지의 사진 또는 동영상 포함), 팔로워 및 팔로잉
            리스트를 볼 수 있습니다.
          </S.PrivateExplain>
          <S.EditBtnBox>
            <S.EditProfileBtn>제출</S.EditProfileBtn>
          </S.EditBtnBox>
        </S.EditPrivateBox>
      </S.EditEtcForm>
    </S.EditProfileWrapper>
  );
}

export default EditProfile;
