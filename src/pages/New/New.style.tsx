import styled from "styled-components";
// import * as FONT from "../../constants/font";

interface Props {
  fontSize?: string;
  fontWeight?: string;
}

export const StyledDiv = styled.div`
  color: red;
`;

export const ConstantTestDiv = styled.div<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "10px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "200")};
`;

// export const FontTestDiv = styled.div`
//   font-size: ${FONT.XL};
//   font-weight: ${FONT.Bold};
// `;
