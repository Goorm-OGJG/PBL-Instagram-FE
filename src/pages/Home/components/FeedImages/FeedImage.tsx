import * as S from "./FeedImage.style";
import * as Icon from "../../../../components/Icon";
import { useState, useRef } from "react";
function FeedImage() {
  const [imgPos, setImgPos] = useState<number>(0);
  const imgRef = useRef<HTMLDivElement | null>(null);
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
        if (imgPos < 2) {
          // 이미지 길이로 교체 예정
          setImgPos(imgPos + 1);
        }
        break;
    }
    console.log(imgPos);
  };
  return (
    <S.ImgWrapper>
      <S.Arrow direction="left" imgPos={imgPos} onClick={() => arrowHandler("left")}>
        <Icon.Left size={32} />
      </S.Arrow>
      <S.Arrow direction="right" imgPos={imgPos} onClick={() => arrowHandler("right")}>
        <Icon.Right size={32} />
      </S.Arrow>
      <S.ImgBox ref={imgRef}>
        <S.FeedImg src="https://images.pexels.com/photos/17836360/pexels-photo-17836360.jpeg" />
        <S.FeedImg src="https://images.pexels.com/photos/17693898/pexels-photo-17693898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <S.FeedImg src="https://images.pexels.com/photos/17781404/pexels-photo-17781404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </S.ImgBox>
      <S.ImgPosBox>
        <S.ImgPos imgPos={imgPos} />
        <S.ImgPos imgPos={imgPos} />
        <S.ImgPos imgPos={imgPos} />
      </S.ImgPosBox>
    </S.ImgWrapper>
  );
}

export default FeedImage;
