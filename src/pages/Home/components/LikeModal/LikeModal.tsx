import * as S from "./LikeModal.style";
import * as Icon from "../../../../components/Icon";
import { useSetRecoilState } from "recoil";
import { isLikeModalOpenState } from "../../../../recoil/homeState";

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
    followingStatus: true,
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

export default function LikeModal() {
  const setIsLikeModalOpen = useSetRecoilState(isLikeModalOpenState);
  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === "overlay") {
      setIsLikeModalOpen(false);
    }
    // if (
    //   (target instanceof HTMLElement && target.id === "overlay") ||
    //   target.id === "close-btn"
    // ) {
    //   console.log(target.id);
    // }
  };

  return (
    <S.Overlay id="overlay" onClick={closeHandler}>
      <S.FollowModalWrapper>
        <S.FollowModalHeader>
          <S.FollowModalTitle>좋아요</S.FollowModalTitle>
          <S.FollowModalExitBtn id="close" onClick={() => setIsLikeModalOpen(false)}>
            <Icon.Close />
          </S.FollowModalExitBtn>
        </S.FollowModalHeader>
        <S.FollowModalBody>
          {follower.map((data) => (
            <S.FollowModalBox key={data.nickname}>
              <S.FollowProfileImgBox to={`/accounts/${data.nickname}`}>
                <S.ProfileImg src={data.profileImg} />
              </S.FollowProfileImgBox>
              <S.FollowProfileNicknameBox>
                <S.Nickname to={`/accounts/${data.nickname}`}>{data.nickname}</S.Nickname>
              </S.FollowProfileNicknameBox>
              <S.FollowDeleteBox>
                {data.followingStatus ? (
                  <S.DeleteBtn>삭제</S.DeleteBtn>
                ) : (
                  <S.FollowBtn>팔로우</S.FollowBtn>
                )}
              </S.FollowDeleteBox>
            </S.FollowModalBox>
          ))}
        </S.FollowModalBody>
      </S.FollowModalWrapper>
    </S.Overlay>
  );
}
