import { useRef, useState, useEffect } from "react";
import Story from "../Story/Story";
import * as Icon from "../../../../components/Icon";
import * as S from "./Stories.style";

function Stories() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);

  const scrollHandler = (direction: string) => {
    switch (direction) {
      case "right":
        ref.current?.scrollBy(316, 0);
        console.log(ref.current?.scrollLeft);
        console.log(ref.current?.scrollWidth);

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

      <S.StoriesWrapper ref={ref}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </S.StoriesWrapper>
      {ref.current?.scrollWidth &&
        ref.current?.scrollWidth >= 720 &&
        ref.current.scrollLeft <= (ref.current.scrollWidth as number) - 631 && (
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
