import * as S from "./UserProfile.style";

export interface PropsType {
  type?: string;
}

function UserProfile({ type }: PropsType) {
  return (
    <S.Profile>
      <S.ProfileWrapper>
        <S.ProfileLink to="/accounts/tmp_username">
          <S.ProfileImg
            src="https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg"
            type={type}
          ></S.ProfileImg>
        </S.ProfileLink>
        <S.ProfileTextBox>
          <S.ProfileLink to="/accounts/tmp_username" type={type}>
            tmp_username
          </S.ProfileLink>
          <S.ProfileContent type={type}>tmp_username</S.ProfileContent>
        </S.ProfileTextBox>
      </S.ProfileWrapper>
      {type === "my" || <S.Button>팔로우</S.Button>}
    </S.Profile>
  );
}

export default UserProfile;
