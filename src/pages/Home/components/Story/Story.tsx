import * as S from "./Story.style";
import { useNavigate } from "react-router";
import * as T from "../../../../types/client/story.client";

interface PropsType {
  story: T.StoryType;
}

function Story({ story }: PropsType) {
  // const }
  // 유저 아이디도 필요할 듯
  // const {storyId, profileImg, nickname} = {...story}
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/stories/${story.nickname}/${story.storyId}`);
  };

  return (
    <S.Wrapper id={story.storyId} onClick={clickHandler}>
      <S.ImageWrapper>
        <S.ProfileImg src={story.profileImg} />
      </S.ImageWrapper>
      <S.Span>{story.nickname}</S.Span>
    </S.Wrapper>
  );
}

export default Story;
