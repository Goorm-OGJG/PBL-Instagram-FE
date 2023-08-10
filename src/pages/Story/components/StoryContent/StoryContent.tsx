import React, { useRef, useState } from "react";
import * as S from "./StoryContent.style";
import StoryIcon from "../StoryIcon/StoryIcon";
import ControlBox from "../ControlBox/ControlBox";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  isPlayState,
  nowStoryState,
  storyDataState,
} from "../../../../recoil/storyState";
import Progress from "../Progress/Progress";
import * as T from "../../../../types/client/story.client";
import { useTimeCalculate } from "../../../../hooks/useTimeCalculate";
import { useNavigate } from "react-router";

interface Props {
  story: T.StoryType;
  index: number;
}

function StoryContent({ story, index }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const isPlay = useRecoilValue(isPlayState);

  const navigate = useNavigate();
  // 업로드 시간 계산
  const { createdAt, mediaList, nickname, profileImg } = story;
  const timeCalculate = useTimeCalculate();
  const diff_date = timeCalculate(createdAt);
  const data = useRecoilValue(storyDataState);
  const [nowStory, setNowStory] = useRecoilState(nowStoryState);

  const rightHadler = () => {
    // console.log(count);
    if (count >= mediaList.length - 1) {
      if (nowStory < data.length - 1) {
        const next = nowStory + 1;
        setNowStory(next);
        navigate(`/stories/${data[next].nickname}/${data[next].storyId}`);
      } else {
        console.log("마지막 스토리 입니다.");
        navigate("/home");
      }
      // 추가 데이터 붙이기
    } else {
      console.log("사진 넘기기");
      setCount(count + 1);
    }
  };
  const leftHandler = () => {
    if (count <= 0) {
      if (nowStory > 0) {
        const prev = nowStory - 1;
        setNowStory(prev);
        navigate(`/stories/${data[prev].nickname}/${data[prev].storyId}`);
      } else {
        console.log("이전 마지막 스토리 입니다.");
      }
      console.log("이전 스토리로 이동");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <S.StoryWrapper ref={ref} index={index} nowStory={nowStory}>
      <React.Fragment>
        {nowStory > 0 && nowStory === index && (
          <StoryIcon type="arrow-left" onClick={leftHandler} />
        )}
        {nowStory === index && <StoryIcon type="arrow-right" onClick={rightHadler} />}
      </React.Fragment>
      <S.StoryImgs>
        {/* 현재 보고 있는 스토리가 아닐 때 */}
        {nowStory !== index && (
          <S.OtherProfileBox>
            <S.OtherProfileDiv>
              <S.OtherProfileImg src={profileImg} />
            </S.OtherProfileDiv>
            <S.OtherName to="/home">{nickname}</S.OtherName>
            <S.OtherUpload>{diff_date}</S.OtherUpload>
          </S.OtherProfileBox>
        )}

        {/* 프로그레스바 및 유저 정보 */}
        {nowStory === index && (
          <S.StoryHeader>
            <S.Progresses>
              {mediaList.map((_, i) => (
                <Progress
                  pos={i}
                  count={count}
                  isPlay={isPlay}
                  setCount={setCount}
                  current={ref?.current}
                  imgLength={mediaList.length}
                />
              ))}
            </S.Progresses>
            <S.StoryInfo>
              <S.UserInfo>
                <S.ProfileImg src="https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg" />
                <S.UserName to="/accounts/username">{nickname}</S.UserName>
                <S.UploadTime>{diff_date}</S.UploadTime>
              </S.UserInfo>
              {nowStory === index && <ControlBox />}
            </S.StoryInfo>
          </S.StoryHeader>
        )}

        {/* 스토리 이미지 */}
        {mediaList.map(
          (media, i) =>
            count === i && (
              <React.Fragment>
                <S.StoryImg src={media.mediaUrl} />
                <StoryIcon type="like" likeStatus={media.likeStatus} />
              </React.Fragment>
            ),
        )}
      </S.StoryImgs>
      {/* <StoryIcon type="like" /> */}
    </S.StoryWrapper>
  );
}

export default StoryContent;
