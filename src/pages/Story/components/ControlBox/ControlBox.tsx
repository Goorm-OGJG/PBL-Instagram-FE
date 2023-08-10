import * as S from "./ControlBox.style";
import StoryIcon from "../StoryIcon/StoryIcon";

function ControlBox() {
  return (
    <S.ControlBoxStyle>
      <StoryIcon type="play" />
      <StoryIcon type="volume" />
      <StoryIcon type="settings" />
    </S.ControlBoxStyle>
  );
}

export default ControlBox;
