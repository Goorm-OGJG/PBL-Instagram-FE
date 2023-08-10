import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";
import * as S from "./Profile.style";
import ProfileHeader from "./components/ProfileHeader";
import * as Icon from "../../components/Icon";
import { useRecoilState } from "recoil";
import { ItemState, OverlayState, ImgIdState } from "../../recoil/profileState";

interface FeedList {
  feedId: number;
  mediaUrl: string;
  isMediaOne: boolean;
  likeCount: number;
  commentCount: number;
}
interface StorageList {
  feedId: number;
  mediaUrl: string;
  isMediaOne: boolean;
  likeCount: number;
  commentCount: number;
}
const feedList: FeedList[] = [
  {
    feedId: 1,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: true,
    likeCount: 20,
    commentCount: 11,
  },
  {
    feedId: 2,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 3,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 4,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 5,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 6,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 7,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 8,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 9,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
];
const storageList: StorageList[] = [
  {
    feedId: 1,
    mediaUrl:
      "https://assets.community.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316",
    isMediaOne: true,
    likeCount: 20,
    commentCount: 11,
  },
  {
    feedId: 2,
    mediaUrl:
      "https://assets.community.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 3,
    mediaUrl:
      "https://assets.community.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 4,
    mediaUrl:
      "https://assets.community.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 5,
    mediaUrl:
      "https://assets.community.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 6,
    mediaUrl:
      "https://assets.community.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 7,
    mediaUrl:
      "https://assets.community.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 8,
    mediaUrl:
      "https://assets.community.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 9,
    mediaUrl:
      "https://assets.community.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316",
    isMediaOne: true,
    likeCount: 10,
    commentCount: 11,
  },
];
function Profile() {
  const handleItemClick = () => {
    setItem((prev) => !prev);
  };
  const [item, setItem] = useRecoilState<boolean>(ItemState);
  const [overlay, setOverlay] = useRecoilState<boolean>(OverlayState);
  const [ImgId, setImgId] = useRecoilState<number>(ImgIdState);

  return (
    <>
      <ProfileHeader />

      <S.ProfileWrapper>
        <S.ProfileNavbar>
          <S.ProfileItem isActive={!item} onClick={handleItemClick}>
            <Icon.Grid /> <S.ProfileText>게시물 </S.ProfileText>
          </S.ProfileItem>
          <S.ProfileItem
            fontSize={FONT.XS}
            fontWeight={FONT.Bold}
            fontColor={COLOR.Gray3}
            isActive={item}
            onClick={handleItemClick}
          >
            <Icon.Bookmark /> <S.ProfileText>저장됨 </S.ProfileText>
          </S.ProfileItem>
        </S.ProfileNavbar>

        <S.FeedContainer>
          {(!item ? feedList : storageList).map((feed) => {
            // <FeedCard key={feed.feedId} feed={feed} />;
            return (
              <S.FeedBox key={feed.feedId}>
                <S.FeedHover fontSize={FONT.M} fontWeight={FONT.Bold}>
                  {overlay && ImgId === feed.feedId && (
                    <>
                      {" "}
                      <S.FeedHoverItem>
                        <Icon.HeartFill size={20} /> {feed.likeCount}
                      </S.FeedHoverItem>{" "}
                      <S.FeedHoverItem>
                        <Icon.CommentFill size={16} /> {feed.commentCount}
                      </S.FeedHoverItem>
                    </>
                  )}
                </S.FeedHover>
                <S.FeedImg
                  src={feed.mediaUrl}
                  alt="dd"
                  onMouseEnter={() => {
                    setOverlay(true);
                    setImgId(feed.feedId);
                  }}
                  onMouseLeave={() => {
                    setOverlay(false);
                    setImgId(100000000000);
                  }}
                />
              </S.FeedBox>
            );
          })}
        </S.FeedContainer>
      </S.ProfileWrapper>
    </>
  );
}

export default Profile;
