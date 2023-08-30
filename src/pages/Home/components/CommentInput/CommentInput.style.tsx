import { styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

export const CommentWrapper = styled.form`
  padding: 8px 16px;
  display: flex;
`;
export const CommentInput = styled.textarea`
  outline: none;
  border: none;
  padding: 10px 0;
  resize: none;
  flex: 1;
  font-size: ${FONT.S};
  &::placeholder {
    color: ${COLOR.Gray3};
  }
`;

export const Button = styled.button`
  border: none;
  color: ${COLOR.Blue2};
  font-weight: ${FONT.Bold};
  font-size: ${FONT.S};
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  &:hover {
    color: ${COLOR.Black};
  }
`;
