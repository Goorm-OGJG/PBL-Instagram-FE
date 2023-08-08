import React from "react";
import * as Icon from "../../../components/Icon";
import * as S from "./PublicModal.style";
import * as FONT from "../../../constants/font";
import * as COLOR from "../../../constants/color";

export default function PublicModal({ isPublicModalOpen, setIsPublicModalOpen, setIsOn }) {
  const handleModalContentClick = (e) => {
    // 이벤트 버블링을 방지하여 모달이 닫히지 않도록 함
    e.stopPropagation();
  };
  return (
    <S.Overlay
      onClick={() => {
        setIsPublicModalOpen(false);
      }}
    >
      <S.PublicModalWrapper onClick={handleModalContentClick}>
        <S.PublicModalBox>
          <S.PublicModalTitle>공개 계정으로 전환하시겠어요?</S.PublicModalTitle>
          <S.PublicModalMessage>
            <S.MessageIcon>
              <Icon.Movie size={FONT.L} color={COLOR.Gray1} />
            </S.MessageIcon>
            누구나 회원님의 게시물, 릴스 및 스토리를 볼 수 있으며 회원님의 원본 오디오를
            사용할 수 있습니다.
          </S.PublicModalMessage>
          <S.PublicModalMessage>
            <S.MessageIcon>
              <Icon.At size={FONT.L} color={COLOR.Gray1} />
            </S.MessageIcon>
            회원님에게 메시지를 보내거나 회원님을 태그 또는 @언급할 수 있는 사람은
            변경되지 않습니다.
          </S.PublicModalMessage>
          <S.PublicModalMessage>
            <S.MessageIcon>
              <Icon.Change size={FONT.L} color={COLOR.Gray1} />
            </S.MessageIcon>
            사람들이 회원님의 릴스를 리믹스하거나 리믹스의 일부로 다운로드할 수 있습니다.
            설정에서 언제든지 이 옵션을 변경할 수 있습니다.
          </S.PublicModalMessage>
        </S.PublicModalBox>{" "}
        <S.PublicFooter>
          <S.PublicBtn 
            onClick={() => {setIsOn(true);
                setIsPublicModalOpen(false);}}>공개로 전환</S.PublicBtn>
          <S.PublicCancelBtn
            onClick={() => {
              setIsPublicModalOpen(false);
            }}
          >
            취소
          </S.PublicCancelBtn>
        </S.PublicFooter>
      </S.PublicModalWrapper>
    </S.Overlay>
  );
}
