import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`;

// 주변 스토리
export const StoryWrapper = styled.div`
  max-width: 600px;
  height: 50vh;
  max-height: 550px;
  min-height: 290px;
  color: white;
  background-color: #ddd;
  position: relative;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;

export const EmptyWrapper = styled(StoryWrapper)`
  opacity: 0;
`;
export const EmptyBox = styled.img`
  height: 100%;
  max-width: 600px;
  object-fit: fill;
  position: relative;
  border-radius: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
