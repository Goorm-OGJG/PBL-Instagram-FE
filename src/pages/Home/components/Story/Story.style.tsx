import { css, styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

interface StyleProps {
  readAll: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Span = styled.span`
  color: ${COLOR.Gray1};
  font-size: ${FONT.XS};
  padding-top: 5px;
`;
export const ImageWrapper = styled.div<StyleProps>`
  min-width: 63px;
  width: 63px;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${(props) =>
    !props.readAll
      ? css`
          background: linear-gradient(${COLOR.Main});
          background: -webkit-linear-gradient(${COLOR.Main});
        `
      : css`
          background-color: #1e1e1e;
        `};

  cursor: pointer;
`;
export const ProfileImg = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: ${COLOR.Gray4};
`;
