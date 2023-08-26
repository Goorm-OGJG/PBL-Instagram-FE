import styled from "styled-components";
import * as FONT from "../../../constants/font";
import * as COLOR from "../../../constants/color";

interface Props {
  fontSize?: string;
  fontWeight?: string;
  backGround?: string;
  fontColor?: string;
  bluecolor?: string;
}
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100%-40px);
  max-width: 935px;
  margin: 0 auto 30px;
  padding: 30px 20px 0;
  color: white;
  overflow-x: hidden;
`;

export const ProfileHeader = styled.header`
  display: flex;
  margin-bottom: 44px;
  align-items: stretch;
  flex-direction: row;
  position: relative;
`;
export const UserImgBox = styled.section`
  display: flex;
  justify-content: center;
  min-width: 150px;
  max-width: 300px;
  flex-basis: 0;
  margin-right: 30px;
  flex-direction: column;
  position: relative;
  color: white;
  flex-grow: 1;
  box-sizing: border-box;
`;
export const UserImgInnerBox = styled.div`
  display: flex;
  margin: 0px auto;
  border-radius: 50%;
`;
export const UserButton = styled.button`
  width: 150px;
  height: 150px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: inherit;
  cursor: pointer;
`;
export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${COLOR.Gray4};
`;

export const ProfileInfoBox = styled.section`
  display: flex;
  justify-content: center;

  margin-right: 30px;
  flex-direction: column;
  position: relative;
  color: white;
`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  font-size: 100%;
  margin-bottom: 20px;
`;
export const UserNickName = styled.a`
  display: inline;
  cursor: pointer;
`;

export const NickName = styled.h2`
  color: white;
  min-width: 100%;
  margin-right: 20px;
  font-size: ${FONT.ML};
`;

export const EditProfileBtn = styled.button<Props>`
  display: flex;
  justify-content: center;
  padding: 15px;
  height: 32px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  outline: none;
  align-items: center;
  cursor: pointer;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray1};
  background: ${(props) => (props.bluecolor === "true" ? COLOR.Blue2 : COLOR.Gray4)};

  &:hover {
    background: ${(props) => (props.bluecolor === "true" ? "#1877F2" : "#1c1e21")};
  }
`;
export const InfoFollowBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  font-size: ${FONT.M};
`;
export const UserPost = styled.div`
  margin-right: 40px;
`;
export const UserFollowing = styled.div`
  margin-right: 40px;
  cursor: pointer;
`;
export const UserFollower = styled.div`
  margin-right: 40px;
  cursor: pointer;
`;
export const UserIntro = styled.div`
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
`;
