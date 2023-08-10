import styled from "styled-components";
import * as FONT from "../../../constants/font";
import * as COLOR from "../../../constants/color";
import { Link } from "react-router-dom";

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

export const FollowModalWrapper = styled.div`
  display: flex;
  width: 400px;
  height: 360px;
  max-height: calc(100% - 40px);
  margin: 20px;
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
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

export const FollowModalHeader = styled.header`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  width: 100%;

  line-height: 20px;
  padding: 10px 0px;
  border-bottom: 1px solid ${COLOR.Gray4};
`;
export const FollowModalTitle = styled.div`
  display: flex;
  width: auto;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 auto;
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
`;
export const FollowModalExitBtn = styled.button`
  align-items: center;
  display: flex;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: ${COLOR.Gray1};
  font-size: ${FONT.ML};
  justify-content: right;
  /* width:100%; */
  cursor: pointer;
`;

export const FollowModalBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow-y: auto;
`;

export const FollowModalBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 44px;
  margin: 8px 16px;
  width: 350px;
`;

export const FollowProfileImgBox = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin-right: 14px;
  cursor: pointer;
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const FollowProfileNicknameBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray1};
  line-height: 18px;
  width: 180px;
`;
export const Nickname = styled(Link)`
  display: inline-flex;
  margin-right: 4px;
  width: max-content;
  cursor: pointer;
  text-decoration: none;
  color: ${COLOR.Gray1};
  &:hover {
    color: ${COLOR.Gray2};
  }
`;
export const FollowBtn = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  width: 100px;
  border: none;
  border-radius: 8px;
  font-size: ${FONT.XS};
  font-weight: ${FONT.Medium};
  color: ${COLOR.Blue2};
  background-color: transparent;
  line-height: 18px;
  height: 32px;
  cursor: pointer;
  &:hover {
    color: ${COLOR.Blue1};
  }
`;

export const FollowDeleteBox = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray1};
  line-height: 18px;
  width: 100%;
  justify-content: right;
`;

export const DeleteBtn = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray1};
  background-color: #555555b3;
  line-height: 18px;
  height: 32px;
  padding: 0 16px;
  cursor: pointer;
`;
