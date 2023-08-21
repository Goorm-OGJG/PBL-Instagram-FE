import React from "react";
import * as S from "./Story.style";
import StoryContent from "./components/StoryContent/StoryContent";
import * as Icon from "../../components/Icon";
import { nowStoryState, storyDataState } from "../../recoil/storyState";
import { useRecoilValue, useSetRecoilState } from "recoil";

function Story() {
  const data = useRecoilValue(storyDataState);
  // console.log(data);
  const setNowStory = useSetRecoilState(nowStoryState);
  return (
    <React.Fragment>
      <S.Main>
        {data.map((story, index) => (
          <StoryContent key={story.storyId} story={story} index={index} />
        ))}
        <S.IconBox to="/home" onClick={() => setNowStory(-1)}>
          <Icon.Close size={32} />
        </S.IconBox>
      </S.Main>
    </React.Fragment>
  );
}

export default Story;
