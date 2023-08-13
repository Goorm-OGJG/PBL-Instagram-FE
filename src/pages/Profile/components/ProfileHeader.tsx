import * as S from "./ProfileHeader.style";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import FollowerModal from "./FollowerModal";
import { useRecoilValue } from "recoil";
import {ProfileState } from "../../../recoil/profileState";
import { ProfileResponseType } from "../../../types/client/profile.client";
// import useFollowAPI from "../../../api/useFollowAPI";
// import * as T from "../../../types/client/follower.client";

interface Account {
  id: number;
  nickname: string;
  profileImg: string;
  userIntro: string;
  followerCount: number;
  followingCount: number;
  feedCount: number;
  followingStatus: boolean;
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
    followingStatus: false,
    secretStatus: "비공개 상태",
  },
];

function ProfileHeader() {
  const localIdString = localStorage.getItem('userId');
  const localId = localIdString !== null ? parseInt(localIdString) : null; // localStorage 값
  const { nickname } = useParams();
  const navigate = useNavigate();
  const [followerModal, setFollowerModal] = useState<boolean>(false);
  const [followModal, setFollowModal] = useState<boolean>(false);
  const profileInfo = useRecoilValue<ProfileResponseType>(ProfileState); // 받아온 프로필 정보 데이터
  const profileUserId = profileInfo.userId;
  const isSecret = profileInfo.isSecret;
  //🔥 const {requestDeleteFollower} = useFollowAPI();
  //🔥 const [blueColor, setBlueColor] = useState<boolean>(false);
  //🔥 const handleCompareNickName = () => {
  //   if (localId === profileUserId) {
  //     navigate(`/accounts/${nickname}/edit`);
  //   } else if (
    //     profileInfo.followingStatus === false
    //     localId !== profileUserId &&
  //   ) {
  //     setBlueColor(true);
  //     requestPostFollowing(localId,profileUserId);
  //   } else if (
  //     localId !== profileUserId &&
  //     profileInfo.followingStatus === true
  //   ) {
  //     requestDeleteFollower(localId,profileUserId);
  //     console.log("팔로우 취소 delete");
  //   }
  // };
  
  
  return (
    <S.ProfileWrapper>
      <S.ProfileHeader>
        <S.UserImgBox>
          <S.UserImgInnerBox>
            <S.UserButton>
              <S.UserImg src={accounts[0].profileImg} alt="profileImg" />
              {/*🔥 profileInfo.profileImg */}
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
                // 🔥 handleCompareNickName();
              }}
            >
              프로필 편집
              {/* 🔥 {localId === profileUserId?"프로필 편집"
                : profileInfo.followingStatus === false
                ? "팔로우 하기" : "팔로우 취소"} */}
            </S.EditProfileBtn>
          </S.InfoHeader>
          <S.InfoFollowBox>
            <S.UserPost>게시물 {accounts[0].feedCount}</S.UserPost>
            {/*🔥 profileInfo.feedCount */}
            <S.UserFollowing
              onClick={() => {
                //🔥 isSecret에 ! 느낌표 처리 할 것
                if (!isSecret){
                setFollowerModal((prev) => !prev);
                }
              }}
            >
              팔로워 {accounts[0].followerCount}
              {/* 🔥 profileInfo.followerCount */}
            </S.UserFollowing>
            {followerModal && (
              <FollowerModal
                //🔥 followerData={followerData}
                followerModal={followerModal}
                setFollowerModal={setFollowerModal}
                followModal={followModal}
                setFollowModal={setFollowModal}
              />
            )}
            <S.UserFollower
              
              onClick={() => {
                //🔥 isSecret에 ! 느낌표 처리 할 것
                if (!isSecret){
                setFollowModal((prev) => !prev);
              }
            }}
            >
              {" "}
              팔로우 {accounts[0].followingCount}
              {/*🔥 profileInfo.followingCount */}
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
          {/* 🔥{profileInfo.userIntro} */}
        </S.ProfileInfoBox>
      </S.ProfileHeader>
    </S.ProfileWrapper>
  );
}

export default ProfileHeader;
