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
}

export interface StoryListResponseType {
  storyList: StoryType[];
}
