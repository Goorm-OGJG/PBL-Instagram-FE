import { useState } from "react";
import * as S from "./Login.style";
import InputBox from "../../components/InputBox/InputBox";
import { InstaTextBlack } from "../../components/Icon";
import { LoginPayloadType, useUserAPI } from "../../api/useUserAPI";

function Login() {
  const { requestLogin } = useUserAPI();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const buttonAction = userName && password;
  const handleUserName = (text: string) => {
    setUserName(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleLogin = () => {
    alert("로그인 요청");
    const payload: LoginPayloadType = {
      userName,
      password,
      type: getUserNameType(userName),
    };

    requestLogin(payload);
  };

  function getUserNameType(userName: string) {
    const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(userName) ? "email" : "nickname";
  }

  return (
    <S.Container>
      <S.LoginForm>
        <InstaTextBlack size={160} />
        <S.InputBoxWrapper>
          <InputBox
            type={"text"}
            placeHolderText="전화번호, 사용자 이름 또는 이메일"
            value={userName}
            onChange={handleUserName}
          />
          <InputBox
            type={"password"}
            placeHolderText="비밀번호"
            value={password}
            onChange={handlePassword}
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
