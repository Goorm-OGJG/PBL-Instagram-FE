import * as S from "./ControlBox.style";
import StoryIcon from "../StoryIcon/StoryIcon";
import { useRecoilState } from "recoil";
import { isSettingState } from "../../../../recoil/storyState";
import { useStoryAPI } from "../../../../api/useStoryAPI";
import { useNavigate, useParams } from "react-router";

interface Props {
  nickname: string;
}

function ControlBox({ nickname }: Props) {
  const [isSetting, setIsSetting] = useRecoilState(isSettingState);
  const { storyId } = useParams();
  const { requestDeleteStory } = useStoryAPI();
  const navigate = useNavigate();
  const myNickname = localStorage.getItem("nickname");
  const storyDeleteHandler = () => {
    // alert("스토리 삭제 요청");
    if (nickname === myNickname) {
      requestDeleteStory(storyId as string);
      navigate("/home");
      setIsSetting(false);
    }
  };
  // console.log(nickname, myNickname);
  return (
    <S.ControlBoxStyle>
      <StoryIcon type="play" />
      <StoryIcon type="volume" />
      <StoryIcon type="settings" />
      {nickname === myNickname && isSetting && (
        <S.Div onClick={storyDeleteHandler}>스토리 삭제</S.Div>
      )}
    </S.ControlBoxStyle>
  );
}

export default ControlBox;
