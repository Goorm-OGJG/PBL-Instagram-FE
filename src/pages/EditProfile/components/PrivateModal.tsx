import * as Icon from "../../../components/Icon";
import * as S from "./PrivateModal.style";
import * as FONT from "../../../constants/font";
import * as COLOR from "../../../constants/color";

export default function Private({ setIsPrivateModalOpen, setIsOn }) {
  const handleModalContentClick = (e) => {
    // 이벤트 버블링을 방지하여 모달이 닫히지 않도록 함
    e.stopPropagation();
  };
  return (
    <S.Overlay
      onClick={() => {
        setIsPrivateModalOpen(false);
      }}
    >
      <S.PrivateModalWrapper onClick={handleModalContentClick}>
        <S.PrivateModalBox>
          <S.PrivateModalTitle>비공개 계정으로 전환하시겠어요?</S.PrivateModalTitle>
          <S.PrivateModalMessage>
            <S.MessageIcon>
              <Icon.Movie size={FONT.L} color={COLOR.Gray1} />
            </S.MessageIcon>
            회원님의 팔로워만 회원님의 사진과 동영상을 볼 수 있습니다.
          </S.PrivateModalMessage>
          <S.PrivateModalMessage>
            <S.MessageIcon>
              <Icon.At size={FONT.L} color={COLOR.Gray1} />
            </S.MessageIcon>
            회원님에게 메시지를 보내거나 회원님을 태그 또는 @언급할 수 있는 사람은 변경되지 않지만, 회원님을 팔로우하지 않는 사람을 태그할 수 없게 됩니다.
          </S.PrivateModalMessage>
        </S.PrivateModalBox>{" "}
        <S.PrivateFooter>
          <S.PrivateBtn 
            onClick={() => {setIsOn(false);
                setIsPrivateModalOpen(false);}}>비공개로 전환</S.PrivateBtn>
          <S.PrivateCancelBtn
            onClick={() => {
                setIsPrivateModalOpen(false);
            }}
          >
            취소
          </S.PrivateCancelBtn>
        </S.PrivateFooter>
      </S.PrivateModalWrapper>
    </S.Overlay>
  );
}
