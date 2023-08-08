import { css, keyframes, styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import { StoryImgs } from "../StoryContent/StoryContent.style";
interface StyleProps {
  pos: number;
  count: number;
  isPlay: boolean;
}

const progress = keyframes`
  0%{
    width: 0;
  }

  100%{
    width: 100%;
  }
`;
export const ProgressBox = styled.div`
  height: 2px;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.4);
`;
export const Progress = styled.span<StyleProps>`
  display: block;
  height: 2px;
  flex: 1;
  background-color: ${COLOR.Gray1};
  opacity: 0;

  ${(props) =>
    props.pos === props.count &&
    css`
      opacity: 1;
      animation: ${progress} 3s linear infinite;
    `}
  ${(props) =>
    props.pos < props.count &&
    css`
      opacity: 1;
    `}

  ${StoryImgs}:active & {
    animation-play-state: paused;
  }

  ${(props) =>
    !props.isPlay &&
    css`
      animation-play-state: paused;
    `}
`;
