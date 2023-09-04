import * as S from "./ProfileHeader.style";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import FollowerModal from "./FollowerModal";
import { useRecoilState } from "recoil";
import { ProfileState } from "../../../recoil/profileState";
import { ProfileResponseType } from "../../../types/client/profile.client";
import useProfileAPI from "../../../api/useProfileAPI";
import useFollowAPI from "../../../api/useFollowAPI";

function ProfileHeader() {
  const localIdString = localStorage.getItem("userId");
  const localNickname = localStorage.getItem("nickname");
  const localId = localIdString !== null ? parseInt(localIdString) : null; // localStorage 값
  const navigate = useNavigate();
  const { nickname } = useParams();
  const [followerModal, setFollowerModal] = useState<boolean>(false);
  const [followModal, setFollowModal] = useState<boolean>(false);
  const [profileInfo, setProfileInfo] = useRecoilState<ProfileResponseType>(ProfileState); // 받아온 프로필 정보 데이터
  const [buttonText, setButtonText] = useState<string>("");

  const profileUserId = profileInfo.userId;
  const isSecret = profileInfo.secretStatus;
  // 🔥
  const { requestPostFollowing, requestDeleteFollower } = useFollowAPI();
  const { requestProfileInfo } = useProfileAPI();
  const handleCompareNickName = async () => {
    if (localId === profileUserId) {
      navigate(`/accounts/${profileInfo.nickname}/edit`);
    } else if (!profileInfo.followingStatus && localId !== profileUserId) {
      await requestPostFollowing(profileUserId);
      await requestProfileInfo(nickname as string, setProfileInfo);
    } else if (localId !== profileUserId && profileInfo.followingStatus === true) {
      await requestDeleteFollower(profileUserId);
      await requestProfileInfo(nickname as string, setProfileInfo);
    }
  };
  const updateButton = () => {
    const newButtonText =
      nickname !== undefined && nickname === localNickname
        ? "프로필 편집"
        : profileInfo.followingStatus === false
        ? "팔로우 하기"
        : "팔로우 취소";
    setButtonText(newButtonText);
  };
  useEffect(() => {
    updateButton();
  }, [profileInfo]);

  return (
    <S.ProfileWrapper>
      <S.ProfileHeader>
        <S.UserImgBox>
          <S.UserImgInnerBox>
            <S.UserButton>
              <S.UserImg src={profileInfo.userImg} alt="profileImg" />
              {/*🔥 profileInfo.profileImg */}
            </S.UserButton>
          </S.UserImgInnerBox>
        </S.UserImgBox>
        <S.ProfileInfoBox>
          <S.InfoHeader>
            <S.UserNickName>
              <S.NickName>{profileInfo.nickname}</S.NickName>
            </S.UserNickName>
            <S.EditProfileBtn
              bluecolor={buttonText === "팔로우 하기" ? "true" : "false"}
              onClick={() => {
                handleCompareNickName();
              }}
            >
              {buttonText}
            </S.EditProfileBtn>
          </S.InfoHeader>
          <S.InfoFollowBox>
            <S.UserPost>게시물 {profileInfo.feedCount}</S.UserPost>
            <S.UserFollowing
              onClick={() => {
                //🔥 isSecret에 ! 느낌표 처리 할 것
                if (!isSecret) {
                  setFollowerModal((prev) => !prev);
                }
              }}
            >
              팔로워 {profileInfo.followCount}
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
                //🔥 isSecret에 ! 느낌표 처리 할 것
                if (!isSecret) {
                  setFollowModal((prev) => !prev);
                }
              }}
            >
              {" "}
              팔로우 {profileInfo.followingCount}
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
          <S.UserIntro>{profileInfo.userIntro}</S.UserIntro>
        </S.ProfileInfoBox>
      </S.ProfileHeader>
    </S.ProfileWrapper>
  );
}

export default ProfileHeader;
