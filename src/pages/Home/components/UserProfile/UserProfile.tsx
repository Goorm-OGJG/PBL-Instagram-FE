import useFollowAPI from "../../../../api/useFollowAPI";
import { useSearchAPI } from "../../../../api/useSearchAPI";
import { SearchUserType } from "../../../../types/client/search.client";
import * as S from "./UserProfile.style";

export interface PropsType {
  type?: string;
  profileImg?: string;
  nickname?: string;
  followingStatus?: boolean;
  userId?: number;
  setData?: React.Dispatch<React.SetStateAction<SearchUserType[]>>;
}

function UserProfile({
  type,
  nickname,
  profileImg,
  followingStatus,
  userId,
  setData,
}: PropsType) {
  const { requestPostFollowing, requestDeleteFollowing } = useFollowAPI();
  const { requestUserList } = useSearchAPI();

  const followHandler = async () => {
    const followId = userId as number;
    await requestPostFollowing(followId);
    if (setData) {
      requestUserList("", "user", 0, 10, setData);
    }
  };

  const followCancelHandler = async () => {
    const followId = userId as number;
    await requestDeleteFollowing(followId);
    if (setData) {
      requestUserList("", "user", 0, 10, setData);
    }
  };

  return (
    <S.Profile>
      <S.ProfileWrapper>
        <S.ProfileLink to={`/accounts/${nickname}`}>
          <S.ProfileImg src={profileImg}></S.ProfileImg>
        </S.ProfileLink>
        <S.ProfileTextBox>
          <S.ProfileLink to={`/accounts/${nickname}`} type={type}>
            {nickname}
          </S.ProfileLink>
          <S.ProfileContent type={type}>{nickname}</S.ProfileContent>
        </S.ProfileTextBox>
      </S.ProfileWrapper>
      {type === "my" ||
        (!followingStatus && <S.Button onClick={followHandler}>팔로우</S.Button>)}
      {type === "my" ||
        (followingStatus && (
          <S.CancelButton onClick={followCancelHandler}>팔로우 취소</S.CancelButton>
        ))}
    </S.Profile>
  );
}

export default UserProfile;
