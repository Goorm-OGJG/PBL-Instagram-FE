import { useState, useEffect } from "react";
import * as S from "./Timer.style";

interface PropsType<T> {
  initialMintes: number;
  initialSeconds: number;
  setIsTimerEnd: React.Dispatch<React.SetStateAction<T>>;
}

function Timer({ initialMintes, initialSeconds, setIsTimerEnd }: PropsType<boolean>) {
  const [minutes, setMinutes] = useState(initialMintes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setIsTimerEnd(true);
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds, setIsTimerEnd]);

  return (
    <S.Timer>
      {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
    </S.Timer>
  );
}

export default Timer;
