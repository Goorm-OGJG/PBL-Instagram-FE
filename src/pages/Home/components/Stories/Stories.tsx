import { useRef, useState, useEffect } from "react";
import Story from "../Story/Story";
import * as Icon from "../../../../components/Icon";
import * as S from "./Stories.style";
// import * as T from "../../../../types/client/story.client";
import { useRecoilState } from "recoil";
import { storyDataState } from "../../../../recoil/storyState";
import { useStoryAPI } from "../../../../api/useStoryAPI";

function Stories() {
  // 스토리 목록 가져오기 api 사용
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [data, setData] = useRecoilState(storyDataState);
  const { requestStoryList } = useStoryAPI();
  const scrollHandler = (direction: string) => {
    switch (direction) {
      case "right":
        ref.current?.scrollBy(316, 0);

        break;
      case "left":
        ref.current?.scrollBy(-316, 0);
        break;
    }
  };

  const hoverHandler = () => {
    setIsHover(true);
  };

  const leaveHandler = () => {
    setIsHover(false);
  };

  // data 관련 useEffect
  useEffect(() => {
    requestStoryList(setData);
  }, []);
  // event handler 관련 useEffect
  useEffect(() => {
    const refCurrent = ref.current!;
    refCurrent.addEventListener("mouseover", hoverHandler);
    refCurrent.addEventListener("mouseleave", leaveHandler);

    return () => {
      refCurrent.removeEventListener("mouseover", hoverHandler);
      refCurrent.removeEventListener("mouseleave", leaveHandler);
    };
  });

  return (
    <S.Wrapper>
      {/* 스토리 많아지면 생기는 화살표 */}
      {ref.current?.scrollLeft !== 0 && (
        <S.IconBox
          onClick={() => scrollHandler("left")}
          direction="left"
          isHover={isHover}
          onMouseOver={hoverHandler}
          // onMouseLeave={leaveHandler}
        >
          <Icon.Left size={32} color="rgba(255,255,255, 0.8)" />
        </S.IconBox>
      )}
      {/* 스토리 목록 출력 */}
      <S.StoriesWrapper ref={ref}>
        {data.length > 0 &&
          data.map((story, index) => (
            <Story key={story.storyId} story={story} index={index} />
          ))}
      </S.StoriesWrapper>

      {/* 스토리 많아지면 생기는 화살표 */}
      {ref.current?.scrollWidth &&
        ref.current?.scrollWidth >= 630 &&
        ref.current.scrollLeft <= (ref.current.scrollWidth as number) - 630 && (
          <S.IconBox
            onClick={() => scrollHandler("right")}
            direction="right"
            isHover={isHover}
            onMouseOver={hoverHandler}
          >
            <Icon.Right size={32} color="rgba(255,255,255, 0.8)" />
          </S.IconBox>
        )}
    </S.Wrapper>
  );
}

export default Stories;
