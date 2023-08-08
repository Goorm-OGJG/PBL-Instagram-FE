import * as S from "./SearchUser.style";

interface Props {
  type?: string;
}

function SearchUser({ type }: Props) {
  return (
    <S.UserBox to="./accounts/tmpusername">
      {type === "tag" ? (
        <S.Tag>#</S.Tag>
      ) : (
        <S.UserImg src="https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg" />
      )}

      <S.TextBox>
        <S.UserName>tmp-userName</S.UserName>
        <S.UserDescBox>
          <S.UserDesc>임시 유저이름</S.UserDesc>
          <S.MiddleDot>·</S.MiddleDot>
          <S.UserDesc>임시 유저이름입니다</S.UserDesc>
        </S.UserDescBox>
      </S.TextBox>
    </S.UserBox>
  );
}

export default SearchUser;
