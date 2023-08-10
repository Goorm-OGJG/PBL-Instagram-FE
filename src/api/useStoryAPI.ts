import { SetterOrUpdater } from "recoil";
import { useAxios } from "./useAxios";
import { StoryType } from "../types/client/story.client";

interface StoryPayloadType {
  mediaList: string[];
}

export function useStoryAPI() {
  const API_URL = `${import.meta.env.VITE_API_URL}/api`;
  const axios = useAxios();

  const requestStoryList = (
    page: number,
    size: number,
    setData: SetterOrUpdater<StoryType[]>,
  ) => {
    axios
      .get(`${API_URL}/main/stories?page=${page}&size=${size}`)
      .then((response) => {
        console.log("스토리 목록 가져오기");
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const requestPostStory = (payload: StoryPayloadType) => {
    axios
      .post(`${API_URL}/story`, payload)
      .then((response) => {
        console.log("스토리 작성 요청");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const requestDeleteStory = (storyId: string) => {
    axios
      .delete(`${API_URL}/story/${storyId}`)
      .then((response) => {
        console.log("스토리 삭제 요청");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const requestPostStoryLike = (storyId: string) => {
    axios
      .post(`${API_URL}/story/${storyId}/like`)
      .then((response) => {
        console.log("스토리 좋아요 요청");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const requestDeleteStoryLike = (storyId: string) => {
    axios
      .delete(`${API_URL}/story/${storyId}/like`)
      .then((response) => {
        console.log("스토리 좋아요 삭제 요청");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return {
    requestStoryList,
    requestPostStory,
    requestDeleteStory,
    requestPostStoryLike,
    requestDeleteStoryLike,
  };
}
