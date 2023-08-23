import { EditProfileResponseType } from "./../types/client/editProfile.client";
import { atom } from "recoil";

export const EditImgModalState = atom<boolean>({
  key: "EditImgModalState",
  default: false,
});

export const EditImgState = atom<string>({
  key: "EditImgState",
  default: "",
});

export const EditImgFileState = atom<File[]>({
  key: "EditImgFileState",
  default: [],
});

export const EditProfileState = atom<EditProfileResponseType>({
  key: "EditProfileState",
  default: {
    userId: 0,
    nickname: "",
    profileImg: "",
    userIntro: "",
    isRecommended: false,
    isSecret: false,
  },
});
