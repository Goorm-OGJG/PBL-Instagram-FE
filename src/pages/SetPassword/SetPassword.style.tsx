import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";

export const Container = styled.div`
  background-color: ${COLOR.White};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NewPasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLOR.BorderColor};
  border-radius: 1px;
  width: 100%;
  max-width: 360px;
  padding: 40px 35px 30px;
`;

export const NewPasswordInfoWrapper = styled.div`
  text-align: center;
`;

export const NewPasswordInfoTitle = styled.p`
  font-size: ${FONT.S};
  line-height: 40px;
  color: ${COLOR.Black};
  font-weight: ${FONT.Bold};
`;

export const NewPasswordInfoContent = styled.p`
  font-size: ${FONT.XS};
  line-height: 18px;
  color: ${COLOR.Gray2};
`;

export const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: inherit;
  padding-top: 30px;
  position: relative;
`;

export const Alert = styled.p`
  position: absolute;
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
`;

export const AlertNewPassword = styled(Alert)`
  top: 10%;
`;
export const AlertEqaulPassword = styled(Alert)`
  top: 55%;
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
  margin-top: 25px;
  cursor: pointer;

  &:disabled {
    background-color: ${COLOR.ButtonDisabled};
    cursor: auto;
  }
`;
