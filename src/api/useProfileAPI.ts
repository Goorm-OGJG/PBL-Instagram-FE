import { useAxios } from "./useAxios";
import * as T from "../types/client/profile.client";

export default function useProfileAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const profileURL = `${API_URL}/api/accounts`;
  const axios = useAxios();

  // 프로필 가져오기
  const requestProfileInfo = (
    nickname: string,
    setPofileInfo: React.Dispatch<React.SetStateAction<T.ProfileResponseType>>,
  ) => {
    axios
      .get(`${profileURL}/${nickname}`)
      .then((response) => {
        setPofileInfo(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // 프로필 피드 목록 가져오기
  const requestProfileFeed = (
    userId: number,
    page: number,
    size: number,
    setFeeds: React.Dispatch<React.SetStateAction<T.FeedDataType[]>>,
  ) => {
    axios
      .get(`${profileURL}/${userId}/feeds?page=${page}&size=${size}`)
      .then((response) => {
        setFeeds(response.data.feedList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 프로필 피드 목록 가져오기
  const requestSavedFeed = (
    page: number,
    size: number,
    setFeeds: React.Dispatch<React.SetStateAction<T.FeedDataType[]>>,
  ) => {
    axios
      .get(`${profileURL}/collected-feeds?page=${page}&size=${size}`)
      .then((response) => {
        setFeeds(response.data.feedList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    requestProfileInfo,
    requestProfileFeed,
    requestSavedFeed,
  };
}
