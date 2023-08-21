import React, { useRef, useEffect } from "react";
import * as S from "./Progress.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  isSettingState,
  nowStoryState,
  storyDataState,
} from "../../../../recoil/storyState";
import { useNavigate, useParams } from "react-router";
import { useStoryAPI } from "../../../../api/useStoryAPI";

interface Props {
  pos: number;
  count: number;
  isPlay: boolean;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  current: HTMLDivElement | null;
  imgLength: number;
}
function Progress({ pos, count, isPlay, setCount, imgLength }: Props) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [nowStory, setNowStory] = useRecoilState(nowStoryState);
  const setIsSetting = useSetRecoilState(isSettingState);

  // api 관련
  const [data, setData] = useRecoilState(storyDataState);
  const { requestStoryRead } = useStoryAPI();
  const { storyId } = useParams();

  const countHandler = () => {
    const full = boxRef.current!.clientWidth;
    const now = progressRef.current!.clientWidth;
    if (now > full - 5) {
      if (count >= imgLength - 1) {
        // alert("다음 스토리로 이동");
        requestStoryRead(storyId as string, setData);

        if (nowStory < data.length - 1) {
          const next = nowStory + 1;
          setNowStory(next);
          setIsSetting(false);
          navigate(`/stories/${data[next].nickname}/${data[next].storyId}`);
        } else {
          navigate("/home");
          setNowStory(-1);
        }
        // 추가 데이터 붙이기
      } else {
        setCount(count + 1);
      }
    }
  };

  useEffect(() => {
    if (pos === count && count <= imgLength - 1) {
      const intervalId = setInterval(countHandler, 10);
      return () => {
        clearInterval(intervalId);
      };
    }
  });

  return (
    <S.ProgressBox ref={boxRef}>
      <S.Progress ref={progressRef} pos={pos} count={count} isPlay={isPlay} />
    </S.ProgressBox>
  );
}

export default Progress;
