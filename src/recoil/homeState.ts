import { atom } from "recoil";
export const isModalOpenState = atom<boolean>({
  key: "isModalOpenState",
  default: false,
});

export const whichAddModalOpenState = atom<string>({
  key: "whichAddModalOpenState",
  default: "",
});

export const isLikeModalOpenState = atom<boolean>({
  key: "isLikeModalOpenState",
  default: false,
});

export const feedValueState = atom<string>({
  key: "feedValueState",
  default: "",
});
