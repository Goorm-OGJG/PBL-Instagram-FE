import { styled } from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

export const ControlBoxStyle = styled.div`
  display: flex;
  gap: 5px;
  height: fit-content;
  position: relative;
`;

export const Div = styled.div`
  position: absolute;
  bottom: -20px;
  right: 10px;
  font-size: ${FONT.XS};
  background-color: ${COLOR.Gray4};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
