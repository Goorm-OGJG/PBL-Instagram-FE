import { ProfileResponseType } from "./../types/client/profile.client";
import { EditProfileResponseType } from "./../types/client/editProfile.client";
import { atom } from "recoil";

// 피드 or 보관함 둘중에 선택
export const ItemState = atom<boolean>({
  key: "itemState",
  default: false,
});
// feed이미지 호버시
export const OverlayState = atom<boolean>({
  key: "overlay",
  default: false,
});

export const ImgIdState = atom<number>({
  key: "imgId",
  default: 10000000000,
});

export const UserIdState = atom<number>({
  key: "userId",
  default: 10000000000,
});

export const ProfileState = atom<ProfileResponseType>({
  key: "profileInfo",
  default: {
    userId: 0,
    nickname: "",
    userImg: "",
    userIntro: "",
    followCount: 0,
    followingCount: 0,
    feedCount: 0,
    followingStatus: false,
    secretStatus: false,
  },
});
export const ToggleState = atom<boolean>({
  key: "toggleState",
  default: false,
});
export const EditProfileState = atom<EditProfileResponseType>({
  key: "editprofileInfo",
  default: {
    userId: 0,
    nickname: "",
    profileImg: "",
    userIntro: "",
    recommended: false,
    secret: false,
  },
});
