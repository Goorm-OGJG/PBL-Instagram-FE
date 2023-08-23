export interface EditProfileResponseType {
  userId: number;
  nickname: string;
  profileImg: string;
  userIntro: string;
  recommended: boolean;
  secret: boolean;
}

export interface EditProfileType {
  userIntro: string;
  recommended: boolean;
  secret: boolean;
}

export interface EditImgType {
  imgUrl: string;
}
