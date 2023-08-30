import { styled } from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const AreaBox = styled.div`
  padding-right: 10px;
  position: relative;
  margin-bottom: 15px;
`;
export const TextAreaStyle = styled.textarea`
  resize: none;
  width: 100%;
  font-family: "Malgun Gothic", serif;
  margin-top: 10px;
  font-size: ${FONT.M};
  border: none;
  outline: none;
  &::placeholder {
    color: ${COLOR.Gray2};
  }
`;

export const TextLength = styled.span`
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
  position: absolute;
  bottom: -10px;
  right: 30px;
`;
