import { useRef, useState, useEffect } from "react";
import Story from "./Story";
import * as Icon from "../../../components/Icon";
import * as S from "./Stories.style";

function Stories() {
  const ref = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);

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

  useEffect(() => {
    const refCurrent = ref.current!;
    const leftCurrent = leftRef.current!;
    const righturrent = rightRef.current!;
    refCurrent.addEventListener("mouseover", hoverHandler);
    leftCurrent.addEventListener("mouseover", hoverHandler);
    righturrent.addEventListener("mouseover", hoverHandler);
    refCurrent.addEventListener("mouseleave", leaveHandler);

    return () => {
      refCurrent.removeEventListener("mouseover", hoverHandler);
      leftCurrent.removeEventListener("mouseover", hoverHandler);
      righturrent.removeEventListener("mouseover", hoverHandler);
      refCurrent.removeEventListener("mouseleave", leaveHandler);
    };
  });

  return (
    <S.Wrapper>
      <S.IconBox
        onClick={() => scrollHandler("left")}
        direction="left"
        isHover={isHover}
        ref={leftRef}
      >
        <Icon.Left size={32} color="rgba(255,255,255, 0.8)" />
      </S.IconBox>
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
      </S.StoriesWrapper>
      <S.IconBox
        onClick={() => scrollHandler("right")}
        direction="right"
        isHover={isHover}
        ref={rightRef}
      >
        <Icon.Right size={32} color="rgba(255,255,255, 0.8)" />
      </S.IconBox>
    </S.Wrapper>
  );
}

export default Stories;
