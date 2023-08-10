import styled, { css } from "styled-components";
import * as COLOR from "../../../constants/color";

interface Props {
  fontSize?: string;
  fontWeight?: string;
  backGround?: string;
  fontColor?: string;
  isOn: boolean;
}

export const ToggleWrapper = styled.div<Props>`
  display: flex;
  width: 60px;
  height: 34px;
  border-radius: 999em;
  background-color: ${(props) => (props.isOn ? COLOR.Blue2 : COLOR.Gray1)};
  cursor: pointer;
  text-align: center;
  align-items: center;
`;

export const ToggleCircle = styled.div<Props>`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 999em;

  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.isOn ? COLOR.Gray1 : COLOR.Gray3)};
  box-shadow: 2px 2px 6px 12px rgba(0, 0, 0, 0.2);
  transition: background-color 0.5s ease;
  ${(props) =>
    props.isOn &&
    css`
      transform: translateX(30px);
    `}
`;
