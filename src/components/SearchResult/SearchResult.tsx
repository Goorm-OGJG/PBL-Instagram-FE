import React from "react";
import SearchUser from "../SearchUser/SearchUser";

function SearchResult() {
  return (
    <React.Fragment>
      {/* <React.Fragment>
        <S.SearchText>최근 검색항목</S.SearchText>
        <S.NoSearchText>최근 검색 내역 없음.</S.NoSearchText>
      </React.Fragment> */}
      <React.Fragment>
        <SearchUser />
        <SearchUser />
        <SearchUser />
        <SearchUser />
        <SearchUser type="tag" />
      </React.Fragment>
    </React.Fragment>
  );
}

export default SearchResult;
