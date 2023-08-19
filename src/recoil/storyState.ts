import { atom } from "recoil";
import { StoryType } from "../types/client/story.client";

export const isPlayState = atom<boolean>({
  key: "isPlayState",
  default: true,
});

export const isSettingState = atom<boolean>({
  key: "isSettingState",
  default: false,
});

export const nowStoryState = atom<number>({
  key: "nowStoryState",
  default: -1,
});

export const storyDataState = atom<StoryType[]>({
  key: "storyDataState",
  default: [],
});
