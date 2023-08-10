import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export function useAuth() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      // 토큰이 있으면 로그인 상태로 판단
      setIsLoggedIn(true);
    } else {
      // 토큰이 없으면 로그아웃 상태로 판단
      setIsLoggedIn(false);
    }
  }, [location]);

  return {
    isLoggedIn,
    setIsLoggedIn,
  };
}
