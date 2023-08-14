import { useState, useRef, useEffect } from "react";
import * as S from "./SearchInput.style";
import * as Icon from "../Icon";

function SearchInput() {
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const removeHandler = () => {
    setValue("");
    inputRef.current?.focus();
  };

  // onChange
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const useDebounce = (value: string, delay: number) => {
    useEffect(() => {
      const handler = setTimeout(() => {
        console.log(value);
        console.log("debounce 실행");
        // 요청 날릴 예정
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  };

  const debouncedSearchTerm = useDebounce(value, 500);
  useEffect(() => {
    debouncedSearchTerm;
  });

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
