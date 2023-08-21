export interface EditProfileResponseType {
  userId: number;
  nickname: string;
  userImg: string;
  userIntro: string;
  isRecommended: boolean;
  isSecret: boolean;
}

export interface EditProfileType {
  userIntro: string;
  isRecommended: boolean;
  isSecret: boolean;
}

export interface EditImgType {
  imgUrl: string;
}
