import * as T from "../types/request/user.request";
import axios from "./axios";
import { useNavigate } from "react-router";

export function useUserAPI() {
  const navigate = useNavigate();
  const requestLogin = (payload: T.LoginPayloadType) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users/login`, payload)
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  function requestSignUp(payload: T.SignUpPayloadType) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/`, payload)
      .then(() => {
        alert("회원가입 되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function requestIsEqualCertNumber(payload: T.IsEqualCertNumberPayloadType) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/`, payload)
      .then(() => {
        navigate("/help/newpassword");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function requestSetPassword(payload: T.SetPasswordType) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/`, payload)
      .then(() => {
        alert("비밀번호가 변경되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return { requestLogin, requestSignUp, requestIsEqualCertNumber, requestSetPassword };
}
