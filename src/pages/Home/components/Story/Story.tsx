import * as S from "./Story.style";
import { useNavigate } from "react-router";
import * as T from "../../../../types/client/story.client";
import { useSetRecoilState } from "recoil";
import { nowStoryState } from "../../../../recoil/storyState";

interface PropsType {
  story: T.StoryType;
  index: number;
}

function Story({ story, index }: PropsType) {
  // const }
  // 유저 아이디도 필요할 듯
  // const {storyId, profileImg, nickname} = {...story}
  const navigate = useNavigate();
  const setNowStory = useSetRecoilState(nowStoryState);
  // const data = useRecoilValue(storyDataState);
  const clickHandler = () => {
    console.log(index);
    setNowStory(index);
    navigate(`/stories/${story.nickname}/${story.storyId}`);
  };

  return (
    <S.Wrapper id={story.storyId} onClick={clickHandler}>
      <S.ImageWrapper readAll={!story.readAll}>
        <S.ProfileImg src={story.profileImg} />
      </S.ImageWrapper>
      <S.Span>{story.nickname}</S.Span>
    </S.Wrapper>
  );
}

export default Story;
