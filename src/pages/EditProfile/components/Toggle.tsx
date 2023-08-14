import { useState } from "react";
import PublicModal from "./PublicModal";
import PrivateModal from "./PrivateModal";
import { useRecoilState } from "recoil";
import { ToggleState } from "../../../recoil/profileState";
import * as S from "./Toggle.style";

export default function Toggle() {
  const [isOn, setIsOn] = useRecoilState<boolean>(ToggleState);
  const [isPublicModalOpen, setIsPublicModalOpen] = useState(false);
  const [isPrivateModalOpen, setIsPrivateModalOpen] = useState(false);
  const toggleHandler = () => {
    if (isOn === false) {
      setIsPublicModalOpen(!isPublicModalOpen);
    } else {
      setIsPrivateModalOpen(!isPrivateModalOpen);
    }
  };

  return (
    <>
      <S.ToggleWrapper isOn={isOn} onClick={toggleHandler}>
        <S.ToggleCircle isOn={isOn} />
      </S.ToggleWrapper>

      {isPublicModalOpen && (
        <PublicModal setIsPublicModalOpen={setIsPublicModalOpen} setIsOn={setIsOn} />
      )}
      {isPrivateModalOpen && (
        <PrivateModal setIsPrivateModalOpen={setIsPrivateModalOpen} setIsOn={setIsOn} />
      )}
    </>
  );
}
