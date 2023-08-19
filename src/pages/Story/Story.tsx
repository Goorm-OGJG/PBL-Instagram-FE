import React from "react";
import * as S from "./Story.style";
import StoryContent from "./components/StoryContent/StoryContent";
import * as Icon from "../../components/Icon";
import { storyDataState } from "../../recoil/storyState";
import { useRecoilValue } from "recoil";

function Story() {
  const data = useRecoilValue(storyDataState);
  console.log(data);
  return (
    <React.Fragment>
      <S.Main>
        {data.map((story, index) => (
          <StoryContent key={story.storyId} story={story} index={index} />
        ))}
        <S.IconBox to="/home">
          <Icon.Close size={32} />
        </S.IconBox>
      </S.Main>
    </React.Fragment>
  );
}

export default Story;
