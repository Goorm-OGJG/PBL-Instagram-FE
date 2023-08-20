import React, { useState } from "react";
import * as S from "./InputBox.style";

interface PropsType {
  type: string;
  placeHolderText: string;
  value: string;
  onChange: (text: string) => void;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function InputBox({ type, placeHolderText, value, onChange, onKeyUp }: PropsType) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState(type);
  const handleIsFocusd = (value: string) => {
    const hasValue = Boolean(value);
    setIsFocused(hasValue);
  };
  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };
  return (
    <S.InputBoxWrapper>
      <S.PlaceHolder isFocused={isFocused}>{placeHolderText}</S.PlaceHolder>
      <S.InputBox
        type={inputType}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          handleIsFocusd(e.target.value);
        }}
        isFocused={isFocused}
        onKeyUp={(e) => {
          onKeyUp(e);
        }}
      />
      {type === "password" && value && (
        <S.VisiablePassword onClick={togglePasswordVisibility}>
          {inputType === "password" ? "비밀번호 표시" : "숨기기"}
        </S.VisiablePassword>
      )}
    </S.InputBoxWrapper>
  );
}

export default InputBox;
