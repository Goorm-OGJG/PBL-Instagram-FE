import Feed from "../Feed/Feed";
import * as S from "./Feeds.style";
import * as T from "../../../../types/client/feed.client";
// import { useEffect, useState } from "react";
// import { useFeedAPI } from "../../../../api/useFeedAPI";

function Feeds() {
  // const [data, setData] = useState<T.FeedResponseType | []>([]);
  // const { requestFeedList } = useFeedAPI();
  // useEffect(() => {
  //   requestFeedList(0, 0, setData);
  // }, [data]);

  const feeds: T.FeedResponseType = {
    contents: [
      {
        userId: "user123",
        userImg: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
        nickname: "JohnDoe",
        feedId: "feed123",
        createdAt: "2023-08-08T12:34:56",
        content: "Hello, this is my first post!",
        likeCount: 10,
        likeStatus: true,
        collectionStatus: false,
        feedMedia: [
          {
            mediaId: "media456",
            mediaType: "image",
            mediaUrl:
              "https://images.pexels.com/photos/17781404/pexels-photo-17781404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        ],
      },
      {
        userId: "user456",
        userImg:
          "https://cdn.pixabay.com/photo/2023/07/25/18/42/mountains-8149677_1280.jpg",
        nickname: "JaneSmith",
        feedId: "feed789",
        createdAt: "2023-08-07T18:15:30",
        content: "Check out this amazing view!",
        likeCount: 25,
        likeStatus: false,
        collectionStatus: true,
        feedMedia: [
          {
            mediaId: "media987",
            mediaType: "image",
            mediaUrl:
              "https://images.pexels.com/photos/17781404/pexels-photo-17781404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            mediaId: "media654",
            mediaType: "image",
            mediaUrl:
              "https://cdn.pixabay.com/photo/2023/07/25/18/42/mountains-8149677_1280.jpg",
          },
        ],
      },
    ],
    isLast: true,
  };
  return (
    <S.Wrapper>
      {feeds.contents.map((content) => (
        <Feed data={content} />
      ))}
    </S.Wrapper>
  );
}

export default Feeds;
