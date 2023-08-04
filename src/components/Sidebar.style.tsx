import { css, styled } from "styled-components";
import * as COLOR from "../constants/color";
import { Link } from "react-router-dom";

interface BoxProps {
  type?: string;
  isClick?: boolean;
}

export const Nav = styled.nav`
  color: ${COLOR.Gray1};
  background-color: #000;
  position: absolute;
  height: 100vh;
  padding: 8px 12px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${COLOR.Gray4};
`;

export const LogoBox = styled(Link)`
  display: flex;
  color: ${COLOR.Gray1};
  margin-bottom: 35px;
  margin-top: 12px;
`;
export const IconBox = styled.div<BoxProps>`
  padding: 12px;
  margin: 4px 0;
  border-radius: 10px;
  transition: 0.3s;

  ${(props) =>
    props.type !== "search" &&
    props.isClick &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
  ${(props) =>
    props.type === "fill" &&
    css`
      position: absolute;
      top: -4px;
      left: 0;
      opacity: 0;
      visibility: hidden;
    `}

  ${(props) =>
    props.type === "fill" &&
    props.isClick &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  &:hover {
    transform: scale(1.1);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SideLink = styled(Link)`
  color: ${COLOR.Gray1};
  position: relative;
`;
export const SideBox = styled.div`
  cursor: pointer;
  position: relative;
`;

export const Wrapper = styled.div``;

export const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
