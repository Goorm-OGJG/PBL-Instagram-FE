import * as S from "./FeedImages.style";
import * as Icon from "../../../../components/Icon";
import { useState, useRef } from "react";
import * as T from "../../../../types/client/feed.client";

interface PropsType {
  feedMedias: T.MediaDataType[];
}
function FeedImages({ feedMedias }: PropsType) {
  const [imgPos, setImgPos] = useState<number>(0);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const imgLength = feedMedias.length;

  // 이미지 스크롤 이동
  const arrowHandler = (direction: string) => {
    const current = imgRef.current!;
    switch (direction) {
      case "left":
        if (current.scrollLeft % 470 === 0) {
          current.scrollBy(-470, 0);
          if (imgPos > 0) {
            setImgPos(imgPos - 1);
          }
        }

        break;
      case "right":
        if (current.scrollLeft % 470 === 0) {
          current.scrollBy(470, 0);
          if (imgPos < imgLength - 1) {
            // 이미지 길이로 교체 예정
            setImgPos(imgPos + 1);
          }
        }

        break;
    }
  };
  return (
    <S.ImgWrapper>
      {/* 이미지 이동 화살표 */}
      <S.Arrow direction="left" imgPos={imgPos} onClick={() => arrowHandler("left")}>
        <Icon.Left size={32} />
      </S.Arrow>
      {imgLength > 1 && (
        <S.Arrow direction="right" imgPos={imgPos} onClick={() => arrowHandler("right")}>
          <Icon.Right size={32} />
        </S.Arrow>
      )}

      {/* 이미지 출력 공간 */}
      <S.ImgBox ref={imgRef}>
        {feedMedias.map(({ mediaId, mediaType, mediaUrl }) => {
          if (mediaType === "video") {
            return (
              <S.FeedImgBox>
                <S.FeedImg as="video" src={mediaUrl} key={mediaId} autoPlay muted loop />
              </S.FeedImgBox>
            );
          } else if (mediaType === "img") {
            return (
              <S.FeedImgBox>
                <S.FeedImg src={mediaUrl} key={mediaId} />
              </S.FeedImgBox>
            );
          }
        })}
      </S.ImgBox>
      {/* 밑의 점들 이미지 위치 표시 */}
      <S.ImgPosBox>
        {feedMedias.map(() => {
          if (imgLength > 1) {
            return <S.ImgPos imgPos={imgPos} />;
          }
        })}
      </S.ImgPosBox>
    </S.ImgWrapper>
  );
}

export default FeedImages;
