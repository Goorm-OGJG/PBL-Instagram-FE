export interface FeedDataType {
  userId: string;
  userImg: string;
  nickname: string;
  feedId: string;
  createdAt: string;
  content: string;
  likeCount: number;
  likeStatus: boolean;
  collectionStatus: boolean;
  feedMedias: MediaDataType[];
}

export interface MediaDataType {
  mediaId: string;
  mediaType: string;
  mediaUrl: string;
}

export interface FeedResponseType {
  contents: FeedDataType[];
  isLast: boolean;
}

export interface UserType {
  userId: string;
  nickname: string;
  userImg: string;
  content: string;
  likeCount: number;
  likeStatus: boolean;
}

export interface CommentType extends UserType {
  commentId: string;
  createdAt: string;
  innerCommentCount: number;
}

export interface FeedDetailType extends FeedDataType {
  comments: CommentType[];
}
