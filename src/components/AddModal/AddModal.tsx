import React, { useRef, useState, useEffect, useCallback } from "react";
import * as S from "./AddModal.style";
import * as Icon from "../Icon";
import TextArea from "../TextArea/TextArea";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  feedValueState,
  feedsState,
  whichAddModalOpenState,
} from "../../recoil/homeState";
import { useDropzone } from "react-dropzone";
import { useFileManage } from "../../hooks/useFileManage";
import { useHashTag } from "../../hooks/useHashTag";
import { FeedPayloadType } from "../../types/request/feed.request";
import { useFeedAPI } from "../../api/useFeedAPI";
import { useStoryAPI } from "../../api/useStoryAPI";
import { nowStoryState, storyDataState } from "../../recoil/storyState";

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

  const feedValue = useRecoilValue(feedValueState);
  const { extractHashtags } = useHashTag();

  // api 관련
  const { requestFeed } = useFeedAPI();
  const { requestPostStory } = useStoryAPI();
  const setFeeds = useSetRecoilState(feedsState);
  // const setWhichAddModalOpen = useSetRecoilState(whichAddModalOpen);

  const setStory = useSetRecoilState(storyDataState);
  const setNowStory = useSetRecoilState(nowStoryState);

  const nickname = localStorage.getItem("nickname");
  const userImg = localStorage.getItem("userImg") as string;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesWithPreview: FileWithPreview[] = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      }),
    );

    setFiles(filesWithPreview);
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
      const mediaUrls = (await handleUpload(files)) || [];
      const content = feedValue;
      const hashtags = extractHashtags(content);
      const payload: FeedPayloadType = { content, hashtags, mediaUrls };
      if (type === "feed") {
        requestFeed(payload, setFeeds);
      } else {
        requestPostStory({ mediaList: mediaUrls }, setStory);
        setNowStory(-1);
      }
      setWhichAddModalOpen("");
    }
  };
  // 스크롤 여러번 누를 시 이상하게 됨
  const rightHandler = () => {
    const current = imgboxRef.current;
    const width = current!.clientWidth;
    // const width = whichAddModalOpen === "feed" ? 499.97 : 399.97;
    // console.log(current!.scrollLeft % width);
    // console.log(current!.scrollLeft % width === 0);
    if (0 <= current!.scrollLeft % width) {
      if (files && pos < files.length - 1) {
        current?.scrollBy(width, 0);
        setPos(pos + 1);
      }
    }
  };

  const leftHandler = () => {
    const current = imgboxRef.current;
    // current?.scrollBy(-800, 0);
    const width = current!.clientWidth;
    // const width = whichAddModalOpen === "feed" ? 499.97 : 399.97;
    // console.log(current!.scrollLeft % width === 0);
    if (0 <= current!.scrollLeft % width) {
      if (pos > 0) {
        current?.scrollBy(-1 * width, 0);
        setPos(pos - 1);
      }
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
      <S.Wrapper step={step} type={whichAddModalOpen}>
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
              <S.ImgWrapper type={whichAddModalOpen}>
                <S.Images ref={imgboxRef} type={whichAddModalOpen}>
                  {files?.map((file) => {
                    if (file.type.includes("video")) {
                      return (
                        <S.Img as="video" src={file.preview} type={whichAddModalOpen} />
                      );
                    } else return <S.Img src={file.preview} type={whichAddModalOpen} />;
                  })}
                </S.Images>
                {files && files.length > 0 && pos > 0 && (
                  <S.ArrowBox onClick={leftHandler}>
                    <Icon.Left size={24} />
                  </S.ArrowBox>
                )}
                {files && files.length > 0 && pos < files.length - 1 && (
                  <S.ArrowRightBox onClick={rightHandler}>
                    <Icon.Right size={24} />
                  </S.ArrowRightBox>
                )}

                <S.PosBox>{files?.map(() => <S.PosDot pos={pos} />)}</S.PosBox>
              </S.ImgWrapper>
              {whichAddModalOpen === "feed" && (
                <S.SecondRightWrapper>
                  {/* 유저 정보 및 글 정보 */}
                  <S.UserInfo>
                    <S.UserProfile src={userImg} />
                    <S.UserName>{nickname}</S.UserName>
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
