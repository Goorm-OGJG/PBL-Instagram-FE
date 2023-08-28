import { css, keyframes, styled } from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

interface IconProps {
  type?: string;
  isClick?: boolean;
}

interface ArrowProps {
  direction: string;
  imgPos: number;
}
export const FeedWrapper = styled.div`
  width: 100%;
  background-color: #000;
  padding-bottom: 15px;
  border-bottom: 1px solid ${COLOR.Gray4};
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 10px 10px 10px 0;
  cursor: pointer;
`;

export const UserName = styled.span`
  line-height: 18px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  height: fit-content;
  padding-right: 5px;
  cursor: pointer;
`;

export const UploadDate = styled(UserName)`
  color: ${COLOR.Gray2};
  font-weight: ${FONT.Medium};
  position: relative;
  padding-left: 16px;
  &::before {
    content: "·";
    font-size: ${FONT.L};
    font-weight: ${FONT.Bold};
    position: absolute;
    top: -1px;
    left: 8px;
    transform: translateX(-50%);
  }
`;

export const HorizontalIconBox = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 12px;
  cursor: pointer;
  &:hover {
    color: ${COLOR.Gray2};
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
`;
export const Arrow = styled.div<ArrowProps>`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.8);
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.direction === "right" &&
    css`
      right: 0;
    `}
  ${(props) =>
    props.imgPos === 2 &&
    props.direction === "right" &&
    css`
      display: none;
    `};

  ${(props) =>
    props.direction === "left" &&
    css`
      left: 0;
    `};
  ${(props) =>
    props.imgPos === 0 &&
    props.direction === "left" &&
    css`
      display: none;
    `};
`;
export const ImgBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  border-radius: 5px;
`;

export const FeedImg = styled.img`
  width: 100%;
  height: 470px;
  z-index: -1;
`;

export const FeedIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  padding-bottom: 6px;
`;

export const FeedIconLeftBox = styled.div`
  position: relative;
  display: flex;
`;

export const FeedIconRightBox = styled.div`
  position: relative;
`;

export const IconBox = styled.div<IconProps>`
  display: flex;
  padding: 6px;
  cursor: pointer;
  ${(props) =>
    props.type?.includes("fill") &&
    css`
      position: absolute;
      top: 0;
      opacity: 0;
      visibility: hidden;
    `}

  ${(props) =>
    props.type?.includes("bookmark") &&
    css`
      padding: 8px;
    `}
  ${(props) =>
    props.type === "bookmark-fill" &&
    props.isClick &&
    css`
      opacity: 1;
      visibility: visible;
      animation: ${likeAppear} 0.5s 1 both;
    `}
  ${(props) =>
    props.type === "heart-fill" &&
    css`
      color: ${COLOR.Red1};
    `}
    
  ${(props) =>
    props.type === "heart-fill" &&
    props.isClick &&
    css`
      opacity: 1;
      visibility: visible;
      animation: ${likeAppear} 0.5s 1 both;
    `}
    ${(props) =>
    props.type === "heart" &&
    props.isClick &&
    css`
      opacity: 0;
      visibility: hidden;
    `}


  ${(props) =>
    props.type === "comment" &&
    css`
      transform: scaleX(-1);
    `}

  &:hover {
    ${(props) =>
      !props.type?.includes("fill") &&
      css`
        color: ${COLOR.Gray2};
      `}
  }
`;

export const Span = styled.span`
  line-height: 18px;
  padding: 2px 0;
  font-size: ${FONT.S};
  word-break: break-all;
`;

export const Content = styled.span`
  line-height: 18px;
  padding: 0;
  font-size: ${FONT.S};
  word-break: break-all;
  padding-left: 5px;

  & > :not(:first-child) {
    display: none;
  }

  & > span {
    color: ${COLOR.Blue2};
    cursor: pointer;
  }
`;

export const LikeSpan = styled(Span)`
  cursor: pointer;
`;

export const Desc = styled(Span)`
  color: ${COLOR.Gray2};
  cursor: pointer;
`;

export const Div = styled.div`
  padding: 3px 0;
`;

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
