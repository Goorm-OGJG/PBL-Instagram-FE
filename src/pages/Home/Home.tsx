import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SideUserRecommend from "./components/SideUserRecommend/SideUserRecommend";
import * as S from "./Home.style";
import Footer from "./components/Footer/Footer";
import Stories from "./components/Stories/Stories";
import Feeds from "./components/Feeds/Feeds";
import FeedModal from "./components/FeedModal/FeedModal";
import { useRecoilValue } from "recoil";
import {
  isLikeModalOpenState,
  isModalOpenState,
  whichAddModalOpenState,
} from "../../recoil/homeState";
import AddModal from "../../components/AddModal/AddModal";
import LikeModal from "./components/LikeModal/LikeModal";

function Home() {
  const isModalOpen = useRecoilValue(isModalOpenState);
  const whichModalOpen = useRecoilValue(whichAddModalOpenState);
  const isLikeModalOpen = useRecoilValue(isLikeModalOpenState);
  return (
    <React.Fragment>
      <Sidebar />
      <S.Main>
        <S.Wrapper>
          <S.MainWrapper>
            <Stories></Stories>
            <Feeds></Feeds>
          </S.MainWrapper>
          <S.SideWrapper>
            <SideUserRecommend />
            <Footer />
          </S.SideWrapper>
        </S.Wrapper>
      </S.Main>
      {isModalOpen && <FeedModal />}
      {whichModalOpen === "feed" && <AddModal type="feed" />}
      {whichModalOpen === "story" && <AddModal type="story" />}
      {isLikeModalOpen && <LikeModal />}
    </React.Fragment>
  );
}

export default Home;
