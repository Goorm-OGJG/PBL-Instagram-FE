import React, { useEffect } from "react";
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

  useEffect(() => {
    setValue("");
  }, []);
  return (
    <S.AreaBox>
      <S.TextLength>{`${value.length}/2200`}</S.TextLength>
      <S.TextAreaStyle
        rows={19}
        value={value}
        onChange={changeHandelr}
        placeholder="문구 입력..."
      />
    </S.AreaBox>
  );
}

export default TextArea;
