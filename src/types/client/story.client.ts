export interface StoryMediaDataType {
  mediaUrl: string;
  likeStatus: boolean;
}

export interface StoryType {
  storyId: string;
  nickname: string;
  profileImg: string;
  createdAt: string;
  mediaList: StoryMediaDataType[];
  readAll: boolean;
}

export interface StoryListResponseType {
  storyList: StoryType[];
}
