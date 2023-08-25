import { Link } from "react-router-dom";
import { styled } from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const UserBox = styled.div`
  padding: 8px 24px;
  display: flex;
  text-decoration: none;
  color: ${COLOR.Gray1};
  justify-content: space-between;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const UserImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const User = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${COLOR.Gray1};
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Follow = styled(TextBox)`
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Blue2};
  transition: 0.3s;
  &:hover {
    color: ${COLOR.Blue1};
  }
`;

export const FollowCancel = styled(Follow)`
  color: ${COLOR.Gray2};
`;

export const UserName = styled.span`
  font-size: ${FONT.S};
  padding-bottom: 4px;
`;

export const UserDescBox = styled.div`
  display: flex;
`;
export const UserDesc = styled.span`
  padding-top: 4px;
  font-size: ${FONT.S};
  color: ${COLOR.Gray2};
  position: relative;
  display: flex;
  width: fit-content;
`;

export const MiddleDot = styled.span`
  font-size: ${FONT.L};
  color: ${COLOR.Gray2};
  display: flex;
  height: 14px;
  transform: translate(0, -4px);
  padding: 0 5px;
`;

export const Tag = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid ${COLOR.Gray4};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${FONT.L};
`;
