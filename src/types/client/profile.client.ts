
export interface ProfileResponseType {
  userId : number
  nickname: string;
  profileImg: string;
  userIntro: string;
  followerCount: number;
  followingCount: number;
  feedCount: number;
  followingStatus: boolean;
  secretStatus: boolean;
};

export interface FeedDataType {
  feedId: number;
  mediaUrl: string;
  isMediaOne: boolean;
  likeCount: number;
  commentCount: number;
}
export interface StorageDataType {
  feedId: number;
  mediaUrl: string;
  isMediaOne: boolean;
  likeCount: number;
  commentCount: number;
}