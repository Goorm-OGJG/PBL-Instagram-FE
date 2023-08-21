import React from "react";
import SearchUser from "../SearchUser/SearchUser";
import { SearchUserType } from "../../types/client/search.client";
import * as S from "./SearchResult.style";

interface PropsType {
  data: SearchUserType[];
  isUser: boolean;
}

function SearchResult({ data, isUser }: PropsType) {
  return (
    <React.Fragment>
      {data.length == 0 && (
        <React.Fragment>
          <S.SearchText>최근 검색항목</S.SearchText>
          <S.NoSearchText>최근 검색 내역 없음.</S.NoSearchText>
        </React.Fragment>
      )}

      <React.Fragment>
        {data.length > 0 &&
          data.map((user, i) => <SearchUser user={user} key={i} isUser={isUser} />)}
      </React.Fragment>
    </React.Fragment>
  );
}

export default SearchResult;
