import { useAxios } from "./useAxios";
import * as T from "../types/client/follow.client";

export default function useFollowAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const followerURL = `${API_URL}/api/follow`;
  const axios = useAxios();

  // 팔로워 목록 가져오기
  const requestFollowerList = (
    followId: number,
    setFollowerData: React.Dispatch<React.SetStateAction<T.FollowerResponseType[]>>,
  ) => {
    axios
      .get(`${followerURL}/follower/${followId}`)
      .then(() => {
        setFollowerData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // // 팔로워 취소
  const requestDeleteFollower = async (followId: number) => {
    await axios
      .delete(`${followerURL}/${followId}`)
      .then(() => {})
      .catch((error) => {
        alert(error);
      });
  };

  const requestFollowingList = (
    followId: number,
    setFollowData: React.Dispatch<React.SetStateAction<T.FollowResponseType[]>>,
  ) => {
    axios
      .get(`${followerURL}/following/${followId}`)
      .then((response) => {
        setFollowData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // 팔로잉 삭제
  const requestDeleteFollowing = async (followId: number) => {
    await axios
      .delete(`${followerURL}/${followId}`)
      .then(() => {})
      .catch((error) => {
        alert(error);
      });
  };
  //  팔로우 요청
  const requestPostFollowing = async (followId: number) => {
    await axios
      .post(`${followerURL}/${followId}`)
      .then(() => {})
      .catch((error) => {
        alert(error);
      });
  };
  return {
    requestFollowerList,
    requestDeleteFollower,
    requestFollowingList,
    requestDeleteFollowing,
    requestPostFollowing,
  };
}
