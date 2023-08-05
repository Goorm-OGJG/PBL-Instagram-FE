import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";
import { styled } from "styled-components";

export const FooterStyle = styled.footer`
  width: 320px;
  word-break: keep-all;
  margin-top: 20px;
  padding-left: 18px;
  color: ${COLOR.Gray3};
  font-size: ${FONT.XS};
`;
export const Span = styled.span`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: "·";
    margin: 0 3px;
    text-decoration: none;
  }

  &:last-child::after {
    content: "";
  }
`;

export const FooterMenu = styled.div`
  margin-bottom: 16px;
`;

export const CopyRight = styled.div``;
