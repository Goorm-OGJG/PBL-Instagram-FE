import * as T from "../../types/client/profile.client";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileHeader from "./components/ProfileHeader";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ProfileState, SecretState } from "../../recoil/profileState";
import useProfileAPI from "../../api/useProfileAPI";
import ProfileBody from "./components/ProfileBody";

function Profile() {
  const { nickname } = useParams();

  const { requestProfileInfo } = useProfileAPI();
  const setProfileInfo = useSetRecoilState<T.ProfileResponseType>(ProfileState);
  const setSecret = useSetRecoilState<boolean>(SecretState);

  useEffect(() => {
    if (nickname !== undefined) {
      requestProfileInfo(nickname, setProfileInfo, setSecret);
    }
  }, [nickname]);

  return (
    <>
      <Sidebar />
      <ProfileHeader />
      <ProfileBody />
    </>
  );
}

export default Profile;
