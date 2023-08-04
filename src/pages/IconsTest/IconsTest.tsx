import { styled } from "styled-components";
import * as Icon from "../../components/Icon";
import * as COLOR from "../../constants/color";
const Div = styled.div`
  /* background: #833ab4;  fallback for old browsers */
  width: 100px;
  height: 100px;
  background: #000; // fallback for old browsers
  background: -webkit-linear-gradient(${COLOR.Main}); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    ${COLOR.Main}
  ); // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+
`;

function IconsTest() {
  return (
    <>
      <div>
        <Icon.Insta size={64} color="black" />
        <Icon.InstaLogo size={64} color="black" />
        <Icon.InstaText size={64} color="black" />
        <Icon.Home size={64} color="blue" />
        <Icon.HomeFill size={64} color="blue" />
        <Icon.Search size={64} color="blue" />
        <Icon.Add size={64} color="blue" />
        <Icon.AddFill size={64} color="blue" />
        <Icon.AddCircle size={64} color="blue" />
        <Icon.Menu size={64} color="blue" />
        <Icon.Heart size={64} color="blue" />
        <Div></Div>
      </div>
      <div>
        <Icon.HeartFill size={64} color="blue" />
        <Icon.Comment size={64} color="blue" />
        <Icon.CommentFill size={64} color="blue" />
        <Icon.Grid size={64} color="blue" />
        <Icon.Bookmark size={64} color="blue" />
        <Icon.BookmarkFill size={64} color="blue" />
        <Icon.Horizontal size={64} color="blue" />
        <Icon.HorizontalBold size={64} color="blue" />
      </div>
      <div>
        <Icon.Close size={64} color="blue" />
        <Icon.Play size={64} color="blue" />
        <Icon.Pause size={64} color={COLOR.Blue1} />
        <Icon.Volume size={64} color={COLOR.Blue2} />
        <Icon.Mute size={64} color={COLOR.Gray1} />
        <Icon.Left size={64} color={COLOR.Gray2} />
        <Icon.Right size={64} color={COLOR.Gray3} />
        <Icon.BoxMultiple size={64} color={COLOR.Gray4} />
        <Icon.Lock size={64} color={COLOR.Red1} />
      </div>
    </>
  );
}

export default IconsTest;
