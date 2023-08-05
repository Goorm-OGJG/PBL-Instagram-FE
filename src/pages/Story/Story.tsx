import * as S from "./Story.style";
import ControlBox from "./components/ControlBox/ControlBox";
import StoryIcon from "./components/StoryIcon/StoryIcon";

function Story() {
  return (
    <S.Main>
      <S.NowStoryWrapper>
        <StoryIcon type="arrow-left" />
        <StoryIcon type="arrow-right" />
        <S.StoryHeader>
          <S.ProgressBox>
            <S.Progress />
            <S.Progress />
            <S.Progress />
          </S.ProgressBox>
          <S.StoryInfo>
            <S.UserInfo>
              <S.ProfileImg src="https://pbl-insta-image.s3.ap-northeast-2.amazonaws.com/images/quokka-gea2e028ee_1280.jpg" />
              <S.UserName to="/accounts/username">tmpusername</S.UserName>
              <S.UploadTime>23시간</S.UploadTime>
            </S.UserInfo>
            <ControlBox />
          </S.StoryInfo>
        </S.StoryHeader>
        <S.StoryImg src="https://cdn.pixabay.com/photo/2023/05/12/19/02/mountains-7989160_1280.jpg" />
        <StoryIcon type="like" />
      </S.NowStoryWrapper>
    </S.Main>
  );
}

export default Story;
