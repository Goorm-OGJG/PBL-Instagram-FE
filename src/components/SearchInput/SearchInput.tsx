import { useState, useRef } from "react";
import * as S from "./SearchInput.style";
import * as Icon from "../Icon";

function SearchInput() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const removeHandler = () => {
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <S.SearchBox>
      <S.SearchInput
        placeholder="검색"
        value={value}
        onChange={onChangeHandler}
        autoFocus
        ref={inputRef}
      />
      <S.IconBox onClick={removeHandler}>
        <Icon.Close size={8} />
      </S.IconBox>
      {/* <S.SpinnerWrapper>
        <S.Spinner />
      </S.SpinnerWrapper> */}
    </S.SearchBox>
  );
}

export default SearchInput;
