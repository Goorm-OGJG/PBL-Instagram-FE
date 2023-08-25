import { useState } from "react";
import InputBox from "../../components/InputBox/InputBox";
import * as S from "./SetPassword.style";
import * as T from "../../types/request/user.request";
import { useUserAPI } from "../../api/useUserAPI";
import { useLocation } from "react-router";

function SetPassword() {
  const { requestSetPassword } = useUserAPI();
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const ValidatePasswordLength = password.length >= 6;
  const ValidateEqualPassword = password === checkPassword;
  const buttonAction =
    password && checkPassword && ValidatePasswordLength && ValidateEqualPassword;

  const handlePassword = (text: string) => {
    setPassword(text);
  };
  const handleCheckPassword = (text: string) => {
    setCheckPassword(text);
  };
  const handleSubmit = () => {
    const validatePattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!$@%])[a-zA-Z0-9!$@%]{6,}$/;
    if (validatePattern.test(password)) {
      const payload: T.SetPasswordPayloadType = {
        username: location.state?.username,
        password,
        type: getUserNameType(location.state?.username),
      };
      requestSetPassword(payload, location.state?.authorization);
    } else {
      alert("유효하지 않은 패스워드 입니다.");
    }
  };

  const enterToSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  function getUserNameType(username: string) {
    const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(username) ? "email" : "nickname";
  }

  return (
    <S.Container>
      <S.NewPasswordForm>
        <S.NewPasswordInfoWrapper>
          <S.NewPasswordInfoTitle>
            보안 수준이 높은 비밀번호 만들기
          </S.NewPasswordInfoTitle>
          <S.NewPasswordInfoContent>
            비밀번호는 6자 이상이어야 하고 숫자, 영문, <br />
            특수기호(!$@%)의 조합을 포함해야 합니다.
          </S.NewPasswordInfoContent>
        </S.NewPasswordInfoWrapper>
        <S.InputBoxWrapper>
          {!ValidatePasswordLength && password && (
            <S.AlertNewPassword>비밀번호는 6자 이상이어야 합니다.</S.AlertNewPassword>
          )}
          <InputBox
            type={"password"}
            placeHolderText="새 비밀번호"
            value={password}
            onChange={handlePassword}
            onKeyUp={enterToSubmit}
          />
          {!ValidateEqualPassword && (
            <S.AlertEqaulPassword>비밀번호가 일치하지 않습니다.</S.AlertEqaulPassword>
          )}
          <InputBox
            type={"password"}
            placeHolderText="새 비밀번호 다시 입력"
            value={checkPassword}
            onChange={handleCheckPassword}
            onKeyUp={enterToSubmit}
          />
        </S.InputBoxWrapper>
        <S.SubmitButton onClick={handleSubmit} disabled={!buttonAction}>
          비밀번호 재설정
        </S.SubmitButton>
      </S.NewPasswordForm>
    </S.Container>
  );
}

export default SetPassword;
