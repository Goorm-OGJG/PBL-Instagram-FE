import { useAxios } from "./useAxios";
import * as T from "../types/client/profile.client";

export default function useProfileAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const profileURL = `${API_URL}/api/accounts`;
  const axios = useAxios();

  // 프로필 가져오기
  const requestProfileInfo = (
    userId: number,
    setPofileInfo: React.Dispatch<React.SetStateAction<T.ProfileResponseType>>,
  ) => {
    axios
      .get(`${profileURL}/${userId}`)
      .then((response) => {
        setPofileInfo(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // 프로필 피드 목록 가져오기
  const requestProfileFeed = (page: number, size: number, setFeeds: React.Dispatch<React.SetStateAction<T.FeedDataType[]>>) => {
    axios
      .get(`${profileURL}/myFeeds?page=${page}&size=${size}`)
      .then((response) => {
        setFeeds(response.data);})
      .catch((error) => {
        console.log(error);});
  };

  // 프로필 피드 목록 가져오기
  const requestSavedFeed = (page: number, size: number, setFeeds: React.Dispatch<React.SetStateAction<T.FeedDataType[]>>) => {
    axios
      .get(`${profileURL}/savedFeeds?page=${page}&size=${size}`)
      .then((response) => {
        setFeeds(response.data);})
      .catch((error) => {
        console.log(error);});
  };

  
  return {
    requestProfileInfo,
    requestProfileFeed,
    requestSavedFeed,
  };
}
