import { atom } from "recoil";
export const isPlayState = atom<boolean>({
  key: "isPlayState",
  default: true,
});
