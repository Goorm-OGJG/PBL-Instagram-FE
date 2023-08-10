import * as S from "./FollowerModal.style";
import * as Icon from "../../../components/Icon";
interface FollowPropsType {
  followModal: boolean;
  setFollowModal: React.Dispatch<React.SetStateAction<boolean>>;
  followerModal: boolean;
  setFollowerModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Follow {
  id: number;
  nickname: string;
  profileImg: string;
  followingStatus?: boolean;
}

const follower: Follow[] = [
  {
    id: 1,
    nickname: "준서",
    profileImg:
      "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
    followingStatus: true,
  },
  {
    id: 2,
    nickname: "승재",
    profileImg:
      "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
    followingStatus: false,
  },
  {
    id: 3,
    nickname: "Jameadddds",
    profileImg:
      "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
    followingStatus: false,
  },
  {
    id: 4,
    nickname: "병규",
    profileImg:
      "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
    followingStatus: false,
  },
  {
    id: 5,
    nickname: "정준",
    profileImg:
      "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
    followingStatus: false,
  },
  {
    id: 6,
    nickname: "동진",
    profileImg:
      "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
    followingStatus: false,
  },
];
const following: Follow[] = [
  {
    id: 1,
    nickname: "JamesJoe",
    profileImg:
      "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
  },
  {
    id: 2,
    nickname: "James",
    profileImg:
      "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
  },
];

export default function FollowerModal({
  setFollowModal,
  followerModal,
  setFollowerModal,
}: FollowPropsType) {
  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 이벤트 버블링을 방지하여 모달이 닫히지 않도록 함
    e.stopPropagation();
  };

  const handleExitModal = () => {
    followerModal ? setFollowerModal(false) : setFollowModal(false);
  };
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
              follower.map((data) => (
                <S.FollowModalBox key={data.nickname}>
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
                    {!data.followingStatus && (
                      <>
                        {" "}
                        · <S.FollowBtn>팔로우</S.FollowBtn>
                      </>
                    )}
                  </S.FollowProfileNicknameBox>
                  <S.FollowDeleteBox>
                    <S.DeleteBtn>삭제</S.DeleteBtn>
                  </S.FollowDeleteBox>
                </S.FollowModalBox>
              ))
            : //   팔로우 모달일때
              following.map((data) => (
                <S.FollowModalBox key={data.nickname}>
                  <S.FollowProfileImgBox to={`/accounts/${data.nickname}`}>
                    <S.ProfileImg src={data.profileImg} />
                  </S.FollowProfileImgBox>
                  <S.FollowProfileNicknameBox>
                    <S.Nickname to={`/accounts/${data.nickname}`}>
                      {data.nickname}
                    </S.Nickname>{" "}
                  </S.FollowProfileNicknameBox>
                  <S.FollowDeleteBox>
                    <S.DeleteBtn>삭제</S.DeleteBtn>
                  </S.FollowDeleteBox>
                </S.FollowModalBox>
              ))}
        </S.FollowModalBody>
      </S.FollowModalWrapper>
    </S.Overlay>
  );
}
