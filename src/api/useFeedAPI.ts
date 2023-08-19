import * as T from "../types/request/feed.request";
import React from "react";
import { FeedDataType } from "../types/client/feed.client";
import { useAxios } from "./useAxios";

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
        console.log(response);
        setData((prev) => [...prev, ...response.data.contents]);
        if (response.data.last) {
          setLast(response.data.last);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 상세정보 불러오기
  const requestFeedDetail = (feedId: string) => {
    axios
      .get(`${feedURL}/${feedId}`)
      .then((response) => {
        console.log(response.data);
        console.log("피드 모달 상세 데이터 요청 불러오기");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 좋아요한 목록 불러오기
  const requestLikeList = (feedId: string) => {
    axios
      .get(`${feedURL}/${feedId}/currentLike`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 대댓글 불러오기
  const requestInnerComment = (
    feedId: string,
    commentId: string,
    page: number,
    size: number,
  ) => {
    axios
      .get(`${feedURL}/${feedId}/comment/${commentId}?page=${page}&size=${size}`)
      .then((response) => {
        console.log(response.data);
        console.log("대댓글 데이터 요청 불러오기");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 작성
  const requestFeed = (payload: T.FeedPayloadType) => {
    axios
      .post(`${feedURL}`, payload)
      .then((response) => {
        console.log("피드 작성 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 수정 -> 안할 수도 있음
  // 피드 삭제
  const requestDeleteFeed = (feedId: string) => {
    axios
      .delete(`${feedURL}/${feedId}`)
      .then((response) => {
        console.log("피드 삭제 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 보관함 추가
  const requestFeedCollection = (feedId: string) => {
    axios
      .post(`${API_URL}/api/collections/${feedId}`)
      .then((response) => {
        console.log("피드 보관함 추가 요청");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 보관함 삭제
  const requestDeleteFeedCollection = (feedId: string) => {
    axios
      .delete(`${feedURL}/collections/${feedId}`)
      .then((response) => {
        console.log("피드 보관함 삭제 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 좋아요
  const requestFeedLike = (feedId: string) => {
    axios
      .post(`${feedURL}/${feedId}/like`)
      .then((response) => {
        console.log("피드 보관함 추가 요청");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 좋아요 삭제
  const requestDeleteFeedLike = (feedId: string) => {
    axios
      .delete(`${feedURL}/${feedId}/like`)
      .then((response) => {
        console.log("피드 보관함 삭제 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 댓글 작성
  const requestComment = (feedId: string, payload: T.CommentPayloadType) => {
    axios
      .post(`${feedURL}/${feedId}/comment`, payload)
      .then((response) => {
        console.log("피드 댓글 작성 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 피드 댓글 삭제
  const requestDeleteComment = (feedId: string, commentId: string) => {
    axios
      .delete(`${feedURL}/${feedId}/comment/${commentId}`)
      .then((response) => {
        console.log("피드 댓글 삭제 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 댓글 좋아요
  const requestCommentLike = (commentId: string) => {
    axios
      .post(`${API_URL}/api/comment/${commentId}/likes`)
      .then((response) => {
        console.log("피드 댓글 좋아요 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 피드 댓글 좋아요 삭제
  const requestDeleteCommentLike = (commentId: string) => {
    axios
      .delete(`${API_URL}/api/comment/${commentId}/likes`)
      .then((response) => {
        console.log("피드 댓글 좋아요 취소 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 피드 대댓글 작성
  const requestPostInnerComment = (payload: T.InnerCommentPayloadType) => {
    axios
      .post(`${API_URL}/api/comment/${payload.commentId}/innerComment`, payload)
      .then((response) => {
        console.log("피드 대댓글 작성 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 피드 대댓글 삭제
  const requestDeleteInnerComment = (commentId: string, innerCommentId: string) => {
    axios
      .delete(`${API_URL}/api/comment/${commentId}/innerComment/${innerCommentId}`)
      .then((response) => {
        console.log("피드 대댓글 삭제 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 피드 대댓글 좋아요
  const requestInnerCommentLike = (innerCommentId: string) => {
    axios
      .post(`${API_URL}/api/innerComment/${innerCommentId}/likes`)
      .then((response) => {
        console.log("피드 대댓글 좋아요 요청", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const requestDeleteInnerCommentLike = (innerCommentId: string) => {
    axios
      .delete(`${API_URL}/api/innerComment/${innerCommentId}/likes`)
      .then((response) => {
        console.log("피드 대댓글 삭제 요청", response);
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
  };
}
