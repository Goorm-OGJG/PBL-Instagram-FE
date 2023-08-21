import { useState } from "react";
import { InstaTextBlack } from "../../components/Icon";
import InputBox from "../../components/InputBox/InputBox";
import * as S from "./SignUp.style";
import { useUserAPI } from "../../api/useUserAPI";
import * as T from "../../types/request/user.request";
function SignUp() {
  const { requestSignUp } = useUserAPI();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const nicknamePattern = /^[a-z0-9._]{7,20}$/;
  const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!$@%])[a-zA-Z0-9!$@%]{6,}$/;

  const ValidateEmail = emailPattern.test(email);
  const ValidateNickname = nicknamePattern.test(nickname);
  const ValidateEqualPassword = password === checkPassword;
  const ValidatePassword = passwordPattern.test(password);

  const buttonAction = email && password && nickname && password && checkPassword;

  const handleEmail = (text: string) => {
    setEmail(text);
  };
  const handleUserName = (text: string) => {
    setUsername(text);
  };
  const handleNickname = (text: string) => {
    setNickname(text);
  };
  const handlePassword = (text: string) => {
    setPassword(text);
  };
  const handleCheckPassword = (text: string) => {
    setCheckPassword(text);
  };

  // 회원가입 요청
  const handleSignUp = async () => {
    if (!ValidateEmail) {
      alert(
        "이메일 주소 형식이 올바르지 않습니다. 'example@example.com' 형식으로 입력해주세요.",
      );
      return;
    }
    if (!ValidateNickname) {
      alert(
        "올바르지 않은 사용자 이름입니다. 7~20자 사이의 영문 소문자, 숫자, 점, 밑줄만 사용할 수 있습니다.",
      );
      return;
    }
    if (!ValidatePassword) {
      alert(
        "올바르지 않은 비밀번호입니다. 비밀번호는 6자 이상이어야 하고 숫자, 영문, 특수기호(!$@%)의 조합을 포함해야 합니다.",
      );
      return;
    }
    if (!ValidateEqualPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const payload: T.SignUpPayloadType = {
      email,
      username,
      nickname,
      password,
    };

    requestSignUp(payload);
  };

  const enterToSignUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSignUp();
    }
  };

  return (
    <S.Container>
      <S.SignUpForm>
        <InstaTextBlack size={160} />
        <S.SignUpIntro>친구들의 사진과 동영상을 보려면 가입하세요.</S.SignUpIntro>
        <S.Divider />
        <S.InputBoxWrapper>
          <InputBox
            type={"text"}
            placeHolderText="이메일 주소"
            value={email}
            onChange={handleEmail}
            onKeyUp={enterToSignUp}
          />
          <InputBox
            type={"text"}
            placeHolderText="성명"
            value={username}
            onChange={handleUserName}
            onKeyUp={enterToSignUp}
          />
          <InputBox
            type={"text"}
            placeHolderText="사용자 이름"
            value={nickname}
            onChange={handleNickname}
            onKeyUp={enterToSignUp}
          />
          <InputBox
            type={"password"}
            placeHolderText="비밀번호"
            value={password}
            onChange={handlePassword}
            onKeyUp={enterToSignUp}
          />
          <InputBox
            type={"password"}
            placeHolderText="비밀번호 확인"
            value={checkPassword}
            onChange={handleCheckPassword}
            onKeyUp={enterToSignUp}
          />
        </S.InputBoxWrapper>

        <S.SignUpAlert>
          저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도
          있습니다.
        </S.SignUpAlert>
        <S.SignUpButton onClick={handleSignUp} disabled={!buttonAction}>
          가입
        </S.SignUpButton>
      </S.SignUpForm>

      <S.HelpSignUpWrapper>
        <S.HasAccountText>계정이 있으신가요?</S.HasAccountText>
        <S.SignUpLinkText to="/login">로그인</S.SignUpLinkText>
      </S.HelpSignUpWrapper>
    </S.Container>
  );
}

export default SignUp;
