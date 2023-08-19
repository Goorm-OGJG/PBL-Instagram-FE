import React from "react";
import * as S from "./TextArea.style";
import { useRecoilState } from "recoil";
import { feedValueState } from "../../recoil/homeState";
function TextArea() {
  const [value, setValue] = useRecoilState(feedValueState);

  const changeHandelr = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value.length < 2201) {
      setValue(e.target.value);
    }
  };

  const keydownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Backspace") {
      setValue(value.slice(0, value.length - 1));
    }
  };
  return (
    <S.AreaBox>
      <S.TextLength>{`${value.length}/2200`}</S.TextLength>
      <S.TextAreaStyle
        rows={10}
        value={value}
        onChange={changeHandelr}
        onKeyDown={keydownHandler}
        placeholder="문구 입력..."
      />
    </S.AreaBox>
  );
}

export default TextArea;
