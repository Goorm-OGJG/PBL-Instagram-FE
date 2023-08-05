import { useState } from "react";
import { InstaTextBlack } from "../../components/Icon";
import InputBox from "../../components/InputBox/InputBox";
import * as S from "./SignUp.style";
function SignUp() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const buttonAction = email && password && nickname && password && checkPassword;

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handleUserName = (text: string) => {
    setUserName(text);
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

  const handleSignUp = () => {
    alert("회원가입 요청");
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
          />
          <InputBox
            type={"text"}
            placeHolderText="성명"
            value={userName}
            onChange={handleUserName}
          />
          <InputBox
            type={"text"}
            placeHolderText="사용자 이름"
            value={nickname}
            onChange={handleNickname}
          />
          <InputBox
            type={"password"}
            placeHolderText="비밀번호"
            value={password}
            onChange={handlePassword}
          />
          <InputBox
            type={"password"}
            placeHolderText="비밀번호 확인"
            value={checkPassword}
            onChange={handleCheckPassword}
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
