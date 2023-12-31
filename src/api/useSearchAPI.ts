import { SearchUserType } from "../types/client/search.client";
import { useAxios } from "./useAxios";
import * as T from "../types/client/search.client";

export function useSearchAPI() {
  const API_URL = `${import.meta.env.VITE_API_URL}/api`;
  const axios = useAxios();

  const requestUserList = (
    search: string,
    type: string,
    page: number,
    size: number,
    setData: React.Dispatch<React.SetStateAction<SearchUserType[]>>,
  ) => {
    axios
      .get(`${API_URL}/search?search=${search}&type=${type}&page=${page}&size=${size}`)
      .then((response) => {
        if (response && response.data) {
          setData(response.data.userList);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const requestIdSearch = (
    search: string,
    type: string,
    page: number,
    size: number,
    setData: React.Dispatch<React.SetStateAction<SearchUserType[]>>,
    setIsUser: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    axios
      .get(`${API_URL}/search?search=${search}&type=${type}&page=${page}&size=${size}`)
      .then((response) => {
        setData(response.data.userList);
        setIsUser(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const requestTagSearch = async (
    query: string,
    setTagFeedList: React.Dispatch<React.SetStateAction<T.SearchTagInfoType>>,
  ) => {
    axios
      .get(`${API_URL}/search/${query}/feed`)
      .then((response) => {
        setTagFeedList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return {
    requestUserList,
    requestIdSearch,
    requestTagSearch,
  };
}
