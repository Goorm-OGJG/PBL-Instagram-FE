export interface FeedDataType {
  userId: number;
  userImg: string;
  nickname: string;
  feedId: number;
  createdAt: string;
  content: string;
  likeCount: number;
  likeStatus: boolean;
  collectionStatus: boolean;
  feedMedias: MediaDataType[];
}

export interface MediaDataType {
  mediaId: number;
  mediaType: string;
  mediaUrl: string;
}

export interface FeedResponseType {
  contents: FeedDataType[];
  isLast: boolean;
}

export interface UserType {
  userId: number;
  nickname: string;
  userImg: string;
  content: string;
  likeCount: number;
  likeStatus: boolean;
}

export interface CommentType extends UserType {
  userId: number;
  userImg: string;
  nickname: string;
  content: string;
  createdAt: string;
  likeCount: number;
  commentId: number;
  innerCommentCount: number;
  likeStatus: boolean;
}

export interface FeedDetailType extends FeedDataType {
  comments: CommentType[];
}

export interface LikeUserType {
  feedId: number;
  followStatus: boolean;
  localDateTime: string;
  nickname: string;
  profileImg?: string;
  userImg?: string;
  userId: number;
  userIntro: string;
}
