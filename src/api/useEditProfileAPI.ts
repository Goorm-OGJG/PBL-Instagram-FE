import { useAxios } from "./useAxios";
import * as T from "../types/client/editProfile.client";
export default function useEditProfileAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const editProfleURL = `${API_URL}/api/accounts`;
  const axios = useAxios();

  // 프로필 수정 가저오기
  const requestEditProfile = (
    userId: number,
    setEditProfileData: React.Dispatch<React.SetStateAction<T.EditProfileResponseType>>,
  ) => {
    const data = { userId: userId };
    axios
      .get(`${editProfleURL}/profile`, { data })
      .then((response) => {
        setEditProfileData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  // 프로필 수정 보내기
  const requestPutProfile = (requestData: T.EditProfileType) => {
    axios
      .put(`${editProfleURL}`, requestData)
      .then(() => {
        alert("수정이 완료 되었습니다.");
      })
      .catch((error) => {
        alert(error);
      });
  };

  // 프로필 이미지 수정 보내기
  const requestPutImgProfile = (requestData: T.EditImgType) => {
    axios
      .put(`${editProfleURL}/img`, requestData)
      .then(() => {
        alert("수정이 완료 되었습니다.");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return { requestEditProfile, requestPutProfile, requestPutImgProfile };
}
