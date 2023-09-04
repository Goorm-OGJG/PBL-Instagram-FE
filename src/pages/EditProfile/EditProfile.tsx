import * as S from "./EditProfile.style";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Toggle from "./components/Toggle";
import { useRecoilState, useRecoilValue } from "recoil";
import { ToggleState } from "../../recoil/profileState";
import { useFileManage } from "../../hooks/useFileManage";
import EditImgModal from "./components/EditImgModal";
import {
  EditImgModalState,
  EditImgFileState,
  EditImgState,
} from "../../recoil/editProfileState";
import { EditProfileResponseType } from "../../types/client/editProfile.client";
import { EditProfileState } from "../../recoil/profileState";
import useEditProfileAPI from "../../api/useEditProfileAPI";

function EditProfile() {
  const localIdString = localStorage.getItem("userId");
  const localId = localIdString !== null ? parseInt(localIdString) : null; // localStorage 값
  const navigate = useNavigate();
  const { nickname } = useParams();

  const { requestEditProfile, requestPutProfile, requestPutImgProfile } =
    useEditProfileAPI();
  const [editProfileData, setEditProfileData] =
    useRecoilState<EditProfileResponseType>(EditProfileState);
  const [text, setText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isOn, setIsOn] = useRecoilState<boolean>(ToggleState);
  const [countText, setCountText] = useState(0);
  const profileImg = useRecoilValue<string>(EditImgState);
  const [isEditImgModal, setIsEditImgModal] = useRecoilState<boolean>(EditImgModalState);
  const [localImg, setLocalImg] = useState<string>(" ");
  const file = useRecoilValue<File[]>(EditImgFileState);
  //🔥 API
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      // 폼 제출 기본 동작 막기
      e.preventDefault();
      setText(text + "\n");
      setCountText((prev) => prev + 1);
    }
  };
  const { handleUpload } = useFileManage();
  const handleSubmit = async () => {
    // 이미지 s3업로드
    //🔥 API
    if (file.length > 0) {
      const editporfileImg = file[0];
      const editImg = await handleUpload([editporfileImg]);

      // 이미지 return URL 백엔드에 전송
      //🔥 API

      if (editImg !== undefined) {
        const requestImgData = {
          imgUrl: editImg[0],
        };
        requestPutImgProfile(requestImgData);
        setLocalImg(requestImgData.imgUrl);
        localStorage.setItem("userImg", requestImgData.imgUrl);
      }
    }
    // 텍스트 수정후 백엔드에 전송
    //🔥 API
    const requestData = {
      userIntro: text,
      recommended: isChecked,
      secret: isOn,
    };
    if (localId !== null) {
      requestPutProfile(requestData);
      alert(`수정완료 되었습니다.`);
      navigate(`/accounts/${nickname}/`);
    }
  };

  useEffect(() => {
    const storedImg = localStorage.getItem("userImg");
    if (storedImg) {
      setLocalImg(storedImg);
    }

    //🔥 API
    const requestEdit = async () => {
      try {
        await requestEditProfile(setEditProfileData, setText, setIsChecked, setIsOn);
        const textlength = text.length;
        setCountText(textlength);
      } catch (error) {
        console.log(error);
      }
    };
    requestEdit();
  }, []);

  return (
    <>
      <S.EditProfileWrapper>
        <S.EditHeader>프로필 편집</S.EditHeader>
        <S.EditUserInfo>
          <S.EditUserImgBox>
            <S.UserImg src={profileImg ? profileImg : localImg} alt="profileImg" />
          </S.EditUserImgBox>
          <S.EditUserTextBox>
            <S.UserNickname>{nickname}</S.UserNickname>
            <S.UserImgEditBtn
              onClick={() => {
                setIsEditImgModal(true);
              }}
            >
              프로필 사진 바꾸기
            </S.UserImgEditBtn>
          </S.EditUserTextBox>
        </S.EditUserInfo>
        <S.EditEtcForm>
          <S.EditIntroBox>
            <S.EctTitle>소개</S.EctTitle>
            <S.InputBox>
              <S.IntroInput
                value={text ? text : editProfileData.userIntro}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setText(e.target.value);
                  setCountText(e.target.value.length);
                }}
                onKeyDown={handleKeyDown}
              />
              <S.InputCounter>{countText}/150</S.InputCounter>
            </S.InputBox>
          </S.EditIntroBox>
          <S.EditRecommendBox>
            <S.EctTitle>프로필 계정 추천 표시</S.EctTitle>
            <S.RecommendCheckBox
              type="checkbox"
              checked={isChecked ? isChecked : editProfileData.recommended}
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <S.RecommendExplain>
              사람들이 회원님의 프로필에서 비슷한 계정 추천을 볼 수 있는지와 회원님의
              계정이 다른 프로필에서 추천될 수 있는지를 선택하세요.
            </S.RecommendExplain>
          </S.EditRecommendBox>
          <S.PrivateHeader>내 콘텐츠를 볼 수 있는 사람</S.PrivateHeader>
          <S.EditPrivateBox>
            <S.PrivateTitle>계정 공개 범위</S.PrivateTitle>
            <S.PrivateTitle>
              비공개 계정
              <S.ToggleBox>
                <Toggle />
              </S.ToggleBox>
            </S.PrivateTitle>
            <S.PrivateExplain>
              계정이 공개 상태인 경우 Instagram 계정이 없는 사람을 포함해서 Instagram
              안팎의 모든 사람이 프로필과 게시물을 볼 수 있습니다. <br />
              계정이 비공개 상태인 경우 회원님이 승인한 팔로워만 회원님이 공유하는
              콘텐츠(해시태그 및 위치 페이지의 사진 또는 동영상 포함), 팔로워 및 팔로잉
              리스트를 볼 수 있습니다.
            </S.PrivateExplain>
            <S.EditBtnBox>
              <S.EditProfileBtn
                onClick={() => {
                  handleSubmit();
                }}
              >
                제출
              </S.EditProfileBtn>
            </S.EditBtnBox>
          </S.EditPrivateBox>
        </S.EditEtcForm>
      </S.EditProfileWrapper>
      {isEditImgModal && <EditImgModal />}
    </>
  );
}

export default EditProfile;
