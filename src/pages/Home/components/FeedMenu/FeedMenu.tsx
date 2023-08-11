import * as S from "./FeedMenu.style";

function FeedMenu() {
  const feedDeleteHandler = () => {
    alert("피드 삭제 요청");
  };

  return (
    <S.Div onClick={feedDeleteHandler}>
      <S.Span>피드 삭제</S.Span>
    </S.Div>
  );
}

export default FeedMenu;
