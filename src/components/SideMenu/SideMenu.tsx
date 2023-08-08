import React from "react";
import * as S from "./SideMenu.style";
import { useSetRecoilState } from "recoil";
import { whichAddModalOpenState } from "../../recoil/homeState";

interface Props {
  type: string;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideMenu({ type, setState }: Props) {
  const setWhichAddModalOpen = useSetRecoilState(whichAddModalOpenState);
  return (
    <S.Div type={type}>
      {type === "menu" && (
        <React.Fragment>
          <S.Span>설정</S.Span>
          <S.Span>저장됨</S.Span>
          <S.Span>로그아웃</S.Span>
        </React.Fragment>
      )}
      {type === "add" && (
        <React.Fragment>
          <S.Span
            onClick={() => {
              setWhichAddModalOpen("feed");
              setState(false);
            }}
          >
            피드 만들기
          </S.Span>
          <S.Span
            onClick={() => {
              setWhichAddModalOpen("story");
              setState(false);
            }}
          >
            스토리 만들기
          </S.Span>
        </React.Fragment>
      )}
    </S.Div>
  );
}

export default SideMenu;
