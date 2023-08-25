import * as S from "./LikeModal.style";
import * as Icon from "../../../../components/Icon";
import { useRecoilState } from "recoil";
import { isLikeModalOpenState } from "../../../../recoil/homeState";
import { useEffect, useState } from "react";
import { useFeedAPI } from "../../../../api/useFeedAPI";
import { LikeUserType } from "../../../../types/client/feed.client";
import React from "react";

export default function LikeModal() {
  const [isLikeModalOpen, setIsLikeModalOpen] = useRecoilState(isLikeModalOpenState);
  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === "overlay") {
      setIsLikeModalOpen({ id: 0, type: "feed" });
    }
  };

  const { requestLikeList, requestCommentLikeList, requestInnerCommentLikeList } =
    useFeedAPI();
  const [datas, setData] = useState<LikeUserType[]>([]);

  useEffect(() => {
    if (isLikeModalOpen.type === "feed") {
      requestLikeList(isLikeModalOpen.id, setData);
    } else if (isLikeModalOpen.type === "comment") {
      requestCommentLikeList(isLikeModalOpen.id, setData);
    } else if (isLikeModalOpen.type === "innerComment") {
      requestInnerCommentLikeList(isLikeModalOpen.id, setData);
    }
  }, []);

  const nickname = localStorage.getItem("nickname");
  return (
    <S.Overlay id="overlay" onClick={closeHandler}>
      <S.FollowModalWrapper>
        <S.FollowModalHeader>
          <S.FollowModalTitle>좋아요</S.FollowModalTitle>
          <S.FollowModalExitBtn
            id="close"
            onClick={() => setIsLikeModalOpen({ id: 0, type: "feed" })}
          >
            <Icon.Close />
          </S.FollowModalExitBtn>
        </S.FollowModalHeader>
        <S.FollowModalBody>
          {datas.length > 0 &&
            datas.map((data) => (
              <S.FollowModalBox key={data.nickname}>
                <S.FollowProfileImgBox to={`/accounts/${data.nickname}`}>
                  <S.ProfileImg src={data.userImg ? data.userImg : data.profileImg} />
                </S.FollowProfileImgBox>
                <S.FollowProfileNicknameBox>
                  <S.Nickname to={`/accounts/${data.nickname}`}>
                    {data.nickname}
                  </S.Nickname>
                </S.FollowProfileNicknameBox>
                <S.FollowDeleteBox>
                  {nickname !== data.nickname && (
                    <React.Fragment>
                      {data.followStatus ? (
                        <S.DeleteBtn>삭제</S.DeleteBtn>
                      ) : (
                        <S.FollowBtn>팔로우</S.FollowBtn>
                      )}
                    </React.Fragment>
                  )}
                </S.FollowDeleteBox>
              </S.FollowModalBox>
            ))}
        </S.FollowModalBody>
      </S.FollowModalWrapper>
    </S.Overlay>
  );
}
