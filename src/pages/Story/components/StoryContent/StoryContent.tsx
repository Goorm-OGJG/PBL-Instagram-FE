import React, { useRef, useState } from "react";
import * as S from "./StoryContent.style";
import StoryIcon from "../StoryIcon/StoryIcon";
import ControlBox from "../ControlBox/ControlBox";
import { useRecoilValue } from "recoil";
import { isPlayState } from "../../../../recoil/storyState";
import Progress from "../Progress/Progress";

interface Props {
  id: string;
  idx: number;
  setIdx: React.Dispatch<React.SetStateAction<number>>;
}

function StoryContent({ id, idx, setIdx }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const isPlay = useRecoilValue(isPlayState);
  // const [sec, setSec] = useState(0);
  const rightHadler = () => {
    if (count >= 2) {
      if (ref?.current) {
        ref?.current?.parentElement?.firstChild?.remove();
        const tmp = ref?.current.cloneNode(true);
        ref?.current?.parentElement?.appendChild(tmp);
        setIdx(idx + 1);
      }
    } else {
      setCount(count + 1);
    }
  };
  const leftHandler = () => {
    if (count <= 0) {
      if (ref?.current) {
        const parent = ref?.current?.parentElement;
        parent?.lastChild?.remove();
        const tmp = ref?.current.cloneNode(true);
        parent?.insertBefore(tmp, parent?.firstChild);
        setIdx(idx - 1);
      }
    } else {
      setCount(count - 1);
    }
  };

  return (
    <S.StoryWrapper ref={ref}>
      <React.Fragment>
        <StoryIcon type="arrow-left" onClick={leftHandler} />
        <StoryIcon type="arrow-right" onClick={rightHadler} />
      </React.Fragment>
      <S.StoryImgs>
        {/* 현재 보고 있는 스토리가 아닐 때 */}

        <S.OtherProfileBox>
          <S.OtherProfileDiv>
            <S.OtherProfileImg src="https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg" />
          </S.OtherProfileDiv>
          <S.OtherName to="/home">other_user</S.OtherName>
          <S.OtherUpload>3시간</S.OtherUpload>
        </S.OtherProfileBox>
        {/* 프로그레스바 및 유저 정보 */}
        <S.StoryHeader>
          <S.Progresses>
            <Progress
              pos={0}
              count={count}
              isPlay={isPlay}
              setCount={setCount}
              id={id}
              idx={idx}
              setIdx={setIdx}
              current={ref?.current}
            />
            <Progress
              pos={1}
              count={count}
              isPlay={isPlay}
              setCount={setCount}
              id={id}
              idx={idx}
              setIdx={setIdx}
              current={ref?.current}
            />
            <Progress
              pos={2}
              count={count}
              isPlay={isPlay}
              setCount={setCount}
              id={id}
              idx={idx}
              setIdx={setIdx}
              current={ref?.current}
            />
          </S.Progresses>
          <S.StoryInfo>
            <S.UserInfo>
              <S.ProfileImg src="https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg" />
              <S.UserName to="/accounts/username">tmpusername</S.UserName>
              <S.UploadTime>23시간</S.UploadTime>
            </S.UserInfo>
            <ControlBox />
          </S.StoryInfo>
        </S.StoryHeader>
        {/* 스토리 이미지 */}
        {count === 0 && (
          <React.Fragment>
            <S.StoryImg
              src="https://cdn.pixabay.com/photo/2023/05/12/19/02/mountains-7989160_1280.jpg"
              id="0"
            />
            <StoryIcon type="like" />
          </React.Fragment>
        )}
        {count === 1 && (
          <React.Fragment>
            <S.StoryImg
              src="https://cdn.pixabay.com/photo/2023/07/27/13/37/cottage-8153413_1280.jpg"
              id="1"
            />
            <StoryIcon type="like" />
          </React.Fragment>
        )}
        {count === 2 && (
          <React.Fragment>
            <S.StoryImg
              src="https://cdn.pixabay.com/photo/2023/04/07/09/19/woman-7905926_1280.jpg"
              id="2"
            />
            <StoryIcon type="like" />
          </React.Fragment>
        )}
      </S.StoryImgs>
      {/* <StoryIcon type="like" /> */}
    </S.StoryWrapper>
  );
}

export default StoryContent;
