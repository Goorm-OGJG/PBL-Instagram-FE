import { useSearchAPI } from "../../../../api/useSearchAPI";
import { SearchUserType } from "../../../../types/client/search.client";
import UserProfile from "../UserProfile/UserProfile";
import * as S from "./SideUserRecommend.style";
import { useEffect, useState } from "react";

function SideUserRecommend() {
  const [data, setData] = useState<SearchUserType[]>([]);
  const { requestUserList } = useSearchAPI();
  useEffect(() => {
    requestUserList("", "user", 0, 10, setData);
  }, []);
  const myName = localStorage.getItem("nickname") as string;
  const myProfileImg = localStorage.getItem("userImg") as string;

  return (
    <S.Wrapper>
      {/* 내 프로필 */}
      <UserProfile type="my" nickname={myName} profileImg={myProfileImg} />
      {/* 다른 유저 추천 */}
      <S.UserProfileBox>
        <S.TextBox>
          <S.Span>회원님을 위한 추천</S.Span>
          <S.ViewAll to="/home">모두 보기</S.ViewAll>
        </S.TextBox>
        <S.UserProfiles>
          {data.length > 0 &&
            data.map((user) => (
              <UserProfile
                key={user.nickname}
                nickname={user.nickname}
                profileImg={user.profileImg}
              />
            ))}
        </S.UserProfiles>
      </S.UserProfileBox>
    </S.Wrapper>
  );
}

export default SideUserRecommend;
