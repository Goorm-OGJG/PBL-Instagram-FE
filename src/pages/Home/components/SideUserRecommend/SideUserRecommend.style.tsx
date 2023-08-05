import { Link } from "react-router-dom";
import { styled } from "styled-components";
import * as COLOR from "../../../../constants/color";
import * as FONT from "../../../../constants/font";

export const Wrapper = styled.div`
  padding-top: 40px;
`;

export const UserProfileBox = styled.div``;
export const UserProfiles = styled.div`
  padding: 8px 0;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 16px;
  margin-top: 8px;
`;
export const Span = styled.span`
  font-size: ${FONT.S};
  color: ${COLOR.Gray2};
  font-weight: ${FONT.Bold};
`;

export const ViewAll = styled(Link)`
  text-decoration: none;
  color: ${COLOR.Gray1};
  font-size: ${FONT.XS};
  font-weight: ${FONT.Bold};
`;
