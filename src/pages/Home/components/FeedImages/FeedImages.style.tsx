import { css, styled } from "styled-components";
import * as COLOR from "../../../../constants/color";

interface ArrowProps {
  direction?: string;
  imgPos?: number;
  pos?: number;
}

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

  opacity: 0;
  visibility: hidden;
  transition: 0.3s;

  ${ImgWrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }

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
  overflow-x: hidden;
  scroll-behavior: smooth;
  border-radius: 5px;
`;

export const FeedImg = styled.img`
  width: 100%;
  height: 470px;
`;

export const ImgPosBox = styled.div<ArrowProps>`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

export const ImgPos = styled.span<ArrowProps>`
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 2px;
  background-color: rgba(255, 255, 255, 0.5);

  &:nth-child(${(props) => props.imgPos! + 1}) {
    background-color: ${COLOR.Gray1};
  }
`;
