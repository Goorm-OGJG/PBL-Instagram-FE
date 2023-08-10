import React, { useRef, useState, useEffect, useCallback } from "react";
import * as S from "./AddModal.style";
import * as Icon from "../Icon";
import TextArea from "../TextArea/TextArea";
import { useRecoilState } from "recoil";
import { whichAddModalOpenState } from "../../recoil/homeState";
import { useDropzone } from "react-dropzone";
import { useFileManage } from "../../hooks/useFileManage";

interface Props {
  type: string;
}

interface FileWithPreview extends File {
  preview: string;
}

function AddModal({ type }: Props) {
  const [step, setStep] = useState(1);
  const imgboxRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(0);
  const [whichAddModalOpen, setWhichAddModalOpen] =
    useRecoilState(whichAddModalOpenState);

  const [files, setFiles] = useState<FileWithPreview[] | null>(null);
  const { handleUpload } = useFileManage();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // console.log(acceptedFiles);
    const filesWithPreview: FileWithPreview[] = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      }),
    );
    setFiles(filesWithPreview);
    // console.log(filesWithPreview);
    setStep(step + 1);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/png": [], "image/jpeg": [], "video/mp4": [] },
    onDrop,
  });

  const buttonHandler = async () => {
    if (step === 1) {
      setStep(step + 1);
    } else if (step === 2) {
      // 업로드 테스트
      const fileUrls = handleUpload(files);
      console.log(fileUrls);
      // 삭제 테스트
      // handleDelete(
      //   "https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/videos/people_-_84973+(720p).mp4",
      // );
    }
  };
  // 스크롤 여러번 누를 시 이상하게 됨
  const rightHandler = () => {
    const current = imgboxRef.current;
    const width = current!.clientWidth;
    if (pos < 2) {
      current?.scrollBy(width, 0);
      setPos(pos + 1);
    }
  };

  const leftHandler = () => {
    const current = imgboxRef.current;
    // current?.scrollBy(-800, 0);
    const width = current!.clientWidth;
    if (pos > 0) {
      current?.scrollBy(-1 * width, 0);
      setPos(pos - 1);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [whichAddModalOpen]);

  return (
    <S.Overlay>
      <S.Wrapper step={step}>
        <S.ModalHeader>
          {step > 1 && <S.HeadText onClick={() => setStep(step - 1)}>뒤로</S.HeadText>}
          <S.ModalTitle>
            {type === "feed" ? "새 게시물 만들기" : "새 스토리 만들기"}
          </S.ModalTitle>
          <S.HeadButton onClick={buttonHandler}>{`${
            step < 2 ? "다음" : "공유하기"
          }`}</S.HeadButton>
        </S.ModalHeader>
        <S.Section>
          {/* 1단계 */}
          {step === 1 && (
            <S.FirstStepWrapper {...getRootProps()}>
              <input {...getInputProps()} />
              <React.Fragment>
                <Icon.ImageAdd size={96} />
                <S.Span>사진과 동영상을 여기에 끌어다 놓으세요</S.Span>
                <S.Button>컴퓨터에서 선택</S.Button>
              </React.Fragment>
            </S.FirstStepWrapper>
          )}

          {/* 2단계 */}
          {step === 2 && (
            <S.SecondStepWrapper>
              <S.ImgWrapper>
                <S.Images ref={imgboxRef}>
                  {files?.map((file) => <S.Img src={file.preview} />)}
                  <S.Img src="https://cdn.pixabay.com/photo/2019/12/07/14/57/rubber-4679464_1280.png" />
                  <S.Img src="https://cdn.pixabay.com/photo/2019/12/07/14/57/rubber-4679464_1280.png" />
                  <S.Img src="https://cdn.pixabay.com/photo/2019/12/07/14/57/rubber-4679464_1280.png" />
                </S.Images>
                <S.ArrowBox onClick={leftHandler}>
                  <Icon.Left size={24} />
                </S.ArrowBox>
                <S.ArrowRightBox onClick={rightHandler}>
                  <Icon.Right size={24} />
                </S.ArrowRightBox>
                <S.PosBox>
                  <S.PosDot pos={pos} />
                  <S.PosDot pos={pos} />
                  <S.PosDot pos={pos} />
                </S.PosBox>
              </S.ImgWrapper>
              {whichAddModalOpen === "feed" && (
                <S.SecondRightWrapper>
                  {/* 유저 정보 및 글 정보 */}
                  <S.UserInfo>
                    <S.UserProfile src="https://cdn.pixabay.com/photo/2019/12/07/14/57/rubber-4679464_1280.png" />
                    <S.UserName>username</S.UserName>
                  </S.UserInfo>
                  <TextArea />
                </S.SecondRightWrapper>
              )}
            </S.SecondStepWrapper>
          )}
        </S.Section>
      </S.Wrapper>
      {/* 닫기 버튼 */}
      <S.CloseBox onClick={() => setWhichAddModalOpen("")}>
        <Icon.Close size={32} />
      </S.CloseBox>
    </S.Overlay>
  );
}

export default AddModal;
