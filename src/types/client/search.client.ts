export interface SearchUserType {
  followingStatus?: boolean;
  nickname?: string;
  profileImg?: string;
  userIntro?: string;
  tagName?: string;
  totalFeedCount?: string;
  userId?: number;
}

// export interface SearchTagType {
//   tagName: string;
//   totalFeedCount: number;
// }

export interface SearchTagInfoType {
  tagName: string;
  feedCount: number;
  thumbnail: string;
  taggedList: TagFeedListType[];
}
export interface TagFeedListType {
  feedId: number;
  mediaUrl: string;
  mediaOne: boolean;
}
