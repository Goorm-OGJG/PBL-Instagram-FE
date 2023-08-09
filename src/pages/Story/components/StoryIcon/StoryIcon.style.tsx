import { css, keyframes, styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import { StoryWrapper } from "../StoryContent/StoryContent.style";

interface LikeProps {
  likeStatus: boolean;
}

const likeAppear = keyframes`
  0%{
    transform:scale(1);
    
  }
  50%{
    transform: scale(1.2)
  }
  100%{
    transform:scale(1)
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
  padding: 10px;
  cursor: pointer;

  &:active {
    color: ${COLOR.Gray2};
  }
`;
export const IconBox = styled.div``;

export const ArrowLeftWrapper = styled(IconWrapper)`
  position: absolute;
  left: -56px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);

  transition: 0.3s;
  ${StoryWrapper}:hover & {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const ArrowRightWrapper = styled(IconWrapper)`
  position: absolute;
  right: -56px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);

  transition: 0.3s;
  ${StoryWrapper}:hover & {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const LikeWrapper = styled(IconWrapper)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const LikeBox = styled(IconBox)<LikeProps>`
  ${(props) =>
    props.likeStatus &&
    css`
      display: block;
    `};
`;
export const LikeFillBox = styled(IconBox)<LikeProps>`
  position: absolute;
  animation: ${likeAppear} 0.5s 1 both;
  display: none;
  color: ${COLOR.Red1};
  ${(props) =>
    props.likeStatus &&
    css`
      display: block;
    `};
`;
