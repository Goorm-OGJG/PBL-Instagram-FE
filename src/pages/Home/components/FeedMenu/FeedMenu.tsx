import { useFeedAPI } from "../../../../api/useFeedAPI";
import * as S from "./FeedMenu.style";
import React from "react";

interface PropsTye {
  isFeedMenuOpen: number;
  setIsFeedMenuOpen: React.Dispatch<React.SetStateAction<number>>;
  nickname: string;
}

function FeedMenu({ isFeedMenuOpen, setIsFeedMenuOpen, nickname }: PropsTye) {
  const { requestDeleteFeed } = useFeedAPI();
  const feedDeleteHandler = () => {
    requestDeleteFeed(isFeedMenuOpen);
    setIsFeedMenuOpen(0);
  };
  const myNickname = localStorage.getItem("nickname");
  return (
    <React.Fragment>
      {nickname == myNickname && (
        <S.Div onClick={feedDeleteHandler}>
          <S.Span>피드 삭제</S.Span>
        </S.Div>
      )}
    </React.Fragment>
  );
}

export default FeedMenu;
