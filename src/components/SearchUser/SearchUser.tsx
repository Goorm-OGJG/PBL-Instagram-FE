import { SearchUserType } from "../../types/client/search.client";
import * as S from "./SearchUser.style";

interface Props {
  type?: string;
  user: SearchUserType;
  isUser: boolean;
}

function SearchUser({ user, isUser }: Props) {
  const { nickname, profileImg, userIntro, tagName, totalFeedCount } = user;
  return (
    <S.UserBox to={`./accounts/${nickname}`}>
      {!isUser ? <S.Tag>#</S.Tag> : <S.UserImg src={profileImg} />}
      <S.TextBox>
        <S.UserName>{!isUser ? tagName : nickname}</S.UserName>
        <S.UserDescBox>
          <S.UserDesc>{!isUser ? `게시물 ${totalFeedCount}` : userIntro}</S.UserDesc>
          {/* <S.MiddleDot>·</S.MiddleDot>
          <S.UserDesc>임시 유저이름입니다</S.UserDesc> */}
        </S.UserDescBox>
      </S.TextBox>
    </S.UserBox>
  );
}

export default SearchUser;
