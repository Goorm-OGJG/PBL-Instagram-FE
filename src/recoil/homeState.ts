import { atom } from "recoil";
import { FeedDataType, FeedDetailType } from "../types/client/feed.client";

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
    userId: 0,
    userImg: "",
    content: "",
    createdAt: "",
    nickname: "",
    feedId: 0,
    likeCount: 0,
    likeStatus: false,
    collectionStatus: false,
    feedMedias: [],
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

export const commentIdState = atom<number>({
  key: "commentIdState",
  default: 0,
});

export const feedsState = atom<FeedDataType[]>({
  key: "feedsState",
  default: [],
});

export const searchValueState = atom<string>({
  key: "searchValueState",
  default: "",
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
