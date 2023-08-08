import styled, {css} from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

interface Props {
  fontSize?: string;
  fontWeight?: string;
  backGround?: string;
  fontColor ?: string;
}
export const ProfileWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width : calc(100%-40px);
    max-width:935px;
    margin: 0 auto 30px;
    min-height:100vh;
    padding: 30px 20px 0;
    overflow-x:hidden;
`;

export const ProfileNavbar = styled.div<Props>`
  display:flex;
  justify-content:center;
  border-top: 1px solid ${COLOR.Gray4};
  font-size: ${FONT.XS};
  color: ${COLOR.Gray2};
  font-weight: ${FONT.Medium};
`;

export const ProfileItem = styled.button<Props>`
  display :flex!important;
  align-items:center;
  margin: 0px 70px;
  height:52px;
  text-decoration:none;
  background: none;
  outline:none;
  border:none;
  cursor: pointer;
  font-size: ${FONT.XS};
  font-weight: ${FONT.Bold};
  color: ${COLOR.Gray3};
  ${(props) => props.isActive && css`
    border-top: 1px solid ${COLOR.Gray1};
    color: ${COLOR.Gray1};
  `}
`;
export const ProfileText = styled.div`
  margin-left: 10px;
`;
export const FeedContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap:5px;
  column-gap:5px;

`;

export const FeedBox = styled.div`
  color:white;
  width: 100%;
  height:300px;
  cursor: pointer;
  display:flex;
  flex-direction:row;
  align-self:center;
  justify-content:center; 
  
`;

  

export const FeedImg =styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  &:hover{
    filter:brightness(0.5);
  }; 
`;
export const FeedHover =styled.div<Props>`
  position: absolute;
  display:flex;
  align-self:center;
  justify-content:center;
  font-size: ${ FONT.ML };
  font-weight: ${FONT.Bold};
  z-index:100;
`;

export const FeedHoverItem = styled.div<Props>`
  margin: 0px 15px;
  align-self:center;
  justify-content:center;
  font-size: ${FONT.ML};
  font-weight: ${FONT.Bold};
`;



// export const ConstantTestDiv = styled.div<Props>`
//   font-size: ${(props) => props.fontSize ? props.fontSize : FONT.S };
//   font-weight: ${(props) => (props.fontWeight ? props.fontWeight : FONT.Medium)};
//   color: ${(props)=> props.fontColor ?props.fontColor : COLOR.Gray1 };
//   background: ${(props)=> props.backGround ?props.backGround : COLOR.Gray4 };
// `;
