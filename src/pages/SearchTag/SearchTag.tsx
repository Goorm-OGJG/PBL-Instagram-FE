import SearchHeader from "./components/SearchHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as Icon from "../../components/Icon";
import * as S from "./SearchTag.style";
import * as T from "../../types/client/search.client";
import { useRecoilState, useRecoilValue } from "recoil";
import { OverlayState, ImgIdState } from "../../recoil/profileState";
import { isModalOpenState, whichAddModalOpenState } from "../../recoil/homeState";
import FeedModal from "../Home/components/FeedModal/FeedModal";
import AddModal from "../../components/AddModal/AddModal";
import { useState, useEffect } from "react";
import { useSearchAPI } from "../../api/useSearchAPI";
import { useParams } from "react-router-dom";

function SearchTag() {
  // const [feeds, setFeeds] = useState<FeedList[]>([]);
  const { query } = useParams();
  const [tagFeedList, setTagFeedList] = useState<T.SearchTagInfoType>();
  const { requestTagSearch } = useSearchAPI();
  const whichModalOpen = useRecoilValue(whichAddModalOpenState);
  const [overlay, setOverlay] = useRecoilState<boolean>(OverlayState);
  const [ImgId, setImgId] = useRecoilState<number>(ImgIdState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const taggedList = tagFeedList?.taggedList;
  console.log(taggedList);
  useEffect(() => {
    console.log(query);
    requestTagSearch(
      query as string,
      setTagFeedList as React.Dispatch<React.SetStateAction<T.SearchTagInfoType>>,
    );
    console.log(tagFeedList);
  }, [query]);
  return (
    <div>
      <Sidebar />
      <SearchHeader tagFeedList={tagFeedList as T.SearchTagInfoType} />
      <S.SearchTagWrapper>
        <S.SearchPopular>인기 게시물</S.SearchPopular>
        {/* 🔥 isSecret에 ! 느낌표 처리 할 것*/}(
        <>
          <S.FeedContainer>
            {taggedList &&
              taggedList.length > 0 &&
              taggedList?.map((feed) => {
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
                          <S.FeedHoverItem
                            onMouseEnter={() => {
                              setOverlay(true);
                              setImgId(feed.feedId);
                            }}
                          >
                            <Icon.HeartFill size={20} />
                            {feed.likeCount}
                          </S.FeedHoverItem>{" "}
                          <S.FeedHoverItem
                            onMouseEnter={() => {
                              setOverlay(true);
                              setImgId(feed.feedId);
                            }}
                          >
                            <Icon.CommentFill size={16} />
                            {feed.commentCount}
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
                        overlay={overlay}
                        src={feed.mediaUrl}
                        feedId={feed.feedId}
                        ImgId={ImgId}
                        alt="feedImg"
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
                        overlay={overlay}
                        src={feed.mediaUrl}
                        feedId={feed.feedId}
                        ImgId={ImgId}
                        alt="feedImg"
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
          </S.FeedContainer>
        </>
        ){/*   */}
      </S.SearchTagWrapper>
      {isModalOpen && <FeedModal />}
      {whichModalOpen === "feed" && <AddModal type="feed" />}
      {whichModalOpen === "story" && <AddModal type="story" />}
    </div>
  );
}

export default SearchTag;
