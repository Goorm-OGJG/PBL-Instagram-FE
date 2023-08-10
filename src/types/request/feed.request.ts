// export const FeedListPayloadType

export interface FeedPayloadType {
  content: string;
  hashtag: string[];
  mediaUrl: string[];
}

export interface CommentPayloadType {
  content: string;
}

export interface InnerCommentPayloadType {
  commentId: string;
  content: string;
}
