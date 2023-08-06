import * as S from "./Searchbar.style";
import SearchInput from "../SearchInput/SearchInput";
import SearchResult from "../SearchResult/SearchResult";

interface Props {
  isSearch: boolean;
}
function Searchbar({ isSearch }: Props) {
  return (
    <S.Div isSearch={isSearch}>
      <S.Header>
        <S.HeadText>검색</S.HeadText>
        <SearchInput />
      </S.Header>
      <S.SearchResultBox>
        <SearchResult />
      </S.SearchResultBox>
    </S.Div>
  );
}

export default Searchbar;
