import React, { useState } from "react";
import * as S from "./Story.style";
import StoryContent from "./components/StoryContent/StoryContent";
import * as Icon from "../../components/Icon";

function Story() {
  const [idx, setIdx] = useState(4);
  return (
    <React.Fragment>
      <S.Main>
        <StoryContent id="1" idx={idx} setIdx={setIdx} />
        <StoryContent id="2" idx={idx} setIdx={setIdx} />
        <StoryContent id="3" idx={idx} setIdx={setIdx} />
        <StoryContent id="4" idx={idx} setIdx={setIdx} />
        <StoryContent id="5" idx={idx} setIdx={setIdx} />
        <StoryContent id="6" idx={idx} setIdx={setIdx} />
        <StoryContent id="7" idx={idx} setIdx={setIdx} />
        <S.IconBox to="/home">
          <Icon.Close size={32} />
        </S.IconBox>
      </S.Main>
    </React.Fragment>
  );
}

export default Story;
