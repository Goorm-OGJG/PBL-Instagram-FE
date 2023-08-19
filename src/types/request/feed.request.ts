// export const FeedListPayloadType

export interface FeedPayloadType {
  content: string;
  hashtags: string[];
  mediaUrls: string[];
}

export interface CommentPayloadType {
  content: string;
}

export interface InnerCommentPayloadType {
  commentId: string;
  content: string;
}
