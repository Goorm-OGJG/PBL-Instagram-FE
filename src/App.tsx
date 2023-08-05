import { Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import FindPassword from "./pages/FindPassword/FindPassword";
import Home from "./pages/Home/Home";
import Story from "./pages/Story/Story";
import SearchTag from "./pages/SearchTag/SearchTag";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import SavedProfile from "./pages/SavedProfile/SavedProfile";
import IconsTest from "./pages/IconsTest/IconsTest";
import SetPassword from "./pages/SetPassword/SetPassword";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/help/password" element={<FindPassword />}></Route>
      <Route path="/help/newpassword" element={<SetPassword />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/stories/:userName/:storyId" element={<Story />}></Route>
      <Route path="/explore/tags/:query" element={<SearchTag />}></Route>
      {/* 예비 */}
      <Route path="/feed/:feedId" element={<Feed />}></Route>
      <Route path="/accounts/:userName" element={<Profile />}></Route>
      <Route path="/accounts/:userName/edit" element={<EditProfile />}></Route>
      {/* 예비 */}
      <Route path="/accounts/:userName/feed/saved" element={<SavedProfile />}></Route>
      {/* 삭제 예정 */}
      <Route path="/icons-test" element={<IconsTest />}></Route>
    </Routes>
  );
}

export default App;
