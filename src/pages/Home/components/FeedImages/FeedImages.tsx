import * as S from "./FeedImages.style";
import * as Icon from "../../../../components/Icon";
import { useState, useRef } from "react";
import { MediaData } from "../Feeds/Feeds";

interface Props {
  feedMedia: MediaData[];
}
function FeedImages({ feedMedia }: Props) {
  const [imgPos, setImgPos] = useState<number>(0);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const imgLength = feedMedia.length;

  // 이미지 스크롤 이동
  const arrowHandler = (direction: string) => {
    const current = imgRef.current!;
    switch (direction) {
      case "left":
        current.scrollBy(-470, 0);
        if (imgPos > 0) {
          setImgPos(imgPos - 1);
        }
        break;
      case "right":
        current.scrollBy(470, 0);
        if (imgPos < imgLength - 1) {
          // 이미지 길이로 교체 예정
          setImgPos(imgPos + 1);
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
        {feedMedia.map(({ mediaId, mediaType, mediaUrl }) => {
          if (mediaType === "video") {
            return <S.FeedImg src={mediaUrl} id={mediaId} />;
          } else if (mediaType === "image") {
            return <S.FeedImg src={mediaUrl} id={mediaId} />;
          }
        })}
      </S.ImgBox>
      {/* 밑의 점들 이미지 위치 표시 */}
      <S.ImgPosBox>
        {feedMedia.map(() => {
          if (imgLength > 1) {
            return <S.ImgPos imgPos={imgPos} />;
          }
        })}
        {/* <S.ImgPos imgPos={imgPos} />
        <S.ImgPos imgPos={imgPos} />
        <S.ImgPos imgPos={imgPos} /> */}
      </S.ImgPosBox>
    </S.ImgWrapper>
  );
}

export default FeedImages;
