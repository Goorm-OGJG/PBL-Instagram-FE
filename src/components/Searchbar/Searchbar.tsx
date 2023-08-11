import * as S from "./Searchbar.style";
import SearchInput from "../SearchInput/SearchInput";
import SearchResult from "../SearchResult/SearchResult";
import { useRef } from "react";

interface Props {
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
function Searchbar({ isSearch, setIsSearch }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const overlayHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "overlay") {
      setIsSearch(!isSearch);
    }
  };
  return (
    <S.Overlay isSearch={isSearch} onClick={overlayHandler} id="overlay" ref={ref}>
      <S.Div isSearch={isSearch}>
        <S.Header>
          <S.HeadText>검색</S.HeadText>
          <SearchInput />
        </S.Header>
        <S.SearchResultBox>
          <SearchResult />
        </S.SearchResultBox>
      </S.Div>
    </S.Overlay>
  );
}

export default Searchbar;
