import { atom } from "recoil";
import { StoryType } from "../types/client/story.client";

export const isPlayState = atom<boolean>({
  key: "isPlayState",
  default: true,
});

export const nowStoryState = atom<number>({
  key: "nowStoryState",
  default: -1,
});

export const storyDataState = atom<StoryType[]>({
  key: "storyDataState",
  default: [
    {
      storyId: "story1",
      nickname: "user123",
      profileImg:
        "https://cdn.pixabay.com/photo/2023/05/13/20/01/toucan-7991337_1280.jpg",
      createdAt: "2023-08-09T12:00:00Z",
      mediaList: [
        {
          mediaUrl:
            "https://cdn.pixabay.com/photo/2023/05/28/09/37/pelican-8023249_1280.jpg",
          likeStatus: true,
        },
        {
          mediaUrl:
            "https://cdn.pixabay.com/photo/2023/05/17/08/53/flower-7999465_1280.jpg",
          likeStatus: false,
        },
      ],
    },
    {
      storyId: "story2",
      nickname: "user456",
      profileImg:
        "https://cdn.pixabay.com/photo/2023/05/13/20/01/toucan-7991337_1280.jpg",
      createdAt: "2023-08-08T15:30:00Z",
      mediaList: [
        {
          mediaUrl:
            "https://cdn.pixabay.com/photo/2023/05/17/08/53/flower-7999465_1280.jpg",
          likeStatus: true,
        },
        {
          mediaUrl:
            "https://cdn.pixabay.com/photo/2023/05/28/09/37/pelican-8023249_1280.jpg",
          likeStatus: true,
        },
      ],
    },
    {
      storyId: "story3",
      nickname: "user234",
      profileImg:
        "https://cdn.pixabay.com/photo/2023/05/13/20/01/toucan-7991337_1280.jpg",
      createdAt: "2023-08-09T12:00:00Z",
      mediaList: [
        {
          mediaUrl:
            "https://cdn.pixabay.com/photo/2023/05/28/09/37/pelican-8023249_1280.jpg",
          likeStatus: true,
        },
        {
          mediaUrl:
            "https://cdn.pixabay.com/photo/2023/05/17/08/53/flower-7999465_1280.jpg",
          likeStatus: false,
        },
      ],
    },
    // 추가적인 스토리들...
  ],
});
