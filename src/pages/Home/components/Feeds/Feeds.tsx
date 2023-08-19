import Feed from "../Feed/Feed";
import * as S from "./Feeds.style";
import * as T from "../../../../types/client/feed.client";
import { useRef, useEffect, useState } from "react";
import { useFeedAPI } from "../../../../api/useFeedAPI";
// import { useEffect, useState } from "react";
// import { useFeedAPI } from "../../../../api/useFeedAPI";

function Feeds() {
  const observerRef = useRef<HTMLDivElement | null>(null);
  // const data: T.FeedDataType[] = [
  //   {
  //     userId: "user123",
  //     userImg: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
  //     nickname: "JohnDoe",
  //     feedId: "feed123",
  //     createdAt: "2023-08-08T12:34:56",
  //     content: "Hello, this is my first post!",
  //     likeCount: 10,
  //     likeStatus: true,
  //     collectionStatus: false,
  //     feedMedias: [
  //       {
  //         mediaId: "media456",
  //         mediaType: "image",
  //         mediaUrl:
  //           "https://images.pexels.com/photos/17781404/pexels-photo-17781404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //       },
  //     ],
  //   },
  //   {
  //     userId: "user456",
  //     userImg:
  //       "https://cdn.pixabay.com/photo/2023/07/25/18/42/mountains-8149677_1280.jpg",
  //     nickname: "JaneSmith",
  //     feedId: "feed789",
  //     createdAt: "2023-08-07T18:15:30",
  //     content: "Check out this amazing view!",
  //     likeCount: 25,
  //     likeStatus: false,
  //     collectionStatus: true,
  //     feedMedias: [
  //       {
  //         mediaId: "media987",
  //         mediaType: "image",
  //         mediaUrl:
  //           "https://images.pexels.com/photos/17781404/pexels-photo-17781404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //       },
  //       {
  //         mediaId: "media654",
  //         mediaType: "image",
  //         mediaUrl:
  //           "https://cdn.pixabay.com/photo/2023/07/25/18/42/mountains-8149677_1280.jpg",
  //       },
  //     ],
  //   },
  // ];
  // const feeds = data;
  const [feeds, setFeeds] = useState<T.FeedDataType[]>([]);
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
          // console.log(entry.isIntersecting);
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
      console.log(page);
      // setFeeds((prev) => [...prev, ...data]);
      setPage(page + 1);
    } catch (error) {
      console.error("실패", error);
    }
    setLoading(false);
  };
  console.log(feeds);
  return (
    <S.Wrapper>
      {feeds.length > 0 &&
        feeds.map((content) => <Feed data={content} key={content.feedId} />)}
      <S.Observer ref={observerRef} />
    </S.Wrapper>
  );
}

export default Feeds;
