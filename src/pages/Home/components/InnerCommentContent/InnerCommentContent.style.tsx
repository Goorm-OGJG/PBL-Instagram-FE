import { css, keyframes, styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

interface IconProps {
  isClick?: boolean;
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
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid ${COLOR.White};
`;

export const UserName = styled.span`
  text-decoration: none;
  color: ${COLOR.Black};
  margin-right: 5px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  &:hover {
    color: ${COLOR.Gray2};
  }
  cursor: pointer;
`;

export const CommentText = styled.span`
  font-size: ${FONT.S};
  color: ${COLOR.Black};
  word-break: break-all;

  & > a {
    color: ${COLOR.Blue2};
    cursor: pointer;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
`;

export const CommentInfoWrapper = styled.div`
  display: flex;
  height: 14px;
  margin-top: 5px;
  position: relative;
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

export const IconBox = styled.div<IconProps>`
  display: flex;
  height: fit-content;
  cursor: pointer;
  ${(props) =>
    props.isClick &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;

export const IconBoxFill = styled(IconBox)<IconProps>`
  position: absolute;
  top: 0;
  opacity: 0;
  visibility: hidden;
  color: ${COLOR.Red1};

  ${(props) =>
    props.isClick &&
    css`
      opacity: 1;
      visibility: visible;
      animation: ${likeAppear} 0.5s 1 both;
    `}
`;

export const SettingBox = styled(IconBox)`
  display: none;
  transform: translateY(-2px);
  ${ProfileWrapper}:hover & {
    display: block;
  }
`;
export const Delete = styled.div`
  position: absolute;
  background-color: ${COLOR.White};
  font-size: ${FONT.XS};
  color: ${COLOR.Red1};
  width: 40px;
  height: 20px;
  left: 15px;
  top: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;
export const SettingWrapper = styled.div`
  position: relative;
`;
