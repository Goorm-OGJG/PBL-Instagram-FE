import styled from "styled-components";
import * as FONT from "../../../constants/font";
import * as COLOR from "../../../constants/color";


export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const PublicModalWrapper = styled.div`
  display: flex;
  width: 420px;
  height: 380px;
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font: inherit;
  font-size: 100%;
  justify-content: center;
  /* margin: 0 auto; */
  padding: 0;
  position: relative;
  vertical-align: baseline;
  overflow-y: auto;
  background-color: #2b2b2b;
  border-radius: 10px;
  z-index: 100;
`;

export const PublicModalTitle = styled.div`
  display: flex;
  justify-content: center;
  line-height: 25px;
  font-size: ${FONT.ML};
  color: ${COLOR.Gray1};
  margin-bottom: 20px;
`;

export const PublicModalBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 16px;
  width: 100%;
  padding: 30px 30px 0px 30px;
`;
export const PublicModalMessage = styled.div`
  display: flex;
  justify-content: center;
  word-break: break-word;
  line-height: 18px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Gray1};
  margin-bottom: 30px;
`;
export const MessageIcon = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const PublicFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
`;

export const PublicBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${COLOR.Blue2};
  padding: 10px 0;
  border-top: 1px solid ${COLOR.Gray4};
  cursor: pointer;
  &:hover {
    color: ${COLOR.Gray1};
  }
`;

export const PublicCancelBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  border-top: 2px solid ${COLOR.Gray4};
  cursor: pointer;
`;
