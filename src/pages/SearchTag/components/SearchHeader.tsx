import { SearchTagInfoType } from "../../../types/client/search.client";
import * as S from "./SearchHeader.style";
import { useParams } from "react-router-dom";
// export interface Searchtype {
//   tagName: string;
//   feedCount: number;
//   thumbnail: string;
// }
// const searchInfo: Searchtype = {
//   tagName: "뉴진스",
//   feedCount: 42,
//   thumbnail: "https://www.job-post.co.kr/news/photo/202302/69349_71769_752.png",
// };

export interface tagFeedListtype {
  tagFeedList: SearchTagInfoType;
}

export default function SearchHeader({ tagFeedList }: tagFeedListtype) {
  const { query } = useParams();
  return (
    <S.SearchWrapper>
      <S.SearchHeader>
        <S.UserImgBox>
          <S.UserImgInnerBox>
            <S.UserButton>
              <S.UserImg src={tagFeedList && tagFeedList.thumbnail} alt="SearchImg" />
            </S.UserButton>
          </S.UserImgInnerBox>
        </S.UserImgBox>
        <S.SearchInfoBox>
          <S.InfoHeader>
            <S.UserTagName>
              <S.TagName>#{query}</S.TagName>
            </S.UserTagName>
          </S.InfoHeader>
          <S.InfoFollowBox>
            <S.UserPost>게시물 </S.UserPost>
            <S.UserFollowing>{tagFeedList && tagFeedList.feedCount}</S.UserFollowing>
          </S.InfoFollowBox>
        </S.SearchInfoBox>
      </S.SearchHeader>
    </S.SearchWrapper>
  );
}
