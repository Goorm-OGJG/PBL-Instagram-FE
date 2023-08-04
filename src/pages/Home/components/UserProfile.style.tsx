import { styled } from "styled-components";
import { Link } from "react-router-dom";
import * as COLOR from "../../../constants/color";
import * as FONT from "../../../constants/font";
import { PropsType } from "./UserProfile";

export const Profile = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImg = styled.img<PropsType>`
  width: ${(props) => (props.type === "my" ? "56px" : "32px")};
  height: ${(props) => (props.type === "my" ? "56px" : "32px")};
  border-radius: 50%;
  cursor: pointer;
  margin: 10px;
  margin-left: ${(props) => props.type !== "my" && "18px"};
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  color: ${COLOR.Gray1};
  font-size: ${FONT.S};
`;

export const ProfileContent = styled.span<PropsType>`
  color: ${COLOR.Gray2};
  font-size: ${FONT.XS};
  line-height: ${(props) => props.type === "my" && "18px"};
`;
export const ProfileTextBox = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  justify-content: center;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const Button = styled.button`
  color: ${COLOR.Blue2};
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  height: fit-content;
  font-weight: ${FONT.Bold};
  font-size: ${FONT.XS};
`;
