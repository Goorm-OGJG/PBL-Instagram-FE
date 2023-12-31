import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SideUserRecommend from "./components/SideUserRecommend/SideUserRecommend";
import * as S from "./Home.style";
import Footer from "./components/Footer/Footer";
import Stories from "./components/Stories/Stories";
import Feeds from "./components/Feeds/Feeds";
import FeedModal from "./components/FeedModal/FeedModal";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  isLikeModalOpenState,
  isModalOpenState,
  whichAddModalOpenState,
} from "../../recoil/homeState";
import AddModal from "../../components/AddModal/AddModal";
import LikeModal from "./components/LikeModal/LikeModal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const whichModalOpen = useRecoilValue(whichAddModalOpenState);
  const [isLikeModalOpen, setIsLikeModalOpen] = useRecoilState(isLikeModalOpenState);

  useEffect(() => {
    return () => {
      setIsModalOpen(0);
      setIsLikeModalOpen({ id: 0, type: "feed" });
    };
  }, []);
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
      {isLikeModalOpen.id !== 0 && <LikeModal />}
    </React.Fragment>
  );
}

export default Home;
