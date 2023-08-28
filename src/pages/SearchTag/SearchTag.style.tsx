import styled from "styled-components";
import * as FONT from "../../constants/font";
import * as COLOR from "../../constants/color";

export const SearchTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100%-40px);
  max-width: 935px;
  margin: 0 auto 30px;
  min-height: 100vh;
  padding: 30px 20px 0;
  overflow-x: hidden;
`;
export const SearchPopular = styled.div`
  font-size: ${FONT.S};
  font-weight: ${FONT.Bold};
  line-height: 18px;
  color: ${COLOR.Gray2};
`;

export const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 5px;
  column-gap: 5px;
`;

export const FeedBox = styled.div`
  position: relative;
  color: white;
  width: 100%;
  height: 300px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;

export const FeedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    filter: brightness(0.5);
  }
`;

export const FeedHoverMutiple = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  font-size: ${FONT.ML};
  font-weight: ${FONT.Bold};
  z-index: 10;
`;

export const FeedHover = styled.div`
  position: absolute;
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: ${FONT.ML};
  font-weight: ${FONT.Bold};
  z-index: 100;
`;

export const FeedHoverMultiItem = styled.div`
  margin: 5px 10px;
  align-self: center;
  justify-content: center;
  font-size: ${FONT.ML};
  font-weight: ${FONT.Bold};
  color: rgba(255, 255, 255, 0.8);
`;

export const FeedHoverItem = styled.div`
  margin: 0px 15px;
  align-self: center;
  justify-content: center;
  font-size: ${FONT.ML};
  font-weight: ${FONT.Bold};
`;
