import { SetterOrUpdater } from "recoil";
import { useAxios } from "./useAxios";
import { StoryType } from "../types/client/story.client";

interface StoryPayloadType {
  mediaList: string[];
}

export function useStoryAPI() {
  const API_URL = `${import.meta.env.VITE_API_URL}/api`;
  const axios = useAxios();

  const requestStoryList = async (
    // page: number,
    // size: number,
    setData: SetterOrUpdater<StoryType[]>,
  ) => {
    axios
      .get(`${API_URL}/story/stories`)
      .then((response) => {
        if (response) {
          response.data.storyList.sort((a: StoryType, b: StoryType) => {
            if (a.readAll === true && b.readAll === false) {
              return -1; // a를 b보다 앞으로 배치
            } else if (a.readAll === false && b.readAll === true) {
              return 1; // a를 b보다 뒤로 배치
            } else {
              return 0; // 순서를 변경하지 않음
            }
          });
          setData(response.data.storyList);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const requestPostStory = (
    payload: StoryPayloadType,
    setData: SetterOrUpdater<StoryType[]>,
  ) => {
    axios
      .post(`${API_URL}/story`, payload)
      .then(() => {
        requestStoryList(setData);
      })
      .catch((error) => console.error(error));
  };

  const requestDeleteStory = (storyId: string) => {
    axios
      .delete(`${API_URL}/story/${storyId}`)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const requestPostStoryLike = (
    storyId: string,
    setData: SetterOrUpdater<StoryType[]>,
  ) => {
    axios
      .post(`${API_URL}/story/${storyId}/like`)
      .then(() => {
        requestStoryList(setData);
      })
      .catch((error) => console.error(error));
  };

  const requestDeleteStoryLike = (
    storyId: string,
    setData: SetterOrUpdater<StoryType[]>,
  ) => {
    axios
      .delete(`${API_URL}/story/${storyId}/like`)
      .then(() => {
        requestStoryList(setData);
      })
      .catch((error) => console.error(error));
  };

  const requestStoryRead = (storyId: string) => {
    axios
      .post(`${API_URL}/story/${storyId}/read`)
      .then(() => {
        // requestStoryList(setData);
      })
      .catch((error) => console.error(error));
  };
  return {
    requestStoryList,
    requestPostStory,
    requestDeleteStory,
    requestPostStoryLike,
    requestDeleteStoryLike,
    requestStoryRead,
  };
}
