import { Link } from "react-router-dom";
import { styled } from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Main = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const NowStoryWrapper = styled.div`
  max-width: 600px;
  height: 95vh;
  max-height: 1068px;
  min-height: 580px;
  color: white;
  background-color: #ddd;
  position: relative;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin: 0 46px;

  /* &:hover > div { */
  /* color: rgba(255, 255, 255, 0.8); */
  /* } */
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

export const ProgressBox = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 15px;
`;

export const Progress = styled.span`
  height: 2px;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.4);
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
