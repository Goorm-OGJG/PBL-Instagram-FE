import React from "react";
import * as S from "./New.style";
import { useRecoilState } from "recoil";
import { testState } from "../../recoil/newState";
import * as FONT from "../../constants/font";

type PropsType = {
  name: string;
  age: number;
};

function New({ name, age }: PropsType) {
  //   useRecoilValue -> 값만 사용
  //   useSetRecoilState -> 변경 함수 사용
  //   useRecoilState -> 값, 변경 함수 둘다 사용
  const [test, setTest] = useRecoilState<boolean>(testState);

  return (
    <React.Fragment>
      <S.StyledDiv
        onClick={() => {
          setTest(!test);
        }}
      >
        New
        <br />
        recoil test: {String(test)}
        <br />
        name: {name}
        <br />
        age: {age}
      </S.StyledDiv>
      <S.ConstantTestDiv fontSize={FONT.XL} fontWeight={FONT.Bold}>
        상수 테스트
      </S.ConstantTestDiv>
      {/* <S.FontTestDiv>폰트 테스트</S.FontTestDiv> */}
    </React.Fragment>
  );
}

New.defaultProps = {
  name: "Kim",
  age: 13,
};

export default New;
