import { useRef, useState, useEffect } from "react";
import Story from "../Story/Story";
import * as Icon from "../../../../components/Icon";
import * as S from "./Stories.style";
import * as T from "../../../../types/client/story.client";

function Stories() {
  // 스토리 목록 가져오기 api 사용
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const stories: T.StoryListResponseType = {
    storyList: [
      {
        storyId: "story1",
        nickname: "user123",
        profileImg: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
        createdAt: "2023-08-08",
        mediaList: [
          {
            mediaUrl:
              "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
            likeStatus: true,
          },
          {
            mediaUrl:
              "https://images.pexels.com/photos/17781404/pexels-photo-17781404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            likeStatus: false,
          },
          {
            mediaUrl:
              "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
            likeStatus: true,
          },
        ],
      },
      {
        storyId: "story2",
        nickname: "user456",
        profileImg: "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
        createdAt: "2023-08-07",
        mediaList: [
          {
            mediaUrl:
              "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
            likeStatus: false,
          },
          {
            mediaUrl:
              "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_1280.jpg",
            likeStatus: true,
          },
        ],
      },
    ],
  };

  const scrollHandler = (direction: string) => {
    switch (direction) {
      case "right":
        ref.current?.scrollBy(316, 0);
        // console.log(ref.current?.scrollLeft);
        // console.log(ref.current?.scrollWidth);

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
        {stories && stories.storyList.map((story) => <Story story={story} />)}
      </S.StoriesWrapper>

      {/* 스토리 많아지면 생기는 화살표 */}
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
