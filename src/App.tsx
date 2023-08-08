import { Navigate, Route, Routes } from "react-router";
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
import Protected from "./pages/Protected/Protected";

const LoginRoutes = [
  { path: "/home", component: <Home /> },
  { path: "/stories/:nickname/:storyId", component: <Story /> },
  { path: "/explore/tags/:query", component: <SearchTag /> },
  { path: "/feed/:feedId", component: <Feed /> },
  { path: "/accounts/:nickname", component: <Profile /> },
  { path: "/accounts/:nickname/edit", component: <EditProfile /> },
  { path: "/accounts/:nickname/feed/saved", component: <SavedProfile /> },
];

const LogoutRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <SignUp /> },
  { path: "/help/password", component: <FindPassword /> },
  { path: "/help/newpassword", component: <SetPassword /> },
];

function App() {
  return (
    <Routes>
      {LogoutRoutes.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          element={<Protected element={component} option={false} />}
        />
      ))}
      {LoginRoutes.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          element={<Protected element={component} option={true} />}
        />
      ))}
      <Route path="/icons-test" element={<IconsTest />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
}

export default App;
