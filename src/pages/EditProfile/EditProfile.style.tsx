import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

interface PropsType {
  fontSize?: string;
  fontWeight?: string;
  backGround?: string;
  fontColor?: string;
}

export const EditProfileWrapper = styled.div`
  display: flex;
  flex: 1 1 400px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: stretch;
  margin: 60px auto 0;
  max-width: 935px;
  overflow: hidden;
  width: 100%;
  border: 1px solid ${COLOR.Gray4};
  margin-bottom: 60px;
`;

export const EditHeader = styled.header<PropsType>`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 32px;
  padding-left: 45px;
  font-size: ${FONT.L};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray1};
`;

export const EditUserInfo = styled.section<PropsType>`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 32px 0 0;
  position: relative;
  vertical-align: baseline;
  font-size: ${FONT.L};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray1};
`;

export const EditUserImgBox = styled.div`
  display: flex;
  height: 38px;
  width: 38px;
  box-sizing: border-box;
  margin: 2px 33px 0px 254px;
`;

export const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
export const EditUserTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  flex: 0 1 auto;
  box-sizing: border-box;
  vertical-align: baseline;
`;
export const UserNickname = styled.div<PropsType>`
  margin: 4px 0;
  line-height: 20px;
  font-size: ${FONT.M};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray1};
  width: 8px;
  width: max-content;
`;
export const UserImgEditBtn = styled.div<PropsType>`
  border: 0;
  background-color: transparent;
  box-sizing: border-box;
  text-align: left;
  font-size: ${FONT.S};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Blue2};
  cursor: pointer;
  &:hover {
    color: ${COLOR.Gray1};
  }
`;
// EditEtc
export const EditEtcForm = styled.form<PropsType>`
  align-items: stretch;
  border: 0;
  display: flex;
  flex-direction: column;
  font: inherit;
  font-size: 100%;
  margin: 0;
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 0;
  vertical-align: baseline;
`;
export const EditIntroBox = styled.section<PropsType>`
  display: flex;
  flex-direction: row;
  margin: 30px 32px 0 124px;
`;
export const EctTitle = styled.div<PropsType>`
  box-sizing: border-box;
  flex: 0 0 194px;
  line-height: 18px;
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray1};
  text-align: right;
  margin-top: 6px;
  padding-right: 32px;
`;

export const InputBox = styled.div<PropsType>`
  min-width: 355px;
  width: 100%;
`;

export const IntroInput = styled.textarea<PropsType>`
  flex: 0 1 405px;
  min-width: 355px;
  background: transparent;
  border: 1px solid ${COLOR.Gray4};
  border-radius: 3px;
  box-sizing: border-box;
  color: ${COLOR.Gray1};
  height: 80px;
  padding: 6px 10px;
  resize: vertical;
  &::-webkit-scrollbar {
    background: ${COLOR.Gray4};
    height: 8px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${COLOR.Gray3};
    border-radius: 5px;
    width: 4px;
    padding: 2px;
  }
`;

export const InputCounter = styled.div<PropsType>`
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
  weight: ${FONT.Medium};
  line-height: 16px;
  margin-top: 10px;
`;
export const EditRecommendBox = styled.section<PropsType>`
  display: flex;
  flex-direction: row;
  margin: 30px 32px 0 124px;
`;
export const RecommendCheckBox = styled.input<PropsType>`
  accent-color: ${COLOR.Gray4};
`;
export const RecommendExplain = styled.div<PropsType>`
  font-size: ${FONT.S};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray1};
  flex: 0 1 310px;
  line-height: 18px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray1};
  margin-left: 10px;
`;

// Private
export const PrivateHeader = styled.header<PropsType>`
  width: 85%;
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  padding-top: 32px;
  padding-left: 45px;
  font-size: ${FONT.L};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray1};
  border-top: 1px solid ${COLOR.Gray4};
`;

export const PrivateTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const PrivateTitle = styled.div<PropsType>`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  line-height: 18px;
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray1};
  text-align: right;
  margin: 10px 0px 30px 20px;
  padding-right: 32px;
`;
export const ToggleBox = styled.div``;
export const EditPrivateBox = styled.section<PropsType>`
  display: flex;
  flex-direction: column;
  margin: 30px 124px 0 124px;
`;
export const PrivateRable = styled.label<PropsType>`
  accent-color: ${COLOR.Gray4};
`;
export const PrivateCheckBox = styled.input<PropsType>`
  accent-color: ${COLOR.Gray4};
`;

export const PrivateExplain = styled.div<PropsType>`
  font-size: ${FONT.S};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray1};
  flex: 0 1 1px;
  line-height: 18px;
  font-size: ${FONT.XS};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray2};
  margin-left: 10px;
  width: 100%;
`;
export const EditBtnBox = styled.div`
  display: flex;
  margin-top: 40px;
  width: 95%;
  justify-content: right;
`;
export const EditProfileBtn = styled.button<PropsType>`
  display: flex;
  padding: 0 16px;
  align-items: center;
  height: 32px;
  width: auto;
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: ${FONT.S};
  background-color: ${COLOR.Blue2};
  color: ${COLOR.Gray1};
  cursor: pointer;

  &:hover {
    background-color: #3776ff;
  }
`;

// font-size : ${(PropsType) => PropsType.fontSize ? PropsType.fontSize: FONT.S};
// font-weight: ${(PropsType) => (PropsType.fontWeight ? PropsType.fontWeight : FONT.Medium)};
// color: ${(PropsType)=> PropsType.fontColor ? PropsType.fontColor : COLOR.Gray1 };
// background: ${(PropsType)=> PropsType.backGround ?PropsType.backGround : COLOR.Gray4 };
