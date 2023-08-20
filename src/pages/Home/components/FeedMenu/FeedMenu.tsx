import { useFeedAPI } from "../../../../api/useFeedAPI";
import * as S from "./FeedMenu.style";

interface PropsTye {
  isFeedMenuOpen: number;
  setIsFeedMenuOpen: React.Dispatch<React.SetStateAction<number>>;
}

function FeedMenu({ isFeedMenuOpen, setIsFeedMenuOpen }: PropsTye) {
  const { requestDeleteFeed } = useFeedAPI();
  const feedDeleteHandler = () => {
    console.log(isFeedMenuOpen);
    requestDeleteFeed(isFeedMenuOpen);
    setIsFeedMenuOpen(0);
  };

  return (
    <S.Div onClick={feedDeleteHandler}>
      <S.Span>피드 삭제</S.Span>
    </S.Div>
  );
}

export default FeedMenu;
