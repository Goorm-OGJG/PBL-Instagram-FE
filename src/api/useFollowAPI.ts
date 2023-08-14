import { useAxios } from "./useAxios";
import * as T from "../types/client/follow.client";

export default function useFollowAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const followerURL = `${API_URL}/api/follow`;
  const axios = useAxios();
  
  // 팔로워 목록 가져오기
  const requestFollowerList = (
    setFollowerData: React.Dispatch<React.SetStateAction<T.FollowerResponseType[]>>,
  ) => {
    axios
      .get(`${followerURL}/follower`)
      .then((response) => {
        setFollowerData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // // 팔로워 취소  
  const requestDeleteFollower = (
    followId: number,
  ) => {
    axios
      .delete(`${followerURL}/${followId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const requestFollowingList = (
    setFollowData: React.Dispatch<React.SetStateAction<T.FollowResponseType[]>>,
  ) => {
    axios
      .get(`${followerURL}/following`)
      .then((response) => {
        setFollowData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // 팔로잉 삭제 
  const requestDeleteFollowing = (
    followId: number
  ) => {
    axios
      .delete(`${followerURL}/${followId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
//  팔로우 요청 
const requestPostFollowing = (
    followId: number
) => {
  axios
    .post(`${followerURL}/${followId}`)
    .then((response) => {
      console.log(response.data);
    })
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
