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
  position: relative;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid ${COLOR.BorderColor};
  padding: 15px 10px 10px 10px;
`;

export const FindPasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLOR.BorderColor};
  border-radius: 1px;
  width: 100%;
  max-width: 370px;
  padding: 40px 35px 0 30px;
`;

export const LockWrapper = styled.div`
  border: 4px solid ${COLOR.Black};
  border-radius: 50%;
  padding: 15px;
`;

export const FindPasswordInfoWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const FindPasswordInfoTitle = styled.p`
  font-size: ${FONT.M};
  font-weight: ${FONT.Bold};
  line-height: 30px;
`;
export const FindPasswordInfoContent = styled.p`
  font-size: ${FONT.S};
  color: ${COLOR.Gray2};
  line-height: 18px;
`;

export const InputBoxWrapper = styled.div`
  width: inherit;
  padding-top: 10px;
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  color: ${COLOR.White};
  width: 100%;
  height: 38px;
  background-color: ${COLOR.Blue2};
  border: none;
  border-radius: 10px;
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  margin-top: 10px;
  cursor: pointer;

  &:disabled {
    background-color: ${COLOR.ButtonDisabled};
    cursor: auto;
  }
`;

export const ValidateSubmitButton = styled(SubmitButton)`
  background-color: ${COLOR.Gray3};

  &:disabled {
    background-color: ${COLOR.Gray2};
    cursor: auto;
  }
`;

export const Divider = styled.span`
  margin: 20px 0;
  font-size: ${FONT.S};
  position: relative;
  text-align: center;
  display: inline-block;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    width: 40%;
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
    width: 40%;
    height: 1px;
    height: 20px;
    top: 50%;
    right: 0;
    transform: translateY(-1px);
    border-top: 1px solid ${COLOR.BorderColor};
  }
`;

export const HelpPasswordWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 70px;
`;

export const SignUpLinkText = styled(Link)`
  text-decoration: none;
  color: ${COLOR.Black};
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
`;

export const HelpSignUpWrapper = styled.div`
  margin-top: 10px;
  width: 350px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  border: 1px solid ${COLOR.BorderColor};
`;

export const LoginLinkButton = styled(Link)`
  border: 1px solid ${COLOR.BorderColor};
  width: 370px;
  text-align: center;
  padding: 13px;
  transform: translateX(2px);
  background-color: ${COLOR.Gray1};
  color: ${COLOR.Black};
  text-decoration: none;
  font-size: ${FONT.S};

  &:hover {
    color: ${COLOR.Gray2};
  }
`;
