import styled, { css } from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

interface PropsType {
  fontSize?: string;
  fontWeight?: string;
  backGround?: string;
  fontColor?: string;
  isActive?: boolean;
}
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100%-40px);
  max-width: 935px;
  margin: 0 auto 30px;
  min-height: 100vh;
  padding: 30px 20px 0;
  overflow-x: hidden;
`;

export const ProfileNavbar = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${COLOR.Gray4};
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
  font-weight: ${FONT.Medium};
`;

export const ProfileItem = styled.button<PropsType>`
  display: flex !important;
  align-items: center;
  margin: 0px 70px;
  height: 52px;
  text-decoration: none;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: ${FONT.XS};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray3};
  ${(PropsType) =>
    PropsType.isActive &&
    css`
      border-top: 1px solid ${COLOR.Gray1};
      color: ${COLOR.Gray1};
    `}
`;
export const ProfileText = styled.div`
  margin-left: 10px;
`;
export const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 5px;
  column-gap: 5px;
`;

export const FeedBox = styled.div`
  color: white;
  width: 100%;
  height: 300px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;

export const FeedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    filter: brightness(0.5);
  }
`;

export const FeedHoverMutiple = styled.div`
  position: absolute;
  display: flex;
  width:300px;
  justify-content:right;
  font-size: ${FONT.ML};
  font-weight: ${FONT.Bold};
  z-index: 10;
`;

export const FeedHover = styled.div`
  position: absolute;
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: ${FONT.ML};
  font-weight: ${FONT.Bold};
  z-index: 100;
`;

export const FeedHoverMultiItem = styled.div`
  margin: 5px 10px;
  align-self: center;
  justify-content: center;
  font-size: ${FONT.ML};
  font-weight: ${FONT.Bold};
  color: rgba(255,255,255,0.8);
`;

export const FeedHoverItem = styled.div`
  margin: 0px 15px;
  align-self: center;
  justify-content: center;
  font-size: ${FONT.ML};
  font-weight: ${FONT.Bold};
`;
export const Observer = styled.div`
  opacity:0;
`;

// 시크릿 모드
export const SecretContainer = styled.div`
  display:flex;
  flex-direction:column;
  height: 150px;
  width:100%;
  padding: 40px;
  border:1px solid ${COLOR.Gray4};
`;
export const SecretBox = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  justify-content: center;
  text-align:center;
  align-items:center;
  font-size:${FONT.S};
  font-weight:${FONT.Medium};
  color:${COLOR.Gray1};
  margin:0 auto;

`;
export const SecretScript = styled.div`

  display:flex;
  width:100%;
  justify-content: center;
  line-height:24px;
  margin: 10px 0px;
`;