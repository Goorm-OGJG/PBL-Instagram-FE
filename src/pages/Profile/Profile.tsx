import * as S from "./Profile.style";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileHeader from "./components/ProfileHeader";
import * as Icon from "../../components/Icon";
import { useRecoilState } from "recoil";
import {
  ItemState,
  OverlayState,
  ImgIdState,
  ProfileState,
} from "../../recoil/profileState";
import { ProfileResponseType } from "../../types/client/profile.client";
import useProfileAPI from "../../api/useProfileAPI";
import { useRef, useState, useEffect } from "react";
import { isModalOpenState } from "../../recoil/homeState";
import FeedModal from "../Home/components/FeedModal/FeedModal";

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
// interface Props {
//   type: string;
//   setState: React.Dispatch<React.SetStateAction<boolean>>;
// }
const feedList: FeedList[] = [
  {
    feedId: 1,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: false,
    likeCount: 20,
    commentCount: 11,
  },
  {
    feedId: 2,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: false,
    likeCount: 10,
    commentCount: 11,
  },
  {
    feedId: 3,
    mediaUrl:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    isMediaOne: false,
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
    isMediaOne: false,
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
    isMediaOne: false,
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
    isMediaOne: false,
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
  const localIdString = localStorage.getItem("userId");
  let localId: number|null =null;
// localStorage 값
  if (localIdString !== null ){
    localId =  parseInt(localIdString);
  };
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleFeedListClick = () => {
    setItem(false);
    const newData = feedList;
    setFeeds(newData);
  };
  const handleSavedListClick = () => {
    setItem(true);
    const newData = storageList;
    setFeeds(newData);
  };
  const { requestProfileInfo, requestProfileFeed, requestSavedFeed } = useProfileAPI();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useRecoilState<boolean>(ItemState);
  const [feeds, setFeeds] = useState<FeedList[]>([]);
  const [overlay, setOverlay] = useRecoilState<boolean>(OverlayState);
  const [ImgId, setImgId] = useRecoilState<number>(ImgIdState);
  const [isModalOpen, setIsModalOpen] = useRecoilState<boolean>(isModalOpenState);
  const [profileInfo,setProfileInfo] = useRecoilState<ProfileResponseType>(ProfileState);
  const isSecret = profileInfo.secretStatus;
  const loadMoreFeeds = async () => {
    setLoading(true);
    try {
      {
        if (!item && localId !== null) {
          //🔥 API
          requestProfileFeed(localId,page,9,setFeeds);
          setFeeds((prev) => [...prev, ...feedList]);
        } else if(item && localId !== null) {
          //🔥 API
          requestSavedFeed(page,9,setFeeds);
          setFeeds((prev) => [...prev, ...storageList]);
        }
      }
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (localId !== null) {
      requestProfileInfo(localId, setProfileInfo);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loading) {
          loadMoreFeeds();
        }
      });
    });
    if (observerRef.current) {
      observer.observe(observerRef.current);

    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading, feeds, item]);

  return (
    <>
      <Sidebar/>
      <ProfileHeader />

      <S.ProfileWrapper>
        {/* 🔥 isSecret에 ! 느낌표 처리 할 것*/}
        {!isSecret ? 
        <>
        <S.ProfileNavbar>
          <S.ProfileItem isActive={!item} onClick={handleFeedListClick}>
            <Icon.Grid /> <S.ProfileText>게시물 </S.ProfileText>
          </S.ProfileItem>
          {/*  🔥  */}
          {localId === profileInfo.userId &&
          <S.ProfileItem isActive={item} onClick={handleSavedListClick}>
            <Icon.Bookmark /> <S.ProfileText>저장됨 </S.ProfileText>
          </S.ProfileItem>
          } 
          
        </S.ProfileNavbar>
        <S.FeedContainer>
          {/* {(!item ? feedList : storageList) */}
          {feeds.map((feed) => {
            return (
              <S.FeedBox key={feed.feedId} onClick={()=>{setIsModalOpen(true);}}>
                <S.FeedHoverMutiple>
                  {!feed.isMediaOne && (
                    <S.FeedHoverMultiItem>
                      <Icon.BoxMultiple size={20} />
                    </S.FeedHoverMultiItem>
                  )}
                </S.FeedHoverMutiple>
                <S.FeedHover>
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
      <S.Observer ref={observerRef} />
        </S.FeedContainer>
        </>
         : <S.SecretContainer><S.SecretBox><S.SecretScript>비공개 계정입니다.</S.SecretScript><S.SecretScript>사진 및 동영상을 보려면 팔로우하세요.</S.SecretScript></S.SecretBox></S.SecretContainer>} 
        {/*   */}
      </S.ProfileWrapper>
      {isModalOpen && <FeedModal/>}
    </>
  );
}

export default Profile;
