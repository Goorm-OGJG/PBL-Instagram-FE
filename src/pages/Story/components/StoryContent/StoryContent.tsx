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
import { useNavigate, useParams } from "react-router";
import { useStoryAPI } from "../../../../api/useStoryAPI";

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
  const { createdAt, mediaList, nickname, profileImg, readAll } = story;
  const timeCalculate = useTimeCalculate();
  const diff_date = timeCalculate(createdAt);

  const [data, setData] = useRecoilState(storyDataState);
  // api 관련
  const [nowStory, setNowStory] = useRecoilState(nowStoryState);
  const { storyId } = useParams();
  const { requestStoryRead } = useStoryAPI();

  const rightHadler = () => {
    if (count >= mediaList.length - 1) {
      // alert("다음 스토리로 이동");
      requestStoryRead(storyId as string, setData);

      if (nowStory < data.length - 1) {
        const next = nowStory + 1;
        setNowStory(next);
        navigate(`/stories/${data[next].nickname}/${data[next].storyId}`);
      } else {
        navigate("/home");
        setNowStory(-1);
      }
    } else {
      setCount(count + 1);
    }
  };
  const leftHandler = () => {
    if (count == 0) {
      if (nowStory > 0) {
        const prev = nowStory - 1;
        setNowStory(prev);
        navigate(`/stories/${data[prev].nickname}/${data[prev].storyId}`);
      }
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
            <S.OtherProfileDiv readAll={readAll}>
              <S.OtherProfileImg
                src={profileImg}
                onClick={() => navigate(`/accounts/${nickname}`)}
              />
            </S.OtherProfileDiv>
            <S.OtherName to={`/accounts/${nickname}`}>{nickname}</S.OtherName>
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
                <S.ProfileImg
                  src={profileImg}
                  onClick={() => navigate(`/accounts/${nickname}`)}
                />
                <S.UserName to={`/accounts/${nickname}`}>{nickname}</S.UserName>
                <S.UploadTime>{diff_date}</S.UploadTime>
              </S.UserInfo>
              {nowStory === index && <ControlBox nickname={nickname} />}
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
    </S.StoryWrapper>
  );
}

export default StoryContent;
