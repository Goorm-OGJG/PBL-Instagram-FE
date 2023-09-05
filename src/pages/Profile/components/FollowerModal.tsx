import * as S from "./FollowerModal.style";
import * as Icon from "../../../components/Icon";

//:불: API
import useFollowAPI from "../../../api/useFollowAPI";
import { useState, useEffect } from "react";
import * as T from "../../../types/client/follow.client";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { ProfileState, UserIdState, SecretState } from "../../../recoil/profileState";
import { ProfileResponseType } from "../../../types/client/profile.client";
import useProfileAPI from "../../../api/useProfileAPI";
import { useParams } from "react-router";
import React from "react";

interface FollowPropsType {
  followModal: boolean;
  setFollowModal: React.Dispatch<React.SetStateAction<boolean>>;
  followerModal: boolean;
  setFollowerModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function FollowerModal({
  // followerData,
  // setFollowerData,
  setFollowModal,
  followerModal,
  setFollowerModal,
}: FollowPropsType) {
  const localIdString = localStorage.getItem("userId");
  const localId = localIdString !== null ? parseInt(localIdString) : null;
  const localNickname = localStorage.getItem("nickname");
  const profileInfo = useRecoilValue<ProfileResponseType>(ProfileState);
  const { nickname } = useParams();
  //:불: API
  const [followerData, setFollowerData] = useState<T.FollowerResponseType[]>([]);
  const [followData, setFollowData] = useState<T.FollowResponseType[]>([]);
  const [userId, setUserId] = useRecoilState<number>(UserIdState);
  const setSecret = useSetRecoilState<boolean>(SecretState);
  const setProfileInfo = useSetRecoilState<ProfileResponseType>(ProfileState);
  const {
    requestFollowerList,
    requestDeleteFollower,
    requestFollowingList,
    requestDeleteFollowing,
    requestPostFollowing,
  } = useFollowAPI();
  const { requestProfileInfo } = useProfileAPI();
  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 이벤트 버블링을 방지하여 모달이 닫히지 않도록 함
    e.stopPropagation();
  };
  const handleExitModal = () => {
    if (followerModal) {
      setFollowerModal(false);
    } else {
      setFollowModal(false);
    }
  };

  const handleFollowPost = async (followId: number) => {
    //:불: API
    try {
      await requestPostFollowing(followId);
      requestFollowerList(userId, setFollowerData);
      requestProfileInfo(nickname as string, setProfileInfo, setSecret);
      alert("팔로우 요청이 되었습니다.");
    } catch (error) {
      console.error("Error deleting follower:", error);
    }
  };
  //:불: API
  const handleDeleteFollower = async (
    followId: number,
    setFollowerData: React.Dispatch<React.SetStateAction<T.FollowerResponseType[]>>,
  ) => {
    console.log(followerData);
    try {
      await requestDeleteFollower(followId);
      requestFollowerList(userId, setFollowerData);
      requestProfileInfo(nickname as string, setProfileInfo, setSecret);
    } catch (error) {
      console.error("Error deleting follower:", error);
    }
  };
  const handleDeleteFollow = async (
    followId: number,
    setFollowData: React.Dispatch<React.SetStateAction<T.FollowResponseType[]>>,
  ) => {
    try {
      await requestDeleteFollowing(followId);
      requestFollowingList(userId, setFollowData);
      requestProfileInfo(nickname as string, setProfileInfo, setSecret);
    } catch (error) {
      console.error("Error deleting follower:", error);
    }
  };
  useEffect(() => {
    if (followerModal) {
      requestFollowerList(userId, setFollowerData);
    } else {
      requestFollowingList(userId, setFollowData);
    }
  }, []);

  return (
    <S.Overlay
      onClick={() => {
        handleExitModal();
      }}
    >
      <S.FollowModalWrapper onClick={handleModalContentClick}>
        <S.FollowModalHeader>
          <S.FollowModalTitle>{followerModal ? "팔로워" : "팔로우"}</S.FollowModalTitle>{" "}
          <S.FollowModalExitBtn
            onClick={() => {
              handleExitModal();
            }}
          >
            <Icon.Close />
          </S.FollowModalExitBtn>
        </S.FollowModalHeader>
        <S.FollowModalBody>
          {followerModal
            ? //  팔로워 모달일때

              followerData.map((data) => (
                <S.FollowModalBox key={data.userId}>
                  <S.FollowProfileImgBox
                    to={`/accounts/${data.nickname}`}
                    onClick={() => {
                      handleExitModal();
                      setUserId(data.userId);
                    }}
                  >
                    <S.ProfileImg src={data.profileImg} />
                  </S.FollowProfileImgBox>
                  <S.FollowProfileNicknameBox>
                    <S.Nickname
                      to={`/accounts/${data.nickname}`}
                      onClick={() => {
                        handleExitModal();
                        setUserId(data.userId);
                      }}
                    >
                      {data.nickname}
                    </S.Nickname>{" "}
                    {!data.followingStatus && data.nickname !== localNickname && (
                      <>
                        {" "}
                        ·{" "}
                        <S.FollowBtn
                          onClick={() => {
                            handleFollowPost(data.userId);
                          }}
                        >
                          팔로우
                        </S.FollowBtn>
                      </>
                    )}
                  </S.FollowProfileNicknameBox>
                  {localId === profileInfo.userId && (
                    <S.FollowDeleteBox>
                      <S.DeleteBtn
                        //:불: API
                        onClick={() => {
                          handleDeleteFollower(data.userId, setFollowerData);
                        }}
                      >
                        삭제
                      </S.DeleteBtn>
                    </S.FollowDeleteBox>
                  )}
                </S.FollowModalBox>
              ))
            : //   팔로우 모달일때
              followData.map((data) => (
                <S.FollowModalBox key={data.userId}>
                  <S.FollowProfileImgBox
                    to={`/accounts/${data.nickname}`}
                    onClick={() => {
                      handleExitModal();
                      setUserId(data.userId);
                    }}
                  >
                    <S.ProfileImg src={data.profileImg} />
                  </S.FollowProfileImgBox>
                  <S.FollowProfileNicknameBox>
                    <S.Nickname
                      to={`/accounts/${data.nickname}`}
                      onClick={() => {
                        setUserId(data.followId);
                        handleExitModal();
                      }}
                    >
                      {data.nickname}
                    </S.Nickname>{" "}
                  </S.FollowProfileNicknameBox>
                  {localId === profileInfo.userId && (
                    <S.FollowDeleteBox>
                      <S.DeleteBtn
                        // :불: API
                        onClick={() => {
                          handleDeleteFollow(data.followId, setFollowData);
                        }}
                      >
                        삭제
                      </S.DeleteBtn>
                    </S.FollowDeleteBox>
                  )}
                </S.FollowModalBox>
              ))}
        </S.FollowModalBody>
      </S.FollowModalWrapper>
    </S.Overlay>
  );
}
