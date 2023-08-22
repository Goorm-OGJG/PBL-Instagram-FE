import * as S from "./EditImgModal.style";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  EditImgFileState,
  EditImgModalState,
  EditImgState,
  EditProfileState,
} from "../../../recoil/editProfileState";
import { EditProfileResponseType } from "../../../types/client/editProfile.client";

// interface Account {
//   userid: number;
//   nickname: string;
//   userImg: string;
//   userIntro: string;
//   isRecommended: boolean;
//   isSecret: boolean;
// }
// const editProfileData: Account = {
//   userid: 1,
//   nickname: "JamesJoe",
//   userImg:
//     "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg",
//   userIntro: "asdasdadasdasd",
//   isRecommended: true,
//   isSecret: true,
// };

function EditImgModal() {
  const setProfileImg = useSetRecoilState<string>(EditImgState);
  const setIsEditImgModal = useSetRecoilState<boolean>(EditImgModalState);
  const setFile = useSetRecoilState<File[]>(EditImgFileState);
  //🔥 API
  const editProfileData = useRecoilValue<EditProfileResponseType>(EditProfileState);
  useEffect(() => {
    if (editProfileData.profileImg !== null) {
      setProfileImg(editProfileData.profileImg);
    }
  }, []);

  return (
    <S.Overlay>
      <S.EditImgModalWrapper>
        <S.EditImgModalHeader>프로필 사진 바꾸기</S.EditImgModalHeader>
        <S.ImgUpload htmlFor="inputImg">
          <S.InputImg
            id="inputImg"
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files.length > 0) {
                const selectedFileList = Array.from(e.target.files);
                setFile(selectedFileList);
                const selectedImage = e.target.files[0];
                setProfileImg(URL.createObjectURL(selectedImage));
                setIsEditImgModal(false);
              }
            }}
          />
          <S.ImgUploadMessage>사진 업로드</S.ImgUploadMessage>
        </S.ImgUpload>
        <S.EditModalCancel
          onClick={() => {
            setIsEditImgModal(false);
          }}
        >
          <S.ImgUploadMessage>취소</S.ImgUploadMessage>
        </S.EditModalCancel>
      </S.EditImgModalWrapper>
    </S.Overlay>
  );
}

export default EditImgModal;
