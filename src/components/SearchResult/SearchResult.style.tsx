import { styled } from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const SearchText = styled.span`
  display: block;
  font-weight: ${FONT.Bold};
  margin: 10px 24px;
`;

export const NoSearchText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  color: ${COLOR.Gray2};
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  transform: translate(-50%, -50%);
`;
