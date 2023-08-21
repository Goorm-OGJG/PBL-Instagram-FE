import * as T from "../types/request/feed.request";
import React from "react";
import { FeedDataType, FeedDetailType, LikeUserType } from "../types/client/feed.client";
import { useAxios } from "./useAxios";
import { SetterOrUpdater } from "recoil";
import { InnerCommentType } from "../recoil/homeState";

export function useFeedAPI() {
  const API_URL = import.meta.env.VITE_API_URL;
  const feedURL = `${API_URL}/api/feeds`;
  const axios = useAxios();
  // 피드 목록 불러오기
  const requestFeedList = (
    page: number,
    size: number,
    setData: React.Dispatch<React.SetStateAction<FeedDataType[] | []>>,
    setLast: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    axios
      .get(`${feedURL}?page=${page}&size=${size}`)
      .then((response) => {
        if (response) {
          setData((prev) => [...prev, ...response.data.contents]);
        }
        if (response.data.last) {
          setLast(response.data.last);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 상세정보 불러오기
  const requestFeedDetail = (
    feedId: number,
    setData?: React.Dispatch<React.SetStateAction<FeedDetailType>>,
  ) => {
    axios
      .get(`${feedURL}/${feedId}`)
      .then((response) => {
        if (response) {
          if (setData) {
            setData(response.data);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 좋아요한 목록 불러오기
  const requestLikeList = (
    feedId: number,
    setData: React.Dispatch<React.SetStateAction<LikeUserType[]>>,
  ) => {
    axios
      .get(`${API_URL}/api/feed/${feedId}/likeUser`)
      .then((response) => {
        if (response) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 댓글 좋아요 목록
  const requestCommentLikeList = (
    commentId: number,
    setData: React.Dispatch<React.SetStateAction<LikeUserType[]>>,
  ) => {
    axios
      .get(`${API_URL}/api/comment/${commentId}/likesUser`)
      .then((response) => {
        if (response) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 대댓글 좋아요 목록
  const requestInnerCommentLikeList = (
    innerCommentId: number,
    setData: React.Dispatch<React.SetStateAction<LikeUserType[]>>,
  ) => {
    axios
      .get(`${API_URL}/api/innerComment/${innerCommentId}/likesUser`)
      .then((response) => {
        if (response) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 대댓글 불러오기
  const requestInnerComment = (
    commentId: number,
    setData: React.Dispatch<React.SetStateAction<InnerCommentType[]>>,
  ) => {
    axios
      .get(`${API_URL}/api/comments/${commentId}/inner-comments`)
      .then((response) => {
        if (response) {
          setData(response.data.innerComments);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 작성
  const requestFeed = (
    payload: T.FeedPayloadType,
    setData: React.Dispatch<React.SetStateAction<FeedDataType[] | []>>,
  ) => {
    axios
      .post(`${feedURL}`, payload)
      .then((response) => {
        if (response) {
          axios
            .get(`${feedURL}?page=${0}&size=${1}`)
            .then((response) => {
              if (response) {
                setData((prev) => [...response.data.contents, ...prev]);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 수정 -> 안할 수도 있음
  // 피드 삭제
  const requestDeleteFeed = (feedId: number) => {
    axios
      .delete(`${feedURL}/${feedId}`)
      .then((response) => {
        if (response) {
          if (response.status === 200) {
            window.location.reload();
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 보관함 추가
  const requestFeedCollection = (
    feedId: number,
    setData?: SetterOrUpdater<FeedDetailType>,
  ) => {
    axios
      .post(`${API_URL}/api/collections/${feedId}`)
      .then((response) => {
        requestFeedDetail(feedId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 보관함 삭제
  const requestDeleteFeedCollection = (
    feedId: number,
    setData?: SetterOrUpdater<FeedDetailType>,
  ) => {
    axios
      .delete(`${API_URL}/api/collections/${feedId}`)
      .then(() => {
        requestFeedDetail(feedId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 좋아요
  const requestFeedLike = (feedId: number, setData?: SetterOrUpdater<FeedDetailType>) => {
    axios
      .post(`${API_URL}/api/feed/${feedId}/like`)
      .then(() => {
        requestFeedDetail(feedId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 좋아요 삭제
  const requestDeleteFeedLike = (
    feedId: number,
    setData?: SetterOrUpdater<FeedDetailType>,
  ) => {
    axios
      .delete(`${API_URL}/api/feed/${feedId}/like`)
      .then(() => {
        requestFeedDetail(feedId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 댓글 작성
  const requestComment = (
    feedId: number,
    payload: T.CommentPayloadType,
    setData: React.Dispatch<React.SetStateAction<FeedDetailType>>,
  ) => {
    axios
      .post(`${feedURL}/${feedId}/comments`, payload)
      .then(() => {
        requestFeedDetail(feedId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 피드 댓글 삭제
  const requestDeleteComment = (
    commentId: number,
    feedId: number,
    setData: React.Dispatch<React.SetStateAction<FeedDetailType>>,
  ) => {
    axios
      .delete(`${API_URL}/api/comments/${commentId}`)
      .then(() => {
        requestFeedDetail(feedId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 댓글 좋아요
  const requestCommentLike = (
    commentId: number,
    feedId: number,
    setData: React.Dispatch<React.SetStateAction<FeedDetailType>>,
  ) => {
    axios
      .post(`${API_URL}/api/comment/${commentId}/like`)
      .then(() => {
        requestFeedDetail(feedId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 피드 댓글 좋아요 삭제
  const requestDeleteCommentLike = (
    commentId: number,
    feedId: number,
    setData: React.Dispatch<React.SetStateAction<FeedDetailType>>,
  ) => {
    axios
      .delete(`${API_URL}/api/comment/${commentId}/like`)
      .then(() => {
        requestFeedDetail(feedId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 대댓글 작성
  const requestPostInnerComment = (commentId: number, content: string) => {
    axios
      .post(`${API_URL}/api/comments/${commentId}/inner-comment`, { content })
      .then(() => {
        // requestInnerComment(commentId, setData, setCommentId);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 피드 대댓글 삭제
  const requestDeleteInnerComment = (
    innerCommentId: number,
    setData: React.Dispatch<React.SetStateAction<InnerCommentType[]>>,
    commentId: number,
  ) => {
    axios
      .delete(`${API_URL}/api/inner-comments/${innerCommentId}`)
      .then(() => {
        requestInnerComment(commentId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 피드 대댓글 좋아요
  const requestInnerCommentLike = (
    innerCommentId: number,
    setData: React.Dispatch<React.SetStateAction<InnerCommentType[]>>,
    commentId: number,
  ) => {
    axios
      .post(`${API_URL}/api/inner-comment/${innerCommentId}/like`)
      .then(() => {
        requestInnerComment(commentId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const requestDeleteInnerCommentLike = (
    innerCommentId: number,
    setData: React.Dispatch<React.SetStateAction<InnerCommentType[]>>,
    commentId: number,
  ) => {
    axios
      .delete(`${API_URL}/api/inner-comment/${innerCommentId}/like`)
      .then(() => {
        requestInnerComment(commentId, setData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 대댓글 좋아요 삭제

  return {
    requestFeedList,
    requestFeedDetail,
    requestLikeList,
    requestInnerComment,
    requestFeed,
    requestDeleteFeed,
    requestFeedCollection,
    requestDeleteFeedCollection,
    requestFeedLike,
    requestDeleteFeedLike,
    requestComment,
    requestDeleteComment,
    requestCommentLike,
    requestDeleteCommentLike,
    requestPostInnerComment,
    requestDeleteInnerComment,
    requestInnerCommentLike,
    requestDeleteInnerCommentLike,
    requestCommentLikeList,
    requestInnerCommentLikeList,
  };
}
