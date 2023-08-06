import { Link } from "react-router-dom";
import { styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

export const StoryWrapper = styled.div`
  max-width: 600px;
  height: 95vh;
  max-height: 1068px;
  min-height: 580px;
  color: white;
  position: absolute;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin: 0 46px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  &:nth-child(1) {
    left: calc(50% - 1100px);
    transform: translate(-50%, -50%) scale(0.4);
  }

  &:nth-child(2) {
    left: calc(50% - 800px);
    transform: translate(-50%, -50%) scale(0.4);
  }
  &:nth-child(3) {
    left: calc(50% - 500px);
    transform: translate(-50%, -50%) scale(0.4);
  }
  &:nth-child(4) {
    left: calc(50%);
    transform: translate(-50%, -50%) scale(1);
  }
  &:nth-child(5) {
    left: calc(50% + 500px);
    transform: translate(-50%, -50%) scale(0.4);
  }

  &:nth-child(6) {
    left: calc(50% + 800px);
    transform: translate(-50%, -50%) scale(0.4);
  }
  &:nth-child(7) {
    left: calc(50% + 1100px);
    transform: translate(-50%, -50%) scale(0.4);
  }
`;

export const StoryImgs = styled.div`
  height: auto;
  object-fit: fill;
  position: relative;
  border-radius: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* overflow: scroll; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StoryImg = styled.img`
  height: 100%;
  max-width: 600px;
  object-fit: fill;
  position: relative;
  border-radius: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StoryHeader = styled.header`
  width: 95%;
  position: absolute;
  z-index: 10;
  top: 15px;

  ${StoryWrapper}:not(:nth-child(4)) & {
    opacity: 0;
    visibility: hidden;
  }
`;

export const Progresses = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 15px;
`;

export const StoryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserName = styled(Link)`
  color: ${COLOR.Gray1};
  text-decoration: none;
  font-size: ${FONT.S};
`;

export const UploadTime = styled.span`
  color: ${COLOR.White};
  font-size: ${FONT.S};
`;

export const OtherProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%) scale(2);
  align-items: center;
  gap: 3px;

  ${StoryWrapper}:nth-child(4) & {
    opacity: 0;
    visibility: hidden;
  }
`;

export const OtherProfileDiv = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(${COLOR.Main});
  border-radius: 50%;
`;
export const OtherProfileImg = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 50%;
`;

export const OtherName = styled(UserName)`
  font-size: ${FONT.XL};
`;

export const OtherUpload = styled(UploadTime)`
  font-size: ${FONT.XL};
`;
