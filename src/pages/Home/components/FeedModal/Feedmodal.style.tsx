import { css, keyframes, styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

interface StyleProps {
  pos: number;
}

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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  width: fit-content;
`;

// 이미지 관련
export const ImgBox = styled.div`
  display: flex;
  position: relative;
  scroll-behavior: smooth;
  width: 500px;
  background-color: ${COLOR.White};
`;

export const Images = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 500px;
`;
export const Img = styled.img`
  min-width: 500px;
  height: 500px;
  width: 500px;
  object-fit: contain;
`;

export const ArrowBox = styled.div`
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: ${FONT.L};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const LeftArrow = styled(ArrowBox)`
  left: 20px;
`;

export const RightArrow = styled(ArrowBox)`
  right: 20px;
`;

export const PosBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  gap: 5px;
`;

export const PosDot = styled.span<StyleProps>`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);

  &:nth-child(${(props) => props.pos + 1}) {
    background-color: ${COLOR.White};
  }
`;

// 우측
export const RightWrapper = styled.div`
  max-width: 500px;
  min-width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const ProfileImgBox = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 4px;
  /* background: linear-gradient(${COLOR.Main}); */
  background-color: ${COLOR.Gray1};
  border-radius: 50%;
  margin-right: 10px;
`;

export const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid ${COLOR.White};
  background-color: ${COLOR.Gray4};
`;

export const FeedHeader = styled.header`
  padding: 14px 8px 14px 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLOR.BorderColor};
  position: relative;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UserName = styled.span`
  text-decoration: none;
  color: ${COLOR.Black};
  font-size: ${FONT.S};
  &:hover {
    color: ${COLOR.Gray2};
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;

  border-top: 1px solid ${COLOR.BorderColor};
`;

export const IconBox = styled.div`
  display: flex;
  padding: 6px;
  cursor: pointer;
  height: fit-content;

  &:hover {
    color: ${COLOR.Gray2};
  }
`;

export const IconFillBox = styled(IconBox)<IconProps>`
  position: absolute;
  left: 0;
  opacity: 0;
  visibility: hidden;

  &:hover {
    color: initial;
  }

  ${(props) =>
    props.isClick &&
    css`
      opacity: 1;
      visibility: visible;
      animation: ${likeAppear} 0.5s 1 both;
    `}
`;

export const Comments = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

export const IconWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const LikeUploadWrapper = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  border-bottom: 1px solid ${COLOR.BorderColor};
  gap: 3px;
`;

export const LikeText = styled.span`
  cursor: pointer;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
`;

export const UploadText = styled.span`
  cursor: pointer;
  font-size: ${FONT.XS};
`;

export const CloseBox = styled.div`
  position: fixed;
  display: flex;
  height: fit-content;
  color: ${COLOR.White};
  right: 0;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const AddCircleBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px;
`;

export const AddCircle = styled.div`
  cursor: pointer;
`;

export const Delete = styled.div`
  position: absolute;
  background-color: ${COLOR.White};
  font-size: ${FONT.XS};
  color: ${COLOR.Red1};
  /* width: 40px; */
  padding: 10px;
  height: 20px;
  right: 20px;
  top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;
