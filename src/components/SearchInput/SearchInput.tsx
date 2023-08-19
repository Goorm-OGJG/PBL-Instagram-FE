import { useState, useRef, useEffect } from "react";
import * as S from "./SearchInput.style";
import * as Icon from "../Icon";
import { SearchUserType } from "../../types/client/search.client";
import { useSearchAPI } from "../../api/useSearchAPI";

interface PropsType {
  setData: React.Dispatch<React.SetStateAction<SearchUserType[]>>;
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchInput({ setData, setIsUser }: PropsType) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { requestIdSearch } = useSearchAPI();
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
        if (value) {
          // console.log(value);
          console.log("debounce 실행");
          if (value.match(/^#/g)) {
            requestIdSearch(value.substring(1), "hashtag", 0, 100, setData, setIsUser);
          } else {
            requestIdSearch(value, "user", 0, 100, setData, setIsUser);
          }
        } else {
          setData([]);
        }
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
  }, []);

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
      {/* {loading && (
        <S.SpinnerWrapper>
          <S.Spinner />
        </S.SpinnerWrapper>
      )} */}
    </S.SearchBox>
  );
}

export default SearchInput;
