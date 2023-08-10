import { Link } from "react-router-dom";
import { css, styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

interface StylePropsType {
  index: number;
  nowStory: number;
}

export const StoryWrapper = styled.div<StylePropsType>`
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

  ${(props) => {
    const index = props.index;
    const nowStory = props.nowStory;
    if (index !== nowStory) {
      let position = "0px";
      if (Math.abs(index - nowStory) === 1) {
        position = `${(index - nowStory) * 500}px`;
      } else {
        position = `${(index - nowStory) * 400}px`;
      }

      return css`
        left: calc(50% + ${position});
        transform: translate(-50%, -50%) scale(0.4);
      `;
    } else
      return css`
        left: calc(50%);
        transform: translate(-50%, -50%) scale(1);
      `;
  }}
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
