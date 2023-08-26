import { useRecoilValue } from "recoil";
import useFollowAPI from "../../api/useFollowAPI";
import { useSearchAPI } from "../../api/useSearchAPI";
import { SearchUserType } from "../../types/client/search.client";
import * as S from "./SearchUser.style";
import React from "react";
import { searchValueState } from "../../recoil/homeState";

interface Props {
  type?: string;
  user: SearchUserType;
  isUser: boolean;
  setData?: React.Dispatch<React.SetStateAction<SearchUserType[]>>;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchUser({ user, isUser, setData, setIsUser }: Props) {
  const {
    nickname,
    profileImg,
    userIntro,
    tagName,
    totalFeedCount,
    followingStatus,
    userId,
  } = user;

  const value = useRecoilValue(searchValueState);

  const { requestPostFollowing, requestDeleteFollowing } = useFollowAPI();
  const { requestIdSearch } = useSearchAPI();

  const followHandler = async () => {
    const followId = userId as number;
    await requestPostFollowing(followId);
    if (setData) {
      requestIdSearch(value, "user", 0, 100, setData, setIsUser);
    }
  };

  const followCancelHandler = async () => {
    const followId = userId as number;
    await requestDeleteFollowing(followId);
    if (setData) {
      requestIdSearch(value, "user", 0, 100, setData, setIsUser);
    }
  };

  return (
    <S.UserBox>
      <S.User to={isUser ? `/accounts/${nickname}` : `/explore/tags/${tagName}`}>
        {!isUser ? <S.Tag>#</S.Tag> : <S.UserImg src={profileImg} />}
        <S.TextBox>
          <S.UserName>{!isUser ? tagName : nickname}</S.UserName>
          <S.UserDescBox>
            <S.UserDesc>{!isUser ? `게시물 ${totalFeedCount}` : userIntro}</S.UserDesc>
            {/* <S.MiddleDot>·</S.MiddleDot>
          <S.UserDesc>임시 유저이름입니다</S.UserDesc> */}
          </S.UserDescBox>
        </S.TextBox>
      </S.User>
      {isUser && (
        <React.Fragment>
          {followingStatus || <S.Follow onClick={followHandler}>팔로우</S.Follow>}
          {followingStatus && (
            <S.FollowCancel onClick={followCancelHandler}>팔로우 취소</S.FollowCancel>
          )}
        </React.Fragment>
      )}
    </S.UserBox>
  );
}

export default SearchUser;
