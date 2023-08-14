import styled from "styled-components";
import * as FONT from "../../../constants/font";
import * as COLOR from "../../../constants/color";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const EditImgModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 180px;
  align-items: stretch;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 0;
  vertical-align: baseline;
  background-color: #2b2b2b;
  z-index: 100;
`;
export const ImgUploadMessage = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
`;
export const EditImgModalHeader = styled.header`
  display: flex;
  margin: 16px 32px;
  align-items: center;
  font-size: ${FONT.ML};
  line-height: 25px;
  color: ${COLOR.Gray1};
`;

export const ImgUpload = styled.label`
  border-top: 1px solid rgb(25,25,25)
  padding:4px 8px;
  font-size:${FONT.S};
  min-height: 48px;
  margin:0 auto;
  color: ${COLOR.Blue2};
  cursor:pointer;
`;

export const EditModalCancel = styled.div`
  border-top: 1px solid rgb(25,25,25)
  padding:4px 8px;
  font-size:${FONT.S};
  min-height: 48px;
  margin:0 auto;
  color: ${COLOR.Red1};
  cursor:pointer;
`;

export const InputImg = styled.input`
  display:none;
`;
