import { styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

export const Div = styled.div`
  color: ${COLOR.Gray1};
  font-size: ${FONT.S};
  position: absolute;
  background-color: ${COLOR.Gray4};
  display: flex;
  flex-direction: column;
  z-index: 10000;
  border-radius: 10px;
  bottom: -20px;
  right: 10px;
`;

export const Span = styled.span`
  width: 100px;
  padding: 8px;
  line-height: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
