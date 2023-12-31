import { SetterOrUpdater } from "recoil";
import { useAxios } from "./useAxios";
import * as T from "../types/client/profile.client";

export default function useProfileAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const profileURL = `${API_URL}/api/accounts`;
  const axios = useAxios();

  // 프로필 가져오기
  const requestProfileInfo = async (
    nickname: string,
    setPofileInfo: React.Dispatch<React.SetStateAction<T.ProfileResponseType>>,
    setSecret: SetterOrUpdater<boolean>,
  ) => {
    await axios
      .get(`${profileURL}/${nickname}`)
      .then((response) => {
        setPofileInfo(response.data);
        setSecret(response.data.secret);
        console.log(response.data.secret);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // 프로필 피드 목록 가져오기
  const requestProfileFeed = (
    nickname: string,
    page: number,
    size: number,
    setFeeds: React.Dispatch<React.SetStateAction<T.FeedDataType[]>>,
  ) => {
    axios
      .get(`${profileURL}/${nickname}/feeds?page=${page}&size=${size}`)
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
