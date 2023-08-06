import { useState } from "react";
import * as S from "./Story.style";
import StoryContent from "./components/StoryContent/StoryContent";

function Story() {
  const [idx, setIdx] = useState(4);
  return (
    <S.Main>
      <StoryContent id="1" idx={idx} setIdx={setIdx} />
      <StoryContent id="2" idx={idx} setIdx={setIdx} />
      <StoryContent id="3" idx={idx} setIdx={setIdx} />
      <StoryContent id="4" idx={idx} setIdx={setIdx} />
      <StoryContent id="5" idx={idx} setIdx={setIdx} />
      <StoryContent id="6" idx={idx} setIdx={setIdx} />
      <StoryContent id="7" idx={idx} setIdx={setIdx} />
    </S.Main>
  );
}

export default Story;
