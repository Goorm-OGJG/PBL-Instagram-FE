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
        if (response) {
          localStorage.setItem("accessToken", response.headers.authorization);
          localStorage.setItem("nickname", response.data.nickname);
          localStorage.setItem("userImg", response.data.userImg);
          localStorage.setItem("userId", response.data.id);
          navigate("/home");
          return;
        }
        alert("올바르지 않은 계정 정보 입니다.");
      })
      .catch((error) => {
        alert(error);
      });
  };

  async function requestIsExistEmail(payload: T.IsExistEmailPayloadType) {
    return axios
      .get(`${import.meta.env.VITE_API_URL}/api/users/email/${payload.email}`)
      .then((response) => {
        if (!response) {
          alert("존재하는 이메일 입니다.");
          return Promise.reject();
        }
      });
  }

  async function requestIsExistUsername(payload: T.IsExistNicknamePayloadType) {
    return axios
      .get(`${import.meta.env.VITE_API_URL}/api/users/nickname/${payload.nickname}`)
      .then((response) => {
        if (!response) {
          alert("존재하는 사용자 이름 입니다.");
          return Promise.reject();
        }
      });
  }

  async function requestSignUp(payload: T.SignUpPayloadType) {
    try {
      await requestIsExistEmail({ email: payload.email });
      await requestIsExistUsername({ nickname: payload.nickname });
      await axios.post(`${import.meta.env.VITE_API_URL}/api/users/signup`, payload);
      alert("회원가입 되었습니다.");
      navigate("/login");
    } catch (error) {
      if (error) {
        alert(error);
      }
    }
  }

  function requestIsEqualCertNumber(payload: T.IsEqualCertNumberPayloadType) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users/auth`, payload)
      .then((response) => {
        navigate("/help/newpassword", {
          state: {
            username: payload.username,
            authorization: response.headers.authorization,
          },
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  function requestSetPassword(payload: T.SetPasswordPayloadType, token: string) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users/password`, payload, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        alert("비밀번호가 변경되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function requestCertNumber(payload: T.CertNumberPayloadType) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users/exist`, payload)
      .then(() => {
        alert("등록된 이메일로 인증번호가 전송되었습니다.");
      })
      .catch((error) => {
        alert(error);
      });
  }

  function requestLogout() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/users/logout`)
      .then(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("nickname");
        localStorage.removeItem("userImg");
        localStorage.removeItem("userId");
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
    requestCertNumber,
    requestLogout,
  };
}
