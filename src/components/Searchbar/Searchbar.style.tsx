import { css, styled } from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

interface StyleProps {
  isSearch?: boolean;
}

export const Overlay = styled.div<StyleProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  left: 72px;
  opacity: 0;
  visibility: hidden;

  ${(props) =>
    props.isSearch &&
    css`
      left: 72px;
      opacity: 1;
      visibility: visible;
    `}
`;
export const Div = styled.div<StyleProps>`
  position: fixed;
  height: 100vh;
  width: 397px;
  top: 0;

  background-color: ${COLOR.Black};
  box-sizing: border-box;
  border-left: 1px solid ${COLOR.Gray4};
  border-right: 1px solid ${COLOR.Gray4};
  display: flex;
  flex-direction: column;
  left: 0;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;

  ${(props) =>
    props.isSearch &&
    css`
      left: 72px;
      opacity: 1;
      visibility: visible;
    `}
`;

export const Header = styled.header`
  padding: 20px 15px;
  border-bottom: 1px solid ${COLOR.Gray4};
`;

export const HeadText = styled.h4`
  font-size: ${FONT.L};
  font-weight: ${FONT.Bold};
  padding-bottom: 40px;
`;

export const SearchResultBox = styled.div`
  position: relative;
  padding-top: 10px;
  flex: 1;
`;
