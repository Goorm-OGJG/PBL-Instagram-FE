import * as S from "./ControlBox.style";
import StoryIcon from "../StoryIcon/StoryIcon";
import { useRecoilValue } from "recoil";
import { isSettingState } from "../../../../recoil/storyState";

function ControlBox() {
  const isSetting = useRecoilValue(isSettingState);
  return (
    <S.ControlBoxStyle>
      <StoryIcon type="play" />
      <StoryIcon type="volume" />
      <StoryIcon type="settings" />
      {isSetting && <S.Div>스토리 삭제</S.Div>}
    </S.ControlBoxStyle>
  );
}

export default ControlBox;
