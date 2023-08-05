import * as S from "./Footer.style";

function Footer() {
  return (
    <S.FooterStyle>
      <S.FooterMenu>
        <S.Span>소개</S.Span>
        <S.Span>도움말</S.Span>
        <S.Span>홍보 센터</S.Span>
        <S.Span>API</S.Span>
        <S.Span>채용 정보</S.Span>
        <S.Span>개인정보처리방침</S.Span>
        <S.Span>약관</S.Span>
        <S.Span>위치</S.Span>
        <S.Span>언어</S.Span>
        <S.Span>Meta Verified</S.Span>
      </S.FooterMenu>
      <S.CopyRight>© 2023 INSTAGRAM FROM META</S.CopyRight>
    </S.FooterStyle>
  );
}

export default Footer;
