import { styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";
import { Link } from "react-router-dom";

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
  height: fit-content;
  height: 95vh;
  max-height: 800px;
`;

export const ImgBox = styled.div`
  display: flex;
  max-width: 800px;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 95vh;
  object-fit: fill;
`;

export const RightWrapper = styled.div`
  max-width: 500px;
  width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const ProfileImgBox = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 4px;
  background: linear-gradient(${COLOR.Main});
  border-radius: 50%;
  margin-right: 10px;
`;

export const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid ${COLOR.White};
`;

export const FeedHeader = styled.header`
  padding: 14px 8px 14px 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLOR.BorderColor};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled(Link)`
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

export const IconFillBox = styled(IconBox)`
  position: absolute;
  left: 0;
  opacity: 0;
  visibility: hidden;

  &:hover {
    color: initial;
  }
`;

export const Comments = styled.div`
  flex: 1;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
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

export const CommentWrapper = styled.form`
  padding: 8px 16px;
  display: flex;
`;
export const CommentInput = styled.input`
  outline: none;
  border: none;
  padding: 10px 0;
  flex: 1;
  font-size: ${FONT.S};
  &::placeholder {
    font-family: "Malgun Gothic", serif;
    color: ${COLOR.Gray3};
  }
`;

export const Button = styled.button`
  border: none;
  color: ${COLOR.Blue2};
  font-weight: ${FONT.Bold};
  font-size: ${FONT.S};
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  &:hover {
    color: ${COLOR.Black};
  }
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
