import { useState } from "react";
import * as S from "./Login.style";
import InputBox from "../../components/InputBox/InputBox";
import { InstaTextBlack } from "../../components/Icon";
import { useUserAPI } from "../../api/useUserAPI";
import * as T from "../../types/request/user.request";

function Login() {
  const { requestLogin } = useUserAPI();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const buttonAction = username && password;

  const handleUserName = (text: string) => {
    setUsername(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleLogin = () => {
    const payload: T.LoginPayloadType = {
      username,
      password,
      type: getUserNameType(username),
    };

    requestLogin(payload);
  };

  const getUserNameType = (username: string) => {
    const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(username) ? "email" : "nickname";
  };

  const enterToLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <S.Container>
      <S.LoginForm>
        <InstaTextBlack size={160} />
        <S.InputBoxWrapper>
          <InputBox
            type={"text"}
            placeHolderText="전화번호, 사용자 이름 또는 이메일"
            value={username}
            onChange={handleUserName}
            onKeyUp={enterToLogin}
          />
          <InputBox
            type={"password"}
            placeHolderText="비밀번호"
            value={password}
            onChange={handlePassword}
            onKeyUp={enterToLogin}
          />
        </S.InputBoxWrapper>
        <S.LoginButton onClick={handleLogin} disabled={!buttonAction}>
          로그인
        </S.LoginButton>

        <S.Divider>또는</S.Divider>

        <S.HelpPasswordWrapper>
          <S.FindPassWordLinkText to="/help/password">
            비밀번호를 잊으셨나요?
          </S.FindPassWordLinkText>
        </S.HelpPasswordWrapper>
      </S.LoginForm>

      <S.HelpSignUpWrapper>
        <S.HasAccountText>계정이 없으신가요?</S.HasAccountText>
        <S.SignUpLinkText to="/signup">가입하기</S.SignUpLinkText>
      </S.HelpSignUpWrapper>
    </S.Container>
  );
}

export default Login;
