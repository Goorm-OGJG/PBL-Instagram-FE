import { keyframes, styled } from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const spin = keyframes`
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(360deg)
  }
`;

export const SearchBox = styled.div`
  background-color: ${COLOR.Gray4};
  border-radius: 5px;
  padding: 3px 16px;
  padding-right: 32px;
  height: 40px;
  display: flex;
  position: relative;
`;
export const SearchInput = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  color: ${COLOR.Gray1};
  font-family: "Malgun Gothic", serif;
  font-size: ${FONT.M};
  outline: none;
  &::placeholder {
    font-family: "Malgun Gothic", serif;
    color: ${COLOR.Gray2};
  }
`;

export const IconBox = styled.div`
  display: flex;
  height: fit-content;
  background-color: ${COLOR.Gray2};
  padding: 2px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const SpinnerWrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Spinner = styled.div`
  margin: 0 auto;
  width: 12px;
  height: 12px;
  border: 2px solid ${COLOR.Gray3};
  border-top: 2px solid ${COLOR.Gray2};
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;
`;
