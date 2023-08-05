import * as S from "./Story.style";

function Story() {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.ProfileImg src="https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg" />
      </S.ImageWrapper>
      <S.Span>username</S.Span>
    </S.Wrapper>
  );
}

export default Story;
