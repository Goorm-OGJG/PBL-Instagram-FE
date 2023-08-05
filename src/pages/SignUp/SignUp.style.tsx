import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${COLOR.White};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLOR.BorderColor};
  border-radius: 1px;
  width: 100%;
  max-width: 350px;
  padding: 40px 35px 30px;
`;

export const SignUpIntro = styled.p`
  font-size: ${FONT.XM};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray3};
  margin-top: 20px;
  text-align: center;
`;

export const InputBoxWrapper = styled.div`
  width: inherit;
  padding-top: 30px;
  padding-bottom: 10px;
`;

export const SignUpButton = styled.button<{ disabled: boolean }>`
  color: ${COLOR.White};
  width: 100%;
  height: 38px;
  background-color: ${COLOR.Blue2};
  border: none;
  border-radius: 10px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  margin-top: 25px;
  cursor: pointer;

  &:disabled {
    background-color: ${COLOR.ButtonDisabled};
    cursor: auto;
  }
`;

export const Divider = styled.span`
  margin-top: 30px;
  font-size: ${FONT.S};
  position: relative;
  text-align: center;
  display: inline-block;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    height: 20px;
    top: 50%;
    left: 0;
    transform: translateY(-1px);
    border-top: 1px solid ${COLOR.BorderColor};
  }

  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    height: 20px;
    top: 50%;
    right: 0;
    transform: translateY(-1px);
    border-top: 1px solid ${COLOR.BorderColor};
  }
`;

export const SignUpAlert = styled.p`
  font-size: ${FONT.XS};
  text-align: center;
  color: ${COLOR.Gray3};
`;

export const HelpSignUpWrapper = styled.div`
  margin-top: 10px;
  width: 350px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  border: 1px solid ${COLOR.BorderColor};
`;

export const HasAccountText = styled.span`
  margin-right: 5px;
  font-size: ${FONT.S};
`;

export const SignUpLinkText = styled(Link)`
  text-decoration: none;
  color: ${COLOR.Blue2};
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
`;
