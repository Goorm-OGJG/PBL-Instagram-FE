import Feed from "../Feed/Feed";
import * as S from "./Feeds.style";
import * as T from "../../../../types/client/feed.client";
import { useRef, useEffect, useState } from "react";
import { useFeedAPI } from "../../../../api/useFeedAPI";
import { useRecoilState } from "recoil";
import { feedsState } from "../../../../recoil/homeState";
// import { useEffect, useState } from "react";
// import { useFeedAPI } from "../../../../api/useFeedAPI";

function Feeds() {
  const observerRef = useRef<HTMLDivElement | null>(null);
  // const [feeds, setFeeds] = useState<T.FeedDataType[]>([]);
  const [feeds, setFeeds] = useRecoilState<T.FeedDataType[]>(feedsState);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const { requestFeedList } = useFeedAPI();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loading) {
          if (!last) {
            loadMoreFeeds();
          }
        }
      });
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current as HTMLDivElement);
      }
    };
  }, [loading, feeds]);

  const loadMoreFeeds = async () => {
    setLoading(true);

    try {
      requestFeedList(page, 3, setFeeds, setLast);
      // setFeeds((prev) => [...prev, ...data]);
      setPage(page + 1);
    } catch (error) {
      console.error("실패", error);
    }
    setLoading(false);
  };
  return (
    <S.Wrapper>
      {feeds.length > 0 &&
        feeds.map((content) => <Feed data={content} key={content.feedId} />)}
      <S.Observer ref={observerRef} />
    </S.Wrapper>
  );
}

export default Feeds;
