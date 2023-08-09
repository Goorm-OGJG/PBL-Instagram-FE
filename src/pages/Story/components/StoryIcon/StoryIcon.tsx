import React, { useState } from "react";
import * as S from "./StoryIcon.style";
import * as Icon from "../../../../components/Icon";
import { useRecoilState } from "recoil";
import { isPlayState } from "../../../../recoil/storyState";

interface Props {
  type: string;
  onClick?: () => void;
  likeStatus?: boolean;
}
function StoryIcon({ type, onClick, likeStatus }: Props) {
  const [state, setState] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useRecoilState(isPlayState);
  const playHandler = () => {
    setIsPlay(!isPlay);
  };

  const volumeHandler = () => {
    setState(!state);
  };

  const likeHandler = () => {
    if (likeStatus) {
      alert("좋아요 취소 요청");
    } else {
      alert("좋아요 요청");
    }
  };

  return (
    <React.Fragment>
      {type === "settings" && (
        <S.IconWrapper>
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
          <S.LikeFillBox likeStatus={likeStatus as boolean}>
            <Icon.HeartFill size={30} />
          </S.LikeFillBox>
        </S.LikeWrapper>
      )}
    </React.Fragment>
  );
}

export default StoryIcon;
