import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

interface Props {
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
`;

export const EditHeader = styled.header<Props>`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 32px;
  padding-left: 45px;
  font-size: ${FONT.L};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray1};
`;

export const EditUserInfo = styled.section<Props>`
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
export const UserNickname = styled.div<Props>`
  margin: 4px 0;
  line-height: 20px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray1};
  width: 8px;
`;
export const UserImgEditBtn = styled.div<Props>`
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
export const EditEtcForm = styled.form<Props>`
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
export const EditIntroBox = styled.section<Props>`
  display: flex;
  flex-direction: row;
  margin: 30px 32px 0 124px;
`;
export const EctTitle = styled.div<Props>`
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

export const InputBox = styled.div<Props>`
  min-width:355px;
  width: 100%;
  
`;

export const IntroInput = styled.textarea<Props>`
  flex: 0 1 405px;
  min-width:355px;
  background: transparent;
  border: 1px solid ${COLOR.Gray4};
  border-radius: 3px;
  box-sizing: border-box;
  color: ${COLOR.Gray1};
  height: 80px;
  padding: 6px 10px;
  resize: vertical;
  &::-webkit-scrollbar {
    background:${COLOR.Gray4};
    height: 8px;
    width: 10px;
  };
  &::-webkit-scrollbar-thumb {
    background: ${COLOR.Gray3};
    border-radius: 5px;
    width: 4px;
    padding:2px;
  }
`;

export const InputCounter = styled.div<Props>`
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
  weight: ${FONT.Medium};
  line-height: 16px;
  margin-top:10px;

`;
export const EditRecommendBox = styled.section<Props>`
  display: flex;
  flex-direction: row;
  margin: 30px 32px 0 124px;
`;
export const RecommendCheckBox = styled.input<Props>`
  accent-color: ${COLOR.Gray4};

`;
export const RecommendExplain = styled.div<Props>`
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
export const PrivateHeader = styled.header<Props>`
  width: 80%;
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
  display:flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const PrivateTitle = styled.div<Props>`
  display:flex;
  justify-content: space-between;
  box-sizing: border-box;
  line-height: 18px;
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray1};
  text-align: right;
  margin: 10px 0px 30px 10px;
  padding-right: 32px;

`;
export const EditPrivateBox = styled.section<Props>`
  display: flex;
  flex-direction: column;
  margin: 30px 32px 0 124px;
`;
export const PrivateRable = styled.label<Props>`
  accent-color: ${COLOR.Gray4};

`;
export const PrivateCheckBox = styled.input<Props>`
  accent-color: ${COLOR.Gray4};

`;

export const PrivateExplain = styled.div<Props>`
  font-size: ${FONT.S};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray1};
  flex: 0 1 310px;
  line-height: 18px;
  font-size: ${FONT.XS};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray2};
  margin-left: 10px;

`;



// font-size : ${(props) => props.fontSize ? props.fontSize: FONT.S};
// font-weight: ${(props) => (props.fontWeight ? props.fontWeight : FONT.Medium)};
// color: ${(props)=> props.fontColor ? props.fontColor : COLOR.Gray1 };
// background: ${(props)=> props.backGround ?props.backGround : COLOR.Gray4 };
