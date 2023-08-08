import axios from "./axios";
import { useNavigate } from "react-router";

export interface LoginPayloadType {
  userName: string;
  password: string;
  type: string;
}

export function useUserAPI() {
  const navigate = useNavigate();
  const requestLogin = (payload: LoginPayloadType) => {
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

  return { requestLogin };
}
