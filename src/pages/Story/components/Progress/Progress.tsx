import React, { useRef, useEffect } from "react";
import * as S from "./Progress.style";

interface Props {
  pos: number;
  count: number;
  isPlay: boolean;
  id: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  idx: number;
  setIdx: React.Dispatch<React.SetStateAction<number>>;
  current: HTMLDivElement | null;
}
function Progress({ pos, count, isPlay, id, setCount, idx, setIdx, current }: Props) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const countHandler = () => {
    const full = boxRef.current!.clientWidth;
    const now = progressRef.current!.clientWidth;
    if (now === full - 1) {
      setCount((prev) => prev + 1);
      if (count == 2) {
        setCount(0);
        current?.parentElement?.firstChild?.remove();
        const tmp = current?.cloneNode(true);

        current?.parentElement?.appendChild(tmp as Node);
        setIdx(idx + 1);
      }
    }
  };

  useEffect;
  useEffect(() => {
    if (pos === count && count <= 2 && id === String(idx)) {
      const intervalId = setInterval(countHandler, 10);

      return () => {
        clearInterval(intervalId);
      };
    }
  });

  return (
    <S.ProgressBox ref={boxRef}>
      <S.Progress ref={progressRef} pos={pos} count={count} isPlay={isPlay} />
    </S.ProgressBox>
  );
}

export default Progress;
