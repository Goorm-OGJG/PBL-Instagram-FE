import * as S from "./UserProfile.style";

export interface PropsType {
  type?: string;
  profileImg?: string;
  nickname?: string;
}

function UserProfile({ type, nickname, profileImg }: PropsType) {
  return (
    <S.Profile>
      <S.ProfileWrapper>
        <S.ProfileLink to={`/accounts/${nickname}`}>
          <S.ProfileImg src={profileImg} type={type}></S.ProfileImg>
        </S.ProfileLink>
        <S.ProfileTextBox>
          <S.ProfileLink to={`/accounts/${nickname}`} type={type}>
            {nickname}
          </S.ProfileLink>
          {/* <S.ProfileContent type={type}>{nickname}</S.ProfileContent> */}
        </S.ProfileTextBox>
      </S.ProfileWrapper>
      {/* {type === "my" || <S.Button>팔로우</S.Button>} */}
    </S.Profile>
  );
}

export default UserProfile;
