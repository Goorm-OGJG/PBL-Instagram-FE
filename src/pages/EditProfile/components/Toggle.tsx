import { useState } from "react";
import PublicModal from "./PublicModal";
import PrivateModal from "./PrivateModal";
import { useRecoilState, useRecoilValue } from "recoil";
import { ToggleState } from "../../../recoil/profileState";
import * as S from "./Toggle.style";
import { EditProfileResponseType } from "../../../types/client/editProfile.client";
import { EditProfileState } from "../../../recoil/editProfileState";

export default function Toggle() {
  const [isOn, setIsOn] = useRecoilState<boolean>(ToggleState);
  const [isPublicModalOpen, setIsPublicModalOpen] = useState(false);
  const [isPrivateModalOpen, setIsPrivateModalOpen] = useState(false);
  const editProfileData = useRecoilValue<EditProfileResponseType>(EditProfileState);
  const toggleHandler = () => {
    if (isOn) {
      setIsPublicModalOpen(!isPublicModalOpen);
    } else {
      setIsPrivateModalOpen(!isPrivateModalOpen);
    }
  };

  return (
    <>
      <S.ToggleWrapper isOn={isOn} onClick={toggleHandler}>
        <S.ToggleCircle isOn={isOn ? isOn : editProfileData.secret} />
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
