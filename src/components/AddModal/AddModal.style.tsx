import { css, styled } from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

interface StyleProps {
  step?: number;
  type?: string;
}
interface PosProps {
  pos: number;
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const Wrapper = styled.div<StyleProps>`
  width: 70%;
  height: ${(props) => props.step === 1 && "70%"}; // 단계에 따라 변경 필요할 듯
  position: absolute;
  background-color: ${COLOR.White};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${(props) =>
    props.type !== "feed" &&
    css`
      width: fit-content;
    `}/* transition: 0.5s; */
`;

export const ModalHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLOR.BorderColor};
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
  padding: 0 15px;
  position: relative;
`;

export const ModalTitle = styled.h3`
  font-weight: ${FONT.Bold};
  text-align: center;
  line-height: 20px;
  padding: 10px 0;
`;

export const HeadText = styled.span`
  text-align: center;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  line-height: 20px;
  cursor: pointer;
  position: absolute;
  left: 15px;
`;

export const HeadButton = styled(HeadText)`
  color: ${COLOR.Blue2};
  left: auto;
  right: 15px;
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

export const Section = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstStepWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 15px;
`;

export const Span = styled.span`
  font-size: ${FONT.L};
  text-align: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray1};
  background-color: ${COLOR.Blue2};
  border: none;
  line-height: 18px;
  padding: 7px 16px;
  border-radius: 10px;
  cursor: pointer;
  width: fit-content;
  &:hover {
    background-color: #0078c9;
  }
`;

// 2단계
export const SecondStepWrapper = styled(FirstStepWrapper)`
  display: flex;
  flex-direction: row;
  padding: 0;
  align-items: start;
`;

// 2단계 이미지 동영상 들어가는 부분
export const ImgWrapper = styled.div<StyleProps>`
  /* width: 80%; */
  position: relative;
  ${(props) =>
    props.type === "feed"
      ? css`
          width: 500px;
          height: 500px;
        `
      : css`
          width: 400px;
          height: 800px;
        `}
`;

export const Images = styled.div`
  width: 100%;
  display: flex;
  scroll-behavior: smooth;
  overflow: hidden;
`;

export const ArrowBox = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 50%;
  left: 10px;
  cursor: pointer;
`;

export const ArrowRightBox = styled(ArrowBox)`
  right: 10px;
  left: auto;
`;
// 2단계 글쓰는 부분들
export const SecondRightWrapper = styled.div`
  width: 340px;
  display: flex;
  flex: 1px;
  flex-direction: column;
  height: 100%;
`;

export const Img = styled.img<StyleProps>`
  max-width: 100%;
  object-fit: fill;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  ${(props) =>
    props.type === "feed"
      ? css`
          width: 500px;
          height: 500px;
        `
      : css`
          width: 400px;
          height: 800px;
        `}
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  padding-right: 10px;
`;

export const UserProfile = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-size: ${FONT.S};
`;
export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PosBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  gap: 5px;
`;

export const PosDot = styled.span<PosProps>`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);

  &:nth-child(${(props) => props.pos + 1}) {
    background-color: ${COLOR.White};
  }
`;
