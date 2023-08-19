import { useState } from "react";
import * as Icon from "../Icon";
import * as S from "./Sidebar.style";
import Searchbar from "../Searchbar/Searchbar";
import SideMenu from "../SideMenu/SideMenu";

function Sidebar() {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const nickname = localStorage.getItem("nickname");
  const userImg = localStorage.getItem("userImg");

  return (
    <S.Nav>
      <S.Wrapper>
        <S.LogoBox to="/home">
          <S.IconBox>
            <Icon.Insta size={24} />
          </S.IconBox>
        </S.LogoBox>

        <S.SideLink
          to="/home"
          onClick={() => {
            setIsHome(true);
            setIsSearch(false);
            setIsAdd(false);
            setIsMenu(false);
          }}
        >
          <S.IconBox isClick={isHome}>
            <Icon.Home size={24} />
          </S.IconBox>
          <S.IconBox type="fill" isClick={isHome}>
            <Icon.HomeFill size={24} />
          </S.IconBox>
        </S.SideLink>

        <S.SideBox
          onClick={() => {
            setIsHome(false);
            setIsSearch(true);
            setIsAdd(false);
            setIsMenu(false);
          }}
        >
          <S.IconBox type="search" isClick={isSearch}>
            <Icon.Search size={24} />
          </S.IconBox>
        </S.SideBox>
        {/* 만들기 */}
        <S.SideBox
          onClick={() => {
            setIsHome(false);
            setIsSearch(false);
            setIsAdd(!isAdd);
            setIsMenu(false);
          }}
        >
          <S.IconBox isClick={isAdd}>
            <Icon.Add size={24} />
          </S.IconBox>
          <S.IconBox type="fill" isClick={isAdd}>
            <Icon.AddFill size={24} />
          </S.IconBox>
        </S.SideBox>
        {/* 프로필 */}
        <S.SideLink to={`/accounts/${nickname}`}>
          <S.IconBox>
            <S.ProfileImg src={userImg as string} />
          </S.IconBox>
        </S.SideLink>
      </S.Wrapper>
      {/* 메뉴 버튼 */}
      <S.SideBox
        onClick={() => {
          setIsHome(false);
          setIsSearch(false);
          setIsAdd(false);
          setIsMenu(!isMenu);
        }}
      >
        <S.IconBox>
          <Icon.Menu size={24}></Icon.Menu>
        </S.IconBox>
      </S.SideBox>
      <Searchbar isSearch={isSearch} setIsSearch={setIsSearch} />
      {isMenu && <SideMenu type="menu" setState={setIsMenu} />}
      {isAdd && <SideMenu type="add" setState={setIsAdd} />}
    </S.Nav>
  );
}

export default Sidebar;
