import { useState } from "react";
import { InstaTextBlack, Lock } from "../../components/Icon";
import InputBox from "../../components/InputBox/InputBox";
import * as S from "./FindPassword.style";
import Timer from "./components/Timer/Timer";
import { useUserAPI } from "../../api/useUserAPI";
function FindPassword() {
  const { requestIsEqualCertNumber } = useUserAPI();
  const [userName, setUserName] = useState("");
  const [validate, setValidate] = useState("");

  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isTimerEnd, setIsTimerEnd] = useState(false);
  const initialMintes = 3;
  const initialSeconds = 0;

  const restartTimer = () => {
    setIsTimerStart(false);
    setTimeout(() => setIsTimerStart(true), 0);
  };

  const handleUserName = (text: string) => {
    setUserName(text);
  };

  const handleValidate = (text: string) => {
    setValidate(text);
  };

  const handleRequestValidate = () => {
    setIsTimerStart(true);
    setIsTimerEnd(false);
    restartTimer();
    alert("인증번호 요청");
  };

  function getUserNameType(userName: string) {
    const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(userName) ? "email" : "nickname";
  }

  const handleSubmit = () => {
    if (isTimerEnd) {
      alert("요청시간이 만료되었습니다. 다시 인증번호를 받으세요.");
      return;
    }
    if (!isTimerEnd) {
      alert("인증번호 일치 여부 요청");
      const payload = {
        userName,
        type: getUserNameType(userName),
        validate,
      };
      requestIsEqualCertNumber(payload);
    }
  };

  const ValidateSubmitButtonAction = userName;
  const SubmitButtonAction = userName && validate;

  return (
    <S.Container>
      <S.Nav>
        <InstaTextBlack size={100} />
      </S.Nav>
      <S.FindPasswordForm>
        <S.LockWrapper>
          <Lock size={70} color="black" />
        </S.LockWrapper>

        <S.FindPasswordInfoWrapper>
          <S.FindPasswordInfoTitle>로그인에 문제가 있나요?</S.FindPasswordInfoTitle>
          <S.FindPasswordInfoContent>
            이메일 주소, 전화번호 또는 사용자 이름을 입력하시면 계정에 다시 액세스할 수
            있는 링크를 보내드립니다.
          </S.FindPasswordInfoContent>
        </S.FindPasswordInfoWrapper>

        <S.InputBoxWrapper>
          <InputBox
            type={"text"}
            placeHolderText="이메일 또는 사용자 이름"
            value={userName}
            onChange={handleUserName}
          />

          {isTimerStart && (
            <Timer
              initialMintes={initialMintes}
              initialSeconds={initialSeconds}
              setIsTimerEnd={setIsTimerEnd}
            />
          )}
          <InputBox
            type={"text"}
            placeHolderText="인증번호"
            value={validate}
            onChange={handleValidate}
          />
        </S.InputBoxWrapper>

        <S.ValidateSubmitButton
          onClick={() => handleRequestValidate()}
          disabled={!ValidateSubmitButtonAction}
        >
          인증번호 보내기
        </S.ValidateSubmitButton>

        <S.SubmitButton
          onClick={() => {
            handleSubmit();
          }}
          disabled={!SubmitButtonAction}
        >
          확인
        </S.SubmitButton>

        <S.Divider>또는</S.Divider>

        <S.HelpPasswordWrapper>
          <S.SignUpLinkText to="/signup">새 계정 만들기</S.SignUpLinkText>
        </S.HelpPasswordWrapper>

        <S.LoginLinkButton to="/login">로그인으로 돌아가기</S.LoginLinkButton>
      </S.FindPasswordForm>
    </S.Container>
  );
}

export default FindPassword;
