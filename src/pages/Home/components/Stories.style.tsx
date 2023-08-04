import { styled } from "styled-components";
interface StyleProps {
  direction?: string;
  isHover?: boolean;
}
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 630px;
  padding: 16px 0;
  margin-top: 32px;
  height: 117px;
`;

export const StoriesWrapper = styled.div`
  display: flex;
  width: 630px;
  position: absolute;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const IconBox = styled.div<StyleProps>`
  display: flex;
  position: absolute;
  z-index: 10;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  top: 50%;
  transform: translateY(-50%);

  right: ${(props) => props.direction === "right" && "0"};
  left: ${(props) => props.direction === "left" && "0"};

  opacity: ${(props) => (props.isHover ? "1" : "0")};
  visibility: ${(props) => (props.isHover ? "visible" : "hidden")};
`;
