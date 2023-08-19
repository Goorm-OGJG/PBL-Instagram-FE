import React, { useState } from "react";
import * as S from "./StoryIcon.style";
import * as Icon from "../../../../components/Icon";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  isPlayState,
  isSettingState,
  storyDataState,
} from "../../../../recoil/storyState";
import { useStoryAPI } from "../../../../api/useStoryAPI";
import { useParams } from "react-router";

interface Props {
  type: string;
  onClick?: () => void;
  likeStatus?: boolean;
}
function StoryIcon({ type, onClick, likeStatus }: Props) {
  const [state, setState] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useRecoilState(isPlayState);
  const setIsSetting = useSetRecoilState(isSettingState);
  const { requestPostStoryLike, requestDeleteStoryLike } = useStoryAPI();
  const { storyId } = useParams();
  const setStoryData = useSetRecoilState(storyDataState);
  // console.log(storyId);

  const settingHandelr = () => {
    setIsSetting((prev) => !prev);
  };
  const playHandler = () => {
    setIsPlay(!isPlay);
  };

  const volumeHandler = () => {
    setState(!state);
  };

  const likeHandler = async () => {
    if (!likeStatus) {
      alert("좋아요 취소 요청");
      requestDeleteStoryLike(storyId as string, setStoryData);
    } else {
      alert("좋아요 요청");
      requestPostStoryLike(storyId as string, setStoryData);
      // requestStoryList(setStoryData);
    }
  };

  return (
    <React.Fragment>
      {type === "settings" && (
        <S.IconWrapper onClick={settingHandelr}>
          <Icon.HorizontalBold />
        </S.IconWrapper>
      )}
      {type === "play" && (
        <S.IconWrapper onClick={playHandler}>
          {isPlay ? (
            <S.IconBox>
              <Icon.Pause size={16} />
            </S.IconBox>
          ) : (
            <S.IconBox>
              <Icon.Play size={16} />
            </S.IconBox>
          )}
        </S.IconWrapper>
      )}
      {type === "volume" && (
        <S.IconWrapper onClick={volumeHandler}>
          {state ? (
            <S.IconBox>
              <Icon.Volume size={16} />
            </S.IconBox>
          ) : (
            <S.IconBox>
              <Icon.Mute size={16} />
            </S.IconBox>
          )}
        </S.IconWrapper>
      )}
      {type === "arrow-right" && (
        <S.ArrowRightWrapper onClick={onClick}>
          <Icon.Right size={30} />
        </S.ArrowRightWrapper>
      )}
      {type === "arrow-left" && (
        <S.ArrowLeftWrapper onClick={onClick}>
          <Icon.Left size={30} />
        </S.ArrowLeftWrapper>
      )}
      {type === "like" && (
        <S.LikeWrapper onClick={likeHandler}>
          <S.LikeBox likeStatus={likeStatus as boolean}>
            <Icon.Heart size={30} />
          </S.LikeBox>
          <S.LikeFillBox likeStatus={!likeStatus as boolean}>
            <Icon.HeartFill size={30} />
          </S.LikeFillBox>
        </S.LikeWrapper>
      )}
    </React.Fragment>
  );
}

export default StoryIcon;
