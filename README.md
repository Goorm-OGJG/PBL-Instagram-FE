# 인스타그램 클론코딩

## 프로젝트 설명

### 📆 기간

2023.08.01 ~ 2023.08.31

### 🏃 팀 구성

- Frontend
  - 한승재
  - 김준서
  - 조재균
  - 사용 기술 : vite, react, styled-components, recoil, typescript, axios
- Backend
  - 안병규
  - 이정준
  - 이동진

### 💡 인스타그램을 클론코딩 목표

```
한정된 시간 내에 다양한 기능을 구현해보자. 처음으로 팀원들과 합을 맞춰보는 기회를 갖자
```

<!-- ### 📺 시연영상

[Youtube](https://www.youtube.com/watch?v=5tLHyCBxhm4) -->

## 🔎 기능 설명

### 1. 메인

![image](https://github.com/Goorm-OGJG/PBL-Instagram-FE/assets/62943439/fe4e682a-6496-42f3-8363-1c600ac60adc)
![Animation](https://github.com/Goorm-OGJG/PBL-Instagram-FE/assets/62943439/1d078a4f-e19c-4f1b-ab04-d373afd28bdf)
![Animation](https://github.com/Goorm-OGJG/PBL-Instagram-FE/assets/62943439/d7f88a49-ae2f-42a1-a4fc-3e77eca572c2)
- Intersection Observer API를 이용한 무한스크롤 구현.
- 왜 인스타그램은 무한스크롤로 구현했을까? UX적인 측면에서 생각해 보았을때, 휠을 계속해서 내리는 방식이 사용자가 훨씬 편리하게 콘텐츠를 감상할 수 있다.

### 2. 스토리

![Animation](https://github.com/Goorm-OGJG/PBL-Instagram-FE/assets/62943439/1c7105a5-4b96-4a87-a237-24ed27bfda76)

- 스토리 구현의 경우 해당 유저의 스토리 목록이 끝나면 다음 스토리로 navigate 하도록 구현했습니다.
- 5초 마다 하나씩 콘텐츠가 넘어가도록 설정하였고 넘기거나 돌아가고 싶으면 화살표 버튼을 클릭해 이동할 수 있습니다.

### 3. 로그인

![Animation](https://velog.velcdn.com/images/narcoker/post/b805781c-1556-47d1-9318-32879a5be1fc/image.gif)

- Refresh Token과 Access Token을 활용한 로그인 구현.
- Refresh Token의 주기는 1달, Access Token의 주기는 5분입니다.
- Access Token이 만료되면 Refresh Token으로 재발급 받고 원본 요청을 다시 보냅니다.
- Access Token이 유효하지 않은 상태에서 로그인 이후에 접근가능한 URL을 통해 접근하면 로그인 페이지로 리다이렉트 합니다.

### 4. 회원가입

![Animation](https://velog.velcdn.com/images/narcoker/post/610d3dcc-9446-436a-9a81-9e25470c0863/image.gif)

- 이메일 형식이 올바르지 않으면 경고창을 출력합니다.
- 존재하는 이메일을 입력하면 경고창을 출력합니다.
- 존재하는 닉네임을 입력하면 경고창을 출력합니다.
- 비밀번호 형식이 올바르지 않으면 경고창을 출력합니다.
- 비밀번호가 일치하지 않으면 경고창을 출력합니다.

### 5. 회원정보 수정/계정 비공개

<!-- <center><img src="https://images.velog.io/images/pmk4236/post/6c5d92ac-e728-4d6b-bb13-845c4932acdf/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.15.59.png" width="70%" height="70%" /></center> -->

- 매물 클릭 시 해당 ID값으로 상세페이지를 불러오게 했습니다.
- 이미지, 닉네임, 카테고리, 가격, 상세설명, 채팅/조회 수를 불러옵니다.


### 6. 검색

![Animation](https://github.com/Goorm-OGJG/PBL-Instagram-FE/assets/62943439/8a34ed94-cd86-45db-ac70-7b440828eda7)

- #을 붙이고 검색을 하면 해시태그, 아니면 유저를 검색합니다.
- 태그 검색 결과를 클릭 시 해당 태그에 관한 게시물이 있는 페이지로 이동합니다.
- 유저 검색 결과 클릭 시 유저 프로필 페이지로 이동합니다.

### 7. 프로필 편집

![프로필-편집](https://github.com/JamesJoe0830/Instagram/assets/93318615/0f407d3c-3df0-4dbd-a085-4cf13aa1a897)

- 유저의 프로필 편집 페이지에서 이미지, 개인소개글, 다른 유저에게 추천여부, 비공개 설정이 가능하도록 처리했습니다.
- 유저의 사진을 s3에 등록하고 받아온 사진을 변경해 서버로 전송하게 했습니다.

### 8. 팔로잉/팔로우

![팔로우 팔로워 및 비공개](https://github.com/JamesJoe0830/Instagram/assets/93318615/8cc1ec75-c51a-465e-a45d-131583ef11fd)



- 유저가 설정한 비공개에 따라 팔로우가 안되었다면 비공개 처리를 했습니다.
- 팔로우, 팔로워 모달창에서 삭제, 팔로우요청이 가능하도록 했습니다.

### 9. 피드 목록/ 저장된 목록

![피드 저장된 목록 관리](https://github.com/JamesJoe0830/Instagram/assets/93318615/23e001a5-6f9a-497a-a38d-23b959f8f6e9)


- 유저가 올린 피드의 목록, 좋아요수, 댓글수, 여러 사진의 정보를 볼 수 있게 했습니다.
- 저장된 목록은 접속한 계정의 유저만 볼 수 있도록 했고 저장을 누르면 프로필 페이지에서 저장이 가능하도록 했습니다.



## 아쉬웠던 점

- 깃허브 관리를 제대로 하지 못했습니다. 아직 시도해보지 못한 GUI 사용법을 익혀 다음 프로젝트에 반영 예정입니다.

- 코드 효율성의 극대화를 시키지 못한 것이 아쉽습니다. 좀 더 공부하여 잘 짜여진 코드를 만드는 것이 목표입니다.

## 느낀 점

- 클론코딩은 처음이라 그런지 실제 운영사이트와 똑같이 만들고 배포했을 때 너무 신기하고 감격스러웠습니다. 비록 100% 완벽히 구현하진 못했지만 이번 프로젝트를 계기로 다음 클론코딩 프로젝트를 한다면 지금과는 더 많은 성장의 차이를 느낄 수 있지 않을까 생각합니다.
