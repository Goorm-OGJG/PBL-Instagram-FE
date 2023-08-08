import { styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

export const Timer = styled.span`
  position: absolute;
  top: 68%;
  right: 10px;
  color: ${COLOR.Gray2};
  font-size: ${FONT.S};
  z-index: 10;
`;
