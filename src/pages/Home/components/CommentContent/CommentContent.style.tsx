import { Link } from "react-router-dom";
import { styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

export const ProfileWrapper = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const ProfileImgBox = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid ${COLOR.White};
`;

export const UserName = styled(Link)`
  text-decoration: none;
  color: ${COLOR.Black};
  margin-right: 5px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  &:hover {
    color: ${COLOR.Gray2};
  }
`;

export const CommentText = styled.span`
  font-size: ${FONT.S};
  color: ${COLOR.Black};
  word-break: break-all;
`;

export const TextWrapper = styled.div``;

export const CommentInfoWrapper = styled.div`
  display: flex;
  height: 14px;
  margin-top: 5px;
`;

export const InfoText = styled.span`
  font-size: ${FONT.XS};
  color: ${COLOR.Gray3};
  font-weight: ${FONT.Bold};
  cursor: pointer;
  margin-right: 10px;
`;

export const UploadText = styled(InfoText)`
  font-weight: ${FONT.Medium};
`;

export const IconWrapper = styled.div`
  position: relative;
  margin-top: 5px;
  margin-left: 10px;
`;

export const IconBox = styled.div`
  display: flex;
  height: fit-content;
  cursor: pointer;
`;

export const IconBoxFill = styled(IconBox)`
  position: absolute;
  top: 0;
  opacity: 0;
  visibility: hidden;
  color: ${COLOR.Red1};
`;

export const SettingBox = styled(IconBox)`
  display: none;
  transform: translateY(-2px);
  ${ProfileWrapper}:hover & {
    display: block;
  }
`;