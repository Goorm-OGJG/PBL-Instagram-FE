import { styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import { InfoText } from "../CommentContent/CommentContent.style";

export const Wrapper = styled.div`
  padding: 0 16px;
  padding-top: 12px;
`;

export const ReplyWrapper = styled.div`
  margin-left: 44px;
  margin-top: 20px;
`;

export const ReplyHeader = styled.div``;
export const Line = styled.span`
  display: inline-block;
  width: 30px;
  height: 5px;
  border-top: 1px solid ${COLOR.Gray3};
  margin-right: 20px;
`;
export const ReplyText = styled(InfoText)``;
