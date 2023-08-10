import * as S from "./ProfileHeader.style";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import FollowerModal from "./FollowerModal";

interface Account {
  id: number;
  nickname: string;
  profileImg: string;
  userIntro: string;
  followerCount: number;
  followingCount: number;
  feedCount: number;
  followingStatus: string;
  secretStatus: string;
}

const accounts: Account[] = [
  {
    id: 1,
    nickname: "JamesJoe",
    profileImg:
      "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
    userIntro: "asdasdasdasdasdadasdasdadsadasdasdasdsd",
    followerCount: 103,
    followingCount: 130,
    feedCount: 42,
    followingStatus: "팔로잉 상태",
    secretStatus: "비공개 상태",
  },
];

function ProfileHeader() {
  const { nickname } = useParams();
  const navigate = useNavigate();
  const [followerModal, setFollowerModal] = useState(false);
  const [followModal, setFollowModal] = useState(false);
  return (
    <S.ProfileWrapper>
      <S.ProfileHeader>
        <S.UserImgBox>
          <S.UserImgInnerBox>
            <S.UserButton>
              <S.UserImg src={accounts[0].profileImg} alt="profileImg" />
            </S.UserButton>
          </S.UserImgInnerBox>
        </S.UserImgBox>
        <S.ProfileInfoBox>
          <S.InfoHeader>
            <S.UserNickName>
              <S.NickName>{nickname}</S.NickName>
            </S.UserNickName>
            <S.EditProfileBtn
              onClick={() => {
                navigate(`/accounts/${nickname}/edit`);
              }}
            >
              프로필 편집
            </S.EditProfileBtn>
          </S.InfoHeader>
          <S.InfoFollowBox>
            <S.UserPost>게시물 {accounts[0].feedCount}</S.UserPost>
            <S.UserFollowing
              onClick={() => {
                setFollowerModal((prev) => !prev);
              }}
            >
              팔로워 {accounts[0].followerCount}
            </S.UserFollowing>
            {followerModal && (
              <FollowerModal
                followerModal={followerModal}
                setFollowerModal={setFollowerModal}
                followModal={followModal}
                setFollowModal={setFollowModal}
              />
            )}
            <S.UserFollower
              onClick={() => {
                setFollowModal((prev) => !prev);
              }}
            >
              {" "}
              팔로우 {accounts[0].followingCount}
            </S.UserFollower>
            {followModal && (
              <FollowerModal
                followerModal={followerModal}
                setFollowerModal={setFollowerModal}
                followModal={followModal}
                setFollowModal={setFollowModal}
              />
            )}
          </S.InfoFollowBox>
          <S.UserIntro>{accounts[0].userIntro}</S.UserIntro>
        </S.ProfileInfoBox>
      </S.ProfileHeader>
    </S.ProfileWrapper>
  );
}

export default ProfileHeader;
