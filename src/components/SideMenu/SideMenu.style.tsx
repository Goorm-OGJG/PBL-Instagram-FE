import { styled } from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

interface StyleProps {
  type: string;
}

export const Div = styled.div<StyleProps>`
  color: ${COLOR.Gray1};
  font-size: ${FONT.S};
  position: absolute;
  bottom: ${(props) => props.type === "menu" && "35px"};
  top: ${(props) => props.type === "add" && "230px"};
  background-color: ${COLOR.Gray4};
  display: flex;
  flex-direction: column;
  z-index: 10000;
  left: 60px;
  border-radius: 10px;
  padding: 10px;
`;

export const Span = styled.span`
  width: 250px;
  padding: 16px;
  line-height: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
