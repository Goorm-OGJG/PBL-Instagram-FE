import { styled } from "styled-components";
import * as COLOR from "../../constants/color";
import { Link } from "react-router-dom";

export const Main = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`;

// 아이콘
export const IconBox = styled(Link)`
  display: flex;
  position: absolute;
  right: 10px;
  color: ${COLOR.White};
  top: 10px;
  cursor: pointer;
`;
