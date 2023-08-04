import React from "react";
import Sidebar from "../../components/Sidebar";
import SideUserRecommend from "./components/SideUserRecommend";
import * as S from "./Home.style";
import Footer from "./components/Footer";
import Stories from "./components/Stories";
import Feeds from "./components/Feeds";

function Home() {
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
    </React.Fragment>
  );
}

export default Home;
