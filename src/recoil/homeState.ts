import { atom } from "recoil";
import { FeedDetailType } from "../types/client/feed.client";

export interface LikeModalType {
  id: number;
  type: string;
}

export const isModalOpenState = atom<number>({
  key: "isModalOpenState",
  default: 0,
});

export const whichAddModalOpenState = atom<string>({
  key: "whichAddModalOpenState",
  default: "",
});

export const isLikeModalOpenState = atom<LikeModalType>({
  key: "isLikeModalOpenState",
  default: { id: 0, type: "feed" },
});

export const feedValueState = atom<string>({
  key: "feedValueState",
  default: "",
});

export const feedDetailState = atom<FeedDetailType>({
  key: "feedDetailState",
  default: {
    userId: 113,
    userImg:
      "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/default_img.png",
    content: "아아아",
    createdAt: "2023-08-20T04:45:17.892784",
    nickname: "hnicknametest",
    feedId: 17,
    likeCount: 1,
    likeStatus: false,
    collectionStatus: false,
    feedMedias: [
      {
        mediaId: 23,
        mediaType: "image",
        mediaUrl: "http://example.com/image17.jpg",
      },
      {
        mediaId: 107,
        mediaType: "img",
        mediaUrl: "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/45.JPG",
      },
    ],
    comments: [],
  },
});

export const commentState = atom<string>({
  key: "commentState",
  default: "",
});

export const commentTypeState = atom<commentType>({
  key: "commentTypeState",
  default: { id: -1, type: "comment", nickname: "" },
});

export const innerCommentsState = atom<InnerCommentType[]>({
  key: "innerCommentsState",
  default: [],
});

export const commentIdState = atom<number>({
  key: "commentIdState",
  default: 0,
});

export interface commentType {
  id: number;
  type: string;
  nickname: string;
}

export interface InnerCommentType {
  content: string;
  innerCommentId: number;
  innerCommentWriter: { nickname: string; userId: number; userImg: string };
  likeStatus: boolean;
  createdAt: string;
  likeCount: number;
}
