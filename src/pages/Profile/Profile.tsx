import * as S from "./Profile.style";
import * as T from "../../types/client/profile.client";
import * as Icon from "../../components/Icon";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileHeader from "./components/ProfileHeader";
import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  ItemState,
  OverlayState,
  ImgIdState,
  ProfileState,
  UserIdState,
} from "../../recoil/profileState";
import useProfileAPI from "../../api/useProfileAPI";
import { isModalOpenState, whichAddModalOpenState } from "../../recoil/homeState";
import FeedModal from "../Home/components/FeedModal/FeedModal";
import AddModal from "../../components/AddModal/AddModal";
interface FeedList {
  feedId: number;
  mediaUrl: string;
  mediaOne: boolean;
  likeCount: number;
  commentCount: number;
}

function Profile() {
  const localIdString = localStorage.getItem("userId");
  let localId: number | null = null;
  // localStorage 값
  if (localIdString !== null) {
    localId = parseInt(localIdString);
  }
  const { nickname } = useParams();

  const observerRef = useRef<HTMLDivElement | null>(null);
  const whichModalOpen = useRecoilValue(whichAddModalOpenState);
  const { requestProfileInfo, requestProfileFeed, requestSavedFeed } = useProfileAPI();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useRecoilState<boolean>(ItemState);
  const [feeds, setFeeds] = useState<FeedList[]>([]);
  const [overlay, setOverlay] = useRecoilState<boolean>(OverlayState);
  const [ImgId, setImgId] = useRecoilState<number>(ImgIdState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const [profileInfo, setProfileInfo] =
    useRecoilState<T.ProfileResponseType>(ProfileState);
  const userId = useRecoilValue<number>(UserIdState);
  const isSecret = profileInfo.secretStatus;
  const handleFeedListClick = () => {
    setItem(false);
    const newData = feeds;
    setFeeds(newData);
  };
  const handleSavedListClick = () => {
    setItem(true);
    const newData = feeds;
    setFeeds(newData);
  };

  const loadMoreFeeds = async () => {
    setLoading(true);
    try {
      {
        if (!item && feeds.length > 0) {
          //🔥 API
          requestProfileFeed(nickname as string, page, 9, setFeeds);
          setFeeds((prev) => [...prev, ...feeds]);
          setPage(page + 1);
        } else if (item && feeds.length > 0) {
          //🔥 API
          requestSavedFeed(page, 9, setFeeds);
          setFeeds((prev) => [...prev, ...feeds]);
          setPage(page + 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (nickname !== undefined) {
      requestProfileInfo(nickname, setProfileInfo);
    }
    if (!item && nickname !== undefined) {
      requestProfileFeed(nickname, page, 9, setFeeds);
    }
    if (userId !== null && item) {
      requestSavedFeed(page, 9, setFeeds);
    }
  }, [nickname, item]);
  return (
    <>
      <Sidebar />
      <ProfileHeader />

      <S.ProfileWrapper>
        {/* 🔥 isSecret에 ! 느낌표 처리 할 것*/}
        {!isSecret ? (
          <>
            <S.ProfileNavbar>
              <S.ProfileItem
                isactive={!item ? "true" : "false"}
                onClick={handleFeedListClick}
              >
                <Icon.Grid /> <S.ProfileText>게시물 </S.ProfileText>
              </S.ProfileItem>
              {/*  🔥  */}
              {localId === profileInfo.userId && (
                <S.ProfileItem
                  isactive={item ? "true" : "false"}
                  onClick={handleSavedListClick}
                >
                  <Icon.Bookmark /> <S.ProfileText>저장됨 </S.ProfileText>
                </S.ProfileItem>
              )}
            </S.ProfileNavbar>
            <S.FeedContainer>
              {/* {(!item ? feedList : storageList) */}
              {feeds.length > 0 &&
                feeds.map((feed) => {
                  return (
                    <S.FeedBox
                      key={feed.feedId}
                      onClick={() => {
                        setIsModalOpen(feed.feedId);
                      }}
                    >
                      <S.FeedHoverMutiple>
                        {!feed.mediaOne && (
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
                      {feed.mediaUrl.slice(
                        feed.mediaUrl.length - 3,
                        feed.mediaUrl.length,
                      ) === "mp4" ? (
                        <S.FeedImg
                          as="video"
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
                      ) : (
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
                      )}
                    </S.FeedBox>
                  );
                })}
              <S.Observer ref={observerRef} />
            </S.FeedContainer>
          </>
        ) : (
          <S.SecretContainer>
            <S.SecretBox>
              <S.SecretScript>비공개 계정입니다.</S.SecretScript>
              <S.SecretScript>사진 및 동영상을 보려면 팔로우하세요.</S.SecretScript>
            </S.SecretBox>
          </S.SecretContainer>
        )}
        {/*   */}
      </S.ProfileWrapper>
      {isModalOpen && <FeedModal />}
      {whichModalOpen === "feed" && <AddModal type="feed" />}
      {whichModalOpen === "story" && <AddModal type="story" />}
    </>
  );
}

export default Profile;
