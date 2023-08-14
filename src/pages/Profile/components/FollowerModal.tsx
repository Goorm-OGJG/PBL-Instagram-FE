import * as S from "./FollowerModal.style";
import * as Icon from "../../../components/Icon";
//🔥 API
import useFollowAPI from "../../../api/useFollowAPI";
import { useState, useEffect } from "react";
import * as T from "../../../types/client/follow.client";
import { useRecoilValue } from "recoil";
import { ProfileState } from "../../../recoil/profileState";
import { ProfileResponseType } from "../../../types/client/profile.client";

interface FollowPropsType {
  followModal: boolean;
  setFollowModal: React.Dispatch<React.SetStateAction<boolean>>;
  followerModal: boolean;
  setFollowerModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// interface Follow {
//   userId: number;
//   nickname: string;
//   profileImg: string;
//   followStatus?: boolean;
// }

// const followerData: Follow[] = [
//   {
//     userId: 1,
//     nickname: "재균",
//     profileImg:
//       "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
//     followStatus: true,
//   },
//   {
//     userId: 2,
//     nickname: "승재",
//     profileImg:
//       "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
//     followStatus: false,
//   },
// ];
// const followData: Follow[] = [
//   {
//     userId: 1,
//     nickname: "JamesJoe",
//     profileImg:
//       "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
//   },
//   {
//     userId: 2,
//     nickname: "James",
//     profileImg:
//       "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
//   },
// ];

export default function FollowerModal({
  setFollowModal,
  followerModal,
  setFollowerModal,
}: FollowPropsType) {
  const localIdString = localStorage.getItem("userId");
  const localId = localIdString !== null ? parseInt(localIdString) : null;
  const profileInfo = useRecoilValue<ProfileResponseType>(ProfileState);
  //🔥 API
  const [followId, setFollowId] = useState<number>(0);
  const [followerData,setFollowerData] = useState<T.FollowerResponseType[]>([]);
  const [followData, setFollowData] = useState<T.FollowResponseType[]>([]);
  const { requestFollowerList,
    requestDeleteFollower,
    requestFollowingList,
    requestDeleteFollowing,
  requestPostFollowing, } = useFollowAPI();
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
  const handleFollowPost = () =>{
    //🔥 API 
    requestPostFollowing(followId);
  };
  //🔥 API
  const handleDeleteFollower = async (
    followId: number,
    setFollowerData: React.Dispatch<React.SetStateAction<T.FollowerResponseType[]>>,
  ) => {
    try {
      await requestDeleteFollower(followId);
      requestFollowerList(setFollowerData);
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
      requestFollowingList(setFollowData);
    } catch (error) {
      console.error("Error deleting follower:", error);
    }
  };
  useEffect(() => {
    if (followerModal) {
      requestFollowerList(setFollowerData);
    } else {
      requestFollowingList(setFollowData);
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
                    onClick={handleExitModal}
                  >
                    <S.ProfileImg src={data.profileImg} />
                  </S.FollowProfileImgBox>
                  <S.FollowProfileNicknameBox>
                    <S.Nickname
                      to={`/accounts/${data.nickname}`}
                      onClick={handleExitModal}
                    >
                      {data.nickname}
                    </S.Nickname>{" "}
                    {!data.followStatus && (
                      <>
                        {" "}
                        · <S.FollowBtn
                        onClick={()=>{handleFollowPost();}}>팔로우</S.FollowBtn>
                      </>
                    )}
                  </S.FollowProfileNicknameBox>
                  {localId === profileInfo.userId && (
                    <S.FollowDeleteBox>
                      <S.DeleteBtn
                      //🔥 API
                       onClick={() => {
                        setFollowId(data.userId);
                        handleDeleteFollower(followId, setFollowerData);
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
                  <S.FollowProfileImgBox to={`/accounts/${data.nickname}`}
                  onClick={handleExitModal}>
                    <S.ProfileImg src={data.profileImg} />
                  </S.FollowProfileImgBox>
                  <S.FollowProfileNicknameBox>
                    <S.Nickname to={`/accounts/${data.nickname}`}
                    onClick={handleExitModal}>
                      {data.nickname}
                    </S.Nickname>{" "}
                  </S.FollowProfileNicknameBox>
                  {localId === profileInfo.userId && (
                    <S.FollowDeleteBox>
                      <S.DeleteBtn
                      // 🔥 API
                      onClick={()=>{
                        setFollowId(data.userId);
                        handleDeleteFollow(followId,setFollowData);
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
