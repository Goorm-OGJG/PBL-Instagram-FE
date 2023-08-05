import { styled } from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
export const InputBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 5px;
`;

export const PlaceHolder = styled.span<{ isFocused: boolean }>`
  position: absolute;
  top: 50%;
  transform: ${({ isFocused }) => (isFocused ? "translateY(-170%)" : "translateY(-70%)")};
  left: 5px;
  font-size: ${({ isFocused }) => (isFocused ? FONT.XS : FONT.S)};
  color: ${COLOR.Gray3};
  pointer-events: none;
  transition: 0.3s;
`;

export const InputBox = styled.input<{ isFocused: boolean }>`
  border: 1px solid ${COLOR.BorderColor};
  height: 38px;
  margin-bottom: 10px;
  outline: none;
  width: inherit;
  padding-left: 5px;
  padding-top: ${({ isFocused }) => (isFocused ? "12px" : "0px")};
  background-color: ${COLOR.BackgroundColor};
  &::-ms-reveal,
  &::-webkit-reveal {
    display: none;
  }
  &:focus {
    border: 1px solid ${COLOR.Gray2};
  }
`;

export const VisiablePassword = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 50%;
  right: 0;
  transform: translateY(-70%);
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  white-space: nowrap;
  &:hover {
    color: ${COLOR.Gray3};
  }
`;
