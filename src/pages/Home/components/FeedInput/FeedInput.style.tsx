import { styled } from "styled-components";
import * as FONT from "../../../../constants/font";
import * as COLOR from "../../../../constants/color";

interface TextAreaProps {
  textvalue?: string;
  scrollHeight?: number;
}
export const Form = styled.form`
  padding: 5px 0;
  display: flex;
  position: relative;
`;

export const TextArea = styled.textarea<TextAreaProps>`
  width: calc(100% - 50px);
  border: none;
  resize: none;
  background-color: transparent;
  outline: none;
  padding: 0;
  color: ${COLOR.Gray1};
  font-size: ${FONT.S};
  /* font-family: "Malgun Gothic", serif; */
  &::placeholder {
    /* font-family: "Malgun Gothic", serif; */
    color: ${COLOR.Gray2};
  }
`;

export const Button = styled.button<TextAreaProps>`
  border: none;
  background-color: transparent;
  color: ${COLOR.Blue2};
  font-weight: ${FONT.Bold};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: ${(props) => (props.textvalue ? "block" : "none")};
  cursor: pointer;
`;
