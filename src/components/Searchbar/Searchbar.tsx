import * as S from "./Searchbar.style";
import SearchInput from "../SearchInput/SearchInput";
import SearchResult from "../SearchResult/SearchResult";
import { useRef, useState } from "react";
import { SearchUserType } from "../../types/client/search.client";

interface Props {
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
function Searchbar({ isSearch, setIsSearch }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<SearchUserType[]>([]);
  const [isUser, setIsUser] = useState(true);
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
          <SearchInput setData={setData} setIsUser={setIsUser} />
        </S.Header>
        <S.SearchResultBox>
          <SearchResult data={data} isUser={isUser} />
        </S.SearchResultBox>
      </S.Div>
    </S.Overlay>
  );
}

export default Searchbar;
