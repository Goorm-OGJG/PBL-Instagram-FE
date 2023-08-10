import * as T from "../types/request/user.request";
import { useNavigate } from "react-router";
import { useAxios } from "./useAxios";

export function useUserAPI() {
  const navigate = useNavigate();
  const axios = useAxios();

  const requestLogin = (payload: T.LoginPayloadType) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users/login`, payload)
      .then((response) => {
        localStorage.setItem("accessToken", response.headers.Authorization);
        localStorage.setItem("nickname", response.data.nickname);
        localStorage.setItem("userImg", response.data.userImg);
        navigate("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  async function requestIsExistEmail(payload: T.IsExistEmailPayloadType) {
    return axios.get(`${import.meta.env.VITE_API_URL}/api/users/${payload.email}`);
  }

  async function requestSignUp(payload: T.SignUpPayloadType) {
    try {
      await requestIsExistEmail({ email: payload.email });
      await axios.post(`${import.meta.env.VITE_API_URL}/api/users/signup`, payload);
      alert("회원가입 되었습니다.");
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  }

  function requestIsEqualCertNumber(payload: T.IsEqualCertNumberPayloadType) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users/auth`, payload)
      .then(() => {
        navigate("/help/newpassword");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function requestSetPassword(payload: T.SetPasswordPayloadType) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users/password`, payload)
      .then(() => {
        alert("비밀번호가 변경되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return {
    requestLogin,
    requestSignUp,
    requestIsEqualCertNumber,
    requestSetPassword,
  };
}
